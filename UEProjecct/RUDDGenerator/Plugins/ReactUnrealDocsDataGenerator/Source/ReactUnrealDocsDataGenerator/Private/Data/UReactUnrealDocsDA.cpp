// Copyright Clusterfact Games. All Rights Reserved.

#include "Data/UReactUnrealDocsDA.h"

#include "JsonObjectConverter.h"
#include "GameFramework/Character.h"
#include "Kismet/BlueprintAsyncActionBase.h"

UReactUnrealDocsDA::UReactUnrealDocsDA(const FObjectInitializer& OI) : Super(OI)
{
	ClassesToIgnoreWhenGeneratingData.Add(UActorComponent::StaticClass());
	ClassesToIgnoreWhenGeneratingData.Add(AActor::StaticClass());
	ClassesToIgnoreWhenGeneratingData.Add(ACharacter::StaticClass());
	ClassesToIgnoreWhenGeneratingData.Add(APawn::StaticClass());
	ClassesToIgnoreWhenGeneratingData.Add(APlayerController::StaticClass());
	ClassesToIgnoreWhenGeneratingData.Add(AController::StaticClass());
	ClassesToIgnoreWhenGeneratingData.Add(UBlueprintAsyncActionBase::StaticClass());

	FunctionsToIgnoreIfContainsString.Add("ExecuteUberGraph");
	FunctionsToIgnoreIfContainsString.Add("ReceiveTick");
	FunctionsToIgnoreIfContainsString.Add("ReceiveBeginPlay");
}

void UReactUnrealDocsDA::AddNewClass(const FReactDocsClass& NewData)
{
	ClassDataMap.Add(FName(NewData.ClassName), NewData);
}


void UReactUnrealDocsDA::AddNewNode(const FReactDocsNodeData& NewData)
{
	NodeDataMap.Add(FName(NewData.Name), NewData);
}

void UReactUnrealDocsDA::AddNewProperty(const FName ClassName, const FReactDocsPropertyData& NewData)
{
	if (!PropertyDataMap.Contains(ClassName))
		PropertyDataMap.Add(ClassName);

	if (const auto PropsForClass = PropertyDataMap.Find(ClassName))
	{
		PropsForClass->ClassName = ClassName.ToString();
		for (auto& Element : PropsForClass->Properties)
		{
			if (Element.Name == NewData.Name)
			{
				Element = NewData;
				return;
			}
		}
		PropsForClass->Properties.Add(NewData);
	}
}

void UReactUnrealDocsDA::AddNewCustomData(const FReactDocsCustomDataType& NewData, EReactDocs_CustomDataType DataType)
{
	TArray<FReactDocsCustomDataType>* ArrayToUse = nullptr;
	switch (DataType)
	{
		case EReactDocs_CustomDataType::DELEGATE:
			ArrayToUse = &DatatypeData.Delegates;
			break;
		case EReactDocs_CustomDataType::STRUCT:
			ArrayToUse = &DatatypeData.Structs;
			break;
		case EReactDocs_CustomDataType::ENUM:
			ArrayToUse = &DatatypeData.Enums;
			break;
		default: ;
	}

	if (ArrayToUse != nullptr)
	{
		if (!ArrayToUse->Contains(NewData))
			ArrayToUse->Add(NewData);
		else
			(*ArrayToUse)[ArrayToUse->IndexOfByKey(NewData)] = NewData;
	}
}

bool UReactUnrealDocsDA::ShowData(const UReactDocsDataObjectNative& DataObject)
{
	FReactDocsClass* ClassData = nullptr;
	const UReactDocsDataObjectNative* ClassObject = DataObject.GetClassDataObject();
	if (DataObject.DataType < EReactDocs_Type::DATATYPE)
	{
		ClassData = ClassDataMap.Find(ClassObject->DataName);
		if (ClassData == nullptr) return false;
	}

	FString JSONPayload;

	switch (DataObject.DataType)
	{
		case EReactDocs_Type::CLASS:
			{
				if (FJsonObjectConverter::UStructToJsonObjectString(*ClassData, JSONPayload, 0, 0))
				{
					SetCurrentJSONString(JSONPayload, ClassData);
					return true;
				}
				break;
			}
		case EReactDocs_Type::PROPERTY:
			{
				const FReactDocsPropertyData* Data = ClassData->FindPropertyData(&DataObject);
				if (FJsonObjectConverter::UStructToJsonObjectString(*Data, JSONPayload, 0, 0))
				{
					SetCurrentJSONString(JSONPayload, Data);
					return true;
				}
				break;
			}
		case EReactDocs_Type::NODE:
			{
				const FReactDocsNodeData* Data = ClassData->FindNodeData(&DataObject);

				if (FJsonObjectConverter::UStructToJsonObjectString(*Data, JSONPayload, 0, 0))
				{
					SetCurrentJSONString(JSONPayload, Data);
					return true;
				}
				break;
			}
		case EReactDocs_Type::DATATYPE:
			{
				EReactDocs_CustomDataType FoundDataType;
				TArray<FReactDocsCustomDataType> FoundArray;
				if (const FReactDocsCustomDataType* CustomData = DatatypeData.IterateAllArraysToFindDataByName(DataObject.DataName, FoundDataType, FoundArray))
				{
					FJsonObjectConverter::UStructToJsonObjectString(*CustomData, JSONPayload, 0, 0);
					SetCurrentJSONString(JSONPayload, CustomData);
					return true;
				}
				break;
			}
		case EReactDocs_Type::PROPERTYCATEGORY:
			{
				const FReactDocsPropertyCategory* Data = ClassData->FindPropertyCategoryData(&DataObject);
				if (FJsonObjectConverter::UStructToJsonObjectString(*Data, JSONPayload, 0, 0))
					SetCurrentJSONString(JSONPayload, Data);
				return true;
			}
		case EReactDocs_Type::NODECATEGORY:
			{
				const FReactDocsNodeCategory* Data = ClassData->FindNodeCategoryData(&DataObject);
				if (FJsonObjectConverter::UStructToJsonObjectString(*Data, JSONPayload, 0, 0))
				{
					SetCurrentJSONString(JSONPayload, Data);
					return true;
				}
				break;
			}
		case EReactDocs_Type::DATATYPECATEGORY:
			{
				FReactDocsDataTypes DataTypesToShow;
				TArray<FReactDocsCustomDataType>* ArrayToUse = nullptr;
				FString JSONToShow;
				FString DataNameLower = DataObject.DataName.ToString().ToLower();

				if (DataNameLower == "delegates")
					ArrayToUse = &DatatypeData.Delegates;
				else if (DataNameLower == "structs")
					ArrayToUse = &DatatypeData.Structs;
				else if (DataNameLower == "enums")
					ArrayToUse = &DatatypeData.Enums;

				for (const FReactDocsCustomDataType Element : (*ArrayToUse))
				{
					if (FJsonObjectConverter::UStructToJsonObjectString(Element, JSONPayload, 0, 0))
					{
						JSONToShow.Append(JSONPayload + ",\n");
					}
				}

				SetCurrentJSONString(JSONToShow);
				return true;
			}
		default:
			return false;
	}

	// switch (DataObject.DataType)
	// {
	// 	case EReactDocs_Type::CLASS:
	// 		if (ClassDataMap.Contains(DataObject.DataName))
	// 		{
	// 			FString JSONPayload;
	// 			FJsonObjectConverter::UStructToJsonObjectString(ClassDataMap[DataObject.DataName], JSONPayload, 0, 0);
	// 			SetCurrentJSONString(JSONPayload);
	// 		}
	// 		break;
	// 	case EReactDocs_Type::PROPERTY:
	// 		if (PropertyDataMap.Contains(DataObject.DataName))
	// 		{
	// 			FString JSONPayload;
	// 			FJsonObjectConverter::UStructToJsonObjectString(PropertyDataMap[DataObject.DataName], JSONPayload, 0, 0);
	// 			SetCurrentJSONString(JSONPayload);
	// 		}
	// 		break;
	// 	case EReactDocs_Type::NODE:
	// 		if (NodeDataMap.Contains(DataObject.DataName))
	// 		{
	// 			FString JSONPayload;
	// 			FJsonObjectConverter::UStructToJsonObjectString(NodeDataMap[DataObject.DataName], JSONPayload, 0, 0);
	// 			SetCurrentJSONString(JSONPayload);
	// 		}
	// 		break;
	// 	case EReactDocs_Type::DATATYPE:
	// 		{
	// 			EReactDocs_CustomDataType FoundDataType;
	// 			TArray<FReactDocsCustomDataType> FoundArray;
	// 			if (const FReactDocsCustomDataType* CustomData = DatatypeData.IterateAllArraysToFindDataByName(DataObject.DataName, FoundDataType, FoundArray))
	// 			{
	// 				FString JSONPayload;
	// 				if (FJsonObjectConverter::UStructToJsonObjectString(*CustomData, JSONPayload, 0, 0))
	// 				{
	// 					SetCurrentJSONString(JSONPayload);
	// 				}
	// 				else
	// 				{
	// 					// Handle JSON conversion error
	// 				}
	// 			}
	// 			else
	// 			{
	// 				// Handle custom data not found
	// 			}
	// 		}
	// 		break;
	// 	default: ;
	// }
	return
		false;
}

bool UReactUnrealDocsDA::ShowDatas(const TArray<UReactDocsDataObjectNative*> DataObjects)
{
	FString JSONPayload;
	FString JSONToShow;

	TArray<UReactDocsDataObjectNative*> ChildDataObjects;
	for (const UReactDocsDataObjectNative* DataObject : DataObjects)
	{
		if (DataObject->DataType == EReactDocs_Type::NODECATEGORY || DataObject->DataType == EReactDocs_Type::PROPERTYCATEGORY)
		{
			ChildDataObjects.Append(DataObject->Childs);
		}
	}
	FReactDocsClass* ClassData = nullptr;

	for (const UReactDocsDataObjectNative* DataObject : DataObjects)
	{
		const UReactDocsDataObjectNative* ClassObject = DataObject->GetClassDataObject();
		if (DataObject->DataType != EReactDocs_Type::DATATYPE)
		{
			ClassData = ClassDataMap.Find(ClassObject->DataName);
			if (ClassData == nullptr) return false;
		}

		switch (DataObject->DataType)
		{
			case EReactDocs_Type::CLASS:
				{
					if (FJsonObjectConverter::UStructToJsonObjectString(*ClassData, JSONPayload, 0, 0))
					{
						JSONToShow.Append(JSONPayload + ",\n");
					}
					break;
				}
			case EReactDocs_Type::PROPERTY:
				{
					if (ChildDataObjects.Contains(DataObject)) continue;
					if (FJsonObjectConverter::UStructToJsonObjectString(*ClassData->FindPropertyData(DataObject), JSONPayload, 0, 0))
					{
						JSONToShow.Append(JSONPayload + ",\n");
					}
					break;
				}
			case EReactDocs_Type::NODE:
				{
					if (ChildDataObjects.Contains(DataObject)) continue;
					if (FJsonObjectConverter::UStructToJsonObjectString(*ClassData->FindNodeData(DataObject), JSONPayload, 0, 0))
					{
						JSONToShow.Append(JSONPayload + ",\n");
					}
					break;
				}
			case EReactDocs_Type::DATATYPE:
				{
					EReactDocs_CustomDataType FoundDataType;
					TArray<FReactDocsCustomDataType> FoundArray;
					if (const FReactDocsCustomDataType* CustomData = DatatypeData.IterateAllArraysToFindDataByName(DataObject->DataName, FoundDataType, FoundArray))
					{
						if (FJsonObjectConverter::UStructToJsonObjectString(*CustomData, JSONPayload, 0, 0))
						{
							JSONToShow.Append(JSONPayload + ",\n");
						}
					}
					break;
				}
			case EReactDocs_Type::PROPERTYCATEGORY:
				{
					if (FJsonObjectConverter::UStructToJsonObjectString(*ClassData->FindPropertyCategoryData(DataObject), JSONPayload, 0, 0))
					{
						JSONToShow.Append(JSONPayload + ",\n");
					}
					break;
				}
			case EReactDocs_Type::NODECATEGORY:
				{
					if (FJsonObjectConverter::UStructToJsonObjectString(*ClassData->FindNodeCategoryData(DataObject), JSONPayload, 0, 0))
					{
						JSONToShow.Append(JSONPayload + ",\n");
					}
					break;
				}
			default:
				return false;
		}
	}

	SetCurrentJSONString(JSONToShow, ClassData);
	return true;
}

void UReactUnrealDocsDA::DeleteData(const UReactDocsDataObjectNative& DataObject)
{
	const UReactDocsDataObjectNative* ClassObject = DataObject.GetClassDataObject();
	FReactDocsClass* ClassData = ClassDataMap.Find(ClassObject->DataName);
	if (ClassData == nullptr) return;

	switch (DataObject.DataType)
	{
		case EReactDocs_Type::CLASS:
			ClassDataMap.Remove(ClassObject->DataName);
			break;
		case EReactDocs_Type::PROPERTY:
			{
				FReactDocsPropertyCategory* CategoryDataPtr = const_cast<FReactDocsPropertyCategory*>(ClassData->FindPropertyCategoryData(Cast<UReactDocsDataObjectNative>(DataObject.DataObject)));
				FReactDocsPropertyData* DataPtr = const_cast<FReactDocsPropertyData*>(ClassData->FindPropertyData(&DataObject));

				if (DataPtr && CategoryDataPtr)
				{
					CategoryDataPtr->CategoryProperties.Remove(*DataPtr);
				}
				break;
			}
		case EReactDocs_Type::NODE:
			{
				const FReactDocsNodeCategory* CategoryDataPtr = ClassData->FindNodeCategoryData(Cast<UReactDocsDataObjectNative>(DataObject.DataObject));
				const FReactDocsNodeData* DataPtr = ClassData->FindNodeData(&DataObject);

				if (CategoryDataPtr && DataPtr)
				{
					const_cast<FReactDocsNodeCategory*>(CategoryDataPtr)->CategoryNodes.Remove(*DataPtr);
				}
				break;
			}
		case EReactDocs_Type::DATATYPE:
			{
				EReactDocs_CustomDataType FoundDataType;
				TArray<FReactDocsCustomDataType>* FoundArray = nullptr;
				if (const FReactDocsCustomDataType* CustomData = DatatypeData.IterateAllArraysToFindDataByName(DataObject.DataName, FoundDataType, *FoundArray))
				{
					FoundArray->Remove(*CustomData);
				}
			}
			break;
		case EReactDocs_Type::PROPERTYCATEGORY:
			break;
		case EReactDocs_Type::NODECATEGORY:
			break;
		default: ;
	}
}

void UReactUnrealDocsDA::DeleteAll()
{
	ClassDataMap.Empty();
	PropertyDataMap.Empty();
	NodeDataMap.Empty();
	DatatypeData.Delegates.Reset();
	DatatypeData.Enums.Reset();
	DatatypeData.Structs.Reset();
	DatatypeData.Empty();
	SetCurrentJSONString("");
}


bool UReactUnrealDocsDA::AddNewDataToClassCategory(FName Category, FName PropertyName, EReactDocs_Type Type)
{
	return false;
	// FReactDocsPropertyAndMetas PropertyAndMetas;
	// PropertyAndMetas.Name = PropertyName.ToString();
	// switch (Type)
	// {
	// 	case EReactDocs_Type::CLASS:
	// 		break;
	// 	case EReactDocs_Type::PROPERTY:
	// 		{
	// 			for (auto& KVP : ClassDataMap)
	// 			{
	// 				for (auto& MapCategory : KVP.Value.ClassPropertyCategories)
	// 				{
	// 					if (MapCategory.Category == Category.ToString())
	// 					{
	// 						FString PropertyStr = PropertyName.ToString();
	//
	// 						for (auto& Element : MapCategory.CategoryPropertiesAndMetas)
	// 						{
	// 							if (Element.Name == PropertyStr)
	// 							{
	// 								return false;
	// 							}
	// 						}
	// 						// if (MapCategory.CategoryPropertiesAndMetas.Contains(PropertyStr)) return false;
	//
	// 						MapCategory.CategoryPropertiesAndMetas.Add(PropertyAndMetas);
	// 						return true;
	// 					}
	// 				}
	// 			}
	// 			break;
	// 		}
	// 	case EReactDocs_Type::NODE:
	// 		{
	// 			for (auto& KVP : ClassDataMap)
	// 			{
	// 				for (auto& MapCategory : KVP.Value.ClassNodeCategories)
	// 				{
	// 					if (MapCategory.Category == Category.ToString())
	// 					{
	// 						if (MapCategory.CategoryNodes.Contains(PropertyName.ToString())) return false;
	//
	// 						MapCategory.CategoryNodes.Add(PropertyName.ToString());
	// 						return true;
	// 					}
	// 				}
	// 			}
	// 			break;
	// 		}
	// 	case EReactDocs_Type::DATATYPE:
	// 		break;
	// 	default: ;
	// }
	// return false;
}


template <typename T>
FORCEINLINE void AppendJsonData(T& Map, FString& JsonData)
{
	for (auto MapIt = Map.CreateConstIterator(); MapIt; ++MapIt)
	{
		FString Json;
		FJsonObjectConverter::UStructToJsonObjectString(MapIt.Value(), Json, 0, 0);

		TArray<FString> JsonAsLines;
		Json.ParseIntoArrayLines(JsonAsLines);
		for (auto Line : JsonAsLines)
		{
			if (Line == "}")
			{
				JsonData.Append(FString::Format(TEXT("{0},\n"), {Line}));
			}
			else
			{
				JsonData.Append(FString::Format(TEXT("{0}\n"), {Line}));
			}
		}
	}
}

void UReactUnrealDocsDA::GenerateClassesJson()
{
	ClassesJson.Empty();
	ClassesJson.Append(FString("const Classes = [\n"));

	AppendJsonData(ClassDataMap, ClassesJson);
	// for (auto MapIt = ClassDataMap.CreateConstIterator(); MapIt; ++MapIt)
	// {
	// 	FString Json;
	// 	FJsonObjectConverter::UStructToJsonObjectString(MapIt.Value(), Json, 0, 0);
	//
	// 	TArray<FString> JsonAsLines;
	// 	Json.ParseIntoArrayLines(JsonAsLines);
	// 	for (auto Line : JsonAsLines)
	// 	{
	// 		ClassesJson.Append(FString::Format(TEXT("					\"{0}\",\n"), {Line}));
	// 	}
	// }
	ClassesJson.Append(FString("] \n"
		"export default { \n"
		"	Classes, \n"
		"	}\n"));
}


void UReactUnrealDocsDA::GeneratePropertiesJson()
{
	PropertiesJson.Empty();
	PropertiesJson.Append(FString("const Properties = [\n"));

	AppendJsonData(PropertyDataMap, PropertiesJson);
	PropertiesJson.Append(FString("] \n"
		"export default { \n"
		"	Properties, \n"
		"	}\n"));
}

void UReactUnrealDocsDA::GenerateNodesJson()
{
	NodesJson.Empty();
	NodesJson.Append(FString("const Nodes = [\n"));

	AppendJsonData(NodeDataMap, NodesJson);
	NodesJson.Append(FString("] \n"
		"export default { \n"
		"	Nodes, \n"
		"}\n"));
}

void UReactUnrealDocsDA::GenerateDataTypesJson()
{
	DataTypesJson.Empty();
	DataTypesJson = DatatypeData.GetAppendedJSON();

	DataTypesJson.Append(FString("export default { \n"
		"	Delegates,Structs,Enums \n"
		"}\n"));
}

template <typename StructType>
void UReactUnrealDocsDA::SetCurrentJSONString(const FString& NewString, const StructType* InStruct)
{
	CurrentJSONString = NewString;
	OnCurrentStringChanged.ExecuteIfBound();
}

const FReactDocsPropertyData& UReactUnrealDocsDA::FindPropertyByData(const UReactDocsDataObjectNative* InDataObject, bool& ValidData)
{
	ValidData = false;
	const UReactDocsDataObjectNative* ClassObject = InDataObject->GetClassDataObject();
	FReactDocsClass* ClassData = ClassDataMap.Find(ClassObject->DataName);
	const auto Data = ClassData->FindPropertyData(InDataObject);
	if (Data != nullptr)
	{
		ValidData = true;
	}
	return *Data;
}

const FReactDocsNodeData& UReactUnrealDocsDA::FindNodeByData(const UReactDocsDataObjectNative* InDataObject, bool& ValidData)
{
	const UReactDocsDataObjectNative* ClassObject = InDataObject->GetClassDataObject();
	FReactDocsClass* ClassData = ClassDataMap.Find(ClassObject->DataName);

	const auto Data = ClassData->FindNodeData(InDataObject);
	if (Data != nullptr)
	{
		ValidData = true;
	}
	return *Data;
}

EReactDocs_ObjectType UReactUnrealDocsDA::GetTypeOfObject(const UReactDocsDataObjectNative* InDataObject)
{
	EReactDocs_ObjectType ReturnType = EReactDocs_ObjectType::NONE;
	const UReactDocsDataObjectNative* ClassObject = InDataObject->GetClassDataObject();
	if (ClassObject == nullptr) return EReactDocs_ObjectType::NONE;

	FReactDocsClass* ClassData = ClassDataMap.Find(ClassObject->DataName);

	switch (InDataObject->DataType)
	{
		case EReactDocs_Type::CLASS:
			{
				ReturnType = EReactDocs_ObjectType::NONE;
				break;
			}
		case EReactDocs_Type::PROPERTY:
			{
				const FReactDocsPropertyData* Data = ClassData->FindPropertyData(InDataObject);
				ReturnType = Data->GetMyObjectType();
				break;
			}
		case EReactDocs_Type::NODE:
			{
				const FReactDocsNodeData* Data = ClassData->FindNodeData(InDataObject);
				ReturnType = Data->GetMyObjectType();
				break;
			}
		case EReactDocs_Type::DATATYPE:
			{
				EReactDocs_CustomDataType FoundDataType;
				TArray<FReactDocsCustomDataType> FoundArray;
				if (const FReactDocsCustomDataType* CustomData = DatatypeData.IterateAllArraysToFindDataByName(InDataObject->DataName, FoundDataType, FoundArray))
				{
				}
				ReturnType = EReactDocs_ObjectType::NONE;
				break;
			}
		case EReactDocs_Type::PROPERTYCATEGORY:
			{
				const FReactDocsPropertyCategory* Data = ClassData->FindPropertyCategoryData(InDataObject);
				ReturnType = EReactDocs_ObjectType::NONE;
				break;
			}
		case EReactDocs_Type::NODECATEGORY:
			{
				const FReactDocsNodeCategory* Data = ClassData->FindNodeCategoryData(InDataObject);
				ReturnType = EReactDocs_ObjectType::NONE;
				break;
			}
		default:
			ReturnType = EReactDocs_ObjectType::NONE;
	}
	return ReturnType;
}

void UReactUnrealDocsDA::SetCurrentJSONString(const FString& NewString)
{
	CurrentJSONString = NewString;
	OnCurrentStringChanged.ExecuteIfBound();
}
