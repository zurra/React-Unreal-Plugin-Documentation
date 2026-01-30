// Copyright Clusterfact Games. All Rights Reserved.

#include "Widget/EUW_ReactUnrealDocsGenerator.h"

#include "DiffUtils.h"
#include "FindSourceFileInExplorer.h"
#include "ReactUnrealDocsGeneratorCommon.h"
#include "JsonObjectConverter.h"
#include "K2Node_CallFunction.h"
#include "ReactUnrealDocsDataGenerator.h"
#include "Engine/ComponentDelegateBinding.h"
#include "Engine/DynamicBlueprintBinding.h"
#include "Engine/InputActionDelegateBinding.h"
#include "Engine/UserDefinedStruct.h"
#include "Kismet/KismetStringLibrary.h"
#include "Misc/TextFilterExpressionEvaluator.h"
#include "StructUtils/UserDefinedStruct.h"
#include "Subsystems/EditorAssetSubsystem.h"

UEUW_ReactUnrealDocsGenerator::UEUW_ReactUnrealDocsGenerator()
{
}

void UEUW_ReactUnrealDocsGenerator::NativeConstruct()
{
	if (ReactUnrealDocsDataAsset)
	{
		ReactUnrealDocsDataAsset->OnCurrentStringChanged.BindWeakLambda(this, [&]
		{
			NativeCurrentStringChanged();
		});
	}
	Super::NativeConstruct();
}

FString UEUW_ReactUnrealDocsGenerator::CheckClassPropsAndFunctions(UObject* InClass, FString DebugFieldToFind)
{
	TFunction<void(UFunction*, bool, bool)> ProcessFunction;
	TFunction<void(FProperty*, FReactDocsCustomDataType*)> ProcessProperty;


	if (InClass == NULL) return {};
	const UClass* ClassToCheck = NULL;
	FReactDocsClass ReactDocsClass = FReactDocsClass();
	TMap<FName, FReactDocsPropertyCategory> CategoryPropDataMap;
	TArray<FReactDocsPropertyData> PropertyDatas;

	TMap<FName, TArray<FReactDocsNodeData>> CategoryFunctionDataMap;

	FReactDocsDataTypes ReactDocsDataTypes;

	FString Properties;
	FString FunctionData;

	TArray<FReactDocsNodeData> NodeDatas;

	auto IsContainer([&](const FProperty& Property)
	{
		return Property.IsA<FSetProperty>() || Property.IsA<FArrayProperty>() || Property.IsA<FMapProperty>();
	});


	auto GetPropertyTypeData([&](const FProperty& Property)
	{
		const FStructProperty* StructProperty = CastField<FStructProperty>(&Property);

		if (const FEnumProperty* EnumProperty = CastField<FEnumProperty>(&Property))
		{
			const UEnum* Enum = EnumProperty->GetEnum();
			Enum->GetPathName();
			return "enum:" + Enum->GetName();
		}


		if ((StructProperty != nullptr) && (IsValid(StructProperty->Struct)))
		{
			UUserDefinedStruct* PropertyStruct = Cast<UUserDefinedStruct>(StructProperty->Struct);
			FString cppname = StructProperty->GetNameCPP();
			FString ExtendedTypeText;
			FString Typename = Property.GetCPPType(&ExtendedTypeText);

			bool isnative = StructProperty->Struct->IsNative();

			if (isnative)
			{
				return "struct:" + Typename;
			}

			if ((PropertyStruct != nullptr))
			{
				return FString("");
			}
		}

		if (const FByteProperty* ByteProperty = CastField<FByteProperty>(&Property))
		{
			// if (ByteProperty->Enum != nullptr)
			// {
			// 	if (IsValid(ByteProperty->Enum))
			// 	{
			// 		UEnum* PropertyEnum = ByteProperty->Enum;
			// 		FString Name = PropertyEnum->GetName();
			// 		FString UserDefinedEnumPath = FString::Printf(TEXT("/Script/Engine.UserDefinedEnum'/Game/%s.%s'"), *Name, *Name);
			//
			// 		// /Script/Engine.UserDefinedEnum'/Game/TestEnum.TestEnum'
			// 		UObject* Object = LoadObject<UObject>(nullptr, *UserDefinedEnumPath, nullptr, LOAD_NoWarn);
			// 		if (Object == nullptr)
			// 		{
			// 			Object = LoadObject<UObject>(nullptr, *(UserDefinedEnumPath + TEXT("_C")), nullptr, LOAD_NoWarn);
			// 		}
			//
			// 		if (IsValid(Object))
			// 		{
			// 			return FString("");
			// 		}
			// 	}
			// }
		}

		if (const FObjectProperty* ObjectProperty = CastField<FObjectProperty>(&Property))
		{
			const UClass* PropertyClass = ObjectProperty->PropertyClass;
			const UObject* PropertyClassCDO = PropertyClass->GetDefaultObject();
			if (PropertyClassCDO->GetClass()->HasAnyClassFlags(CLASS_Native))
			{
				UE_LOG(LogTemp, Warning, TEXT(":: Property %s is native ::"), *Property.GetName())
				FString ExtendedTypeText;
				FString Typename = Property.GetCPPType(&ExtendedTypeText);

				return "class:" + Typename;
			}
			else
			{
				UE_LOG(LogTemp, Warning, TEXT(":: Property %s is bp ::"), *Property.GetName())
				return FString("");
			}
		}

		if (const FIntProperty* IntProperty = CastField<FIntProperty>(&Property))
		{
			return FString("int:int");
		}

		if (const FNameProperty* NameProperty = CastField<FNameProperty>(&Property))
		{
			return FString("FName:FName");
		}

		if (Property.IsA<FSetProperty>() || Property.IsA<FArrayProperty>() || Property.IsA<FMapProperty>())
		{
			return FString("container");
		}

		if (Property.IsA(FMulticastDelegateProperty::StaticClass()))
		{
			return FString("delegate");
		}

		// FString ff = Property.GetCPPTypeForwardDeclaration();
		FString ExtendedCppType;
		FString CppType = Property.GetCPPType(&ExtendedCppType);
		if (!ExtendedCppType.IsEmpty())
		{
			return CppType + ":" + ExtendedCppType.LeftChop(1).RightChop(1);
		}
		return FString(CppType + ":" + CppType);
	});

	auto GetContainerPropertyData([&](const FProperty& Property)-> FString
	{
		if (const FArrayProperty* ArrayProperty = CastField<FArrayProperty>(&Property))
		{
			const FProperty* InnerProperty = ArrayProperty->Inner;
			return GetPropertyTypeData(*InnerProperty);
		}
		else if (const FSetProperty* SetProperty = CastField<FSetProperty>(&Property))
		{
			const FProperty* KeyProperty = SetProperty->ElementProp;
			return GetPropertyTypeData(*KeyProperty);
		}
		else if (const FMapProperty* MapProperty = CastField<FMapProperty>(&Property))
		{
			const FProperty* KeyProperty = MapProperty->KeyProp;
			const FProperty* ValueProperty = MapProperty->ValueProp;

			const FString KeyForwardDeclaration = GetPropertyTypeData(*KeyProperty);
			const FString ValueForwardDeclaration = GetPropertyTypeData(*ValueProperty);

			return KeyForwardDeclaration + "::" + ValueForwardDeclaration;
		}
		else
		{
			return GetPropertyTypeData(Property);
		}
	});

	ProcessFunction = [&](UFunction* Function, bool SkipClassCheck = false, bool IsDelegate = false)
	{
		if (DebugFieldToFind != "")
		{
			if (Function->GetName().Contains(DebugFieldToFind))
			{
				UE_LOG(LogTemp, Log, TEXT( "Stop" ));
			}
		}

		if (ReactUnrealDocsDataAsset->FunctionsToIgnoreIfContainsString.Contains(Function->GetName()))
			return;

		bool bIsLatent = false;
		bool IsBoundDelegate = Function->GetName().Contains("BndEvt__");

		for (const auto& [Property, Value] : TPropertyValueRange<FProperty>(UFunction::StaticClass(), Function))
		{
			FString RangeName = Property->GetName();
			UE_LOG(LogTemp, Log, TEXT( "ValueRange %s"), *RangeName);
		}

		if (!SkipClassCheck)
		{
			UClass* OwnerClass = Function->GetOwnerClass();


			auto InheritanceSuper = Function->GetInheritanceSuper();
			auto ownerStruct = Function->GetOwnerStruct();
			auto superFunction = Function->GetSuperFunction();
			auto superStruct = Function->GetSuperStruct();
			auto SuperClass = ClassToCheck->GetSuperClass();

			if (SuperClass->GetName().Contains("async"))
				bIsLatent = true;

			auto OwnerProperty = Function->GetOwnerStruct();
			auto field = Function->GetSuperStruct();
			UClass* fieldowner = field->GetOwnerClass();

			if (ReactUnrealDocsDataAsset->ClassesToIgnoreWhenGeneratingData.Contains(OwnerClass))
				return;

			if (ReactUnrealDocsDataAsset->ClassesToIgnoreWhenGeneratingData.Contains(fieldowner))
				return;
			// UClass* CurrentSelfClass = (Function != NULL) ? Function->GetOwnerClass() : NULL;
			// UClass const* TrueSelfClass = CurrentSelfClass;
			// if (CurrentSelfClass && CurrentSelfClass->ClassGeneratedBy)
			// {
			// 	TrueSelfClass = CurrentSelfClass->GetAuthoritativeClass();
			// }
			// if (CurrentSelfClass != ClassToCheck) return;
			//

			// if (OwnerClass == UActorComponent::StaticClass())
			// {
			// 	return;
			// }
			// else
			// {
			// 	if (OwnerClass != ClassToCheck && OwnerClass != SuperClass) return;
			// }
		}


		auto CheckStruct([&](const FStructProperty* StructProperty)
		{
			if (!StructProperty->IsValidLowLevel())
			{
				return;
			}

			auto StructItSelf = StructProperty->Struct;
			auto OuterMost = StructItSelf->GetOutermost();
			if (OuterMost->GetName().Contains("CoreUObject") || OuterMost->GetName().Contains("/Script/Engine")) return;

			FReactDocsCustomDataType CustomDataType;
			CustomDataType.Name = "F"+StructItSelf.GetName();

			for (FProperty* LinkProperty = StructItSelf->PropertyLink; LinkProperty != nullptr; LinkProperty = LinkProperty->PropertyLinkNext)
			{
				ProcessProperty(LinkProperty, &CustomDataType);
			}

			TArray<FReactDocsPropertyData> PropertyDatas;
			if (StructProperty->Struct)
			{
				PropertyDatas = GeneratePropertyDatasFromObject(StructProperty->Struct.Get());
			}
			// if (CustomDataType.Comments.IsEmpty())
			// {
			// 	CustomDataType.Comments = data.Comments;
			// }
			
			if (CustomDataType.Description.IsEmpty())
			{
				auto Tooltip = StructProperty->Struct.Get()->GetToolTipText();

				TArray<FString> TooltipAsLines;
				Tooltip.ToString().ParseIntoArrayLines(TooltipAsLines);
				CustomDataType.Description = TooltipAsLines[0];
				if (TooltipAsLines.Num() > 1)
				{
					for (int t = 1; t < TooltipAsLines.Num(); ++t)
					{
						CustomDataType.Comments.Add(TooltipAsLines[t]);
					}
				}
			}
			ReactUnrealDocsDataAsset->AddNewCustomData(CustomDataType, EReactDocs_CustomDataType::STRUCT);
		});


		for (FField* Field = Function->ChildProperties; Field; Field = Field->Next)
		{
			FProperty* Property = CastField<FProperty>(Field);
			if (Property)
			{
				const FStructProperty* StructProperty = CastField<FStructProperty>(Property);
				const FSetProperty* SetProperty = CastField<FSetProperty>(Property);

				if (StructProperty)
				{
					CheckStruct(StructProperty);
					// auto StructItSelf = StructProperty->Struct;
					// auto OuterMost = StructItSelf->GetOutermost();
					// if (OuterMost->GetName().Contains("CoreUObject") || OuterMost->GetName().Contains("/Script/Engine")) continue;
					//
					// FReactDocsCustomDataType CustomDataType;
					// CustomDataType.Name = StructItSelf.GetName();
					//
					// for (FProperty* LinkProperty = StructItSelf->PropertyLink; LinkProperty != nullptr; LinkProperty = LinkProperty->PropertyLinkNext)
					// {
					// 	ProcessProperty(LinkProperty, &CustomDataType);
					// }
					// ReactUnrealDocsDataAsset->AddNewCustomData(CustomDataType, EReactDocs_CustomDataType::STRUCT);
					// // if (const FArrayProperty* ArrayProperty = CastField<FArrayProperty>(StructItSelf->ChildProperties))
					// // {
					// // 	
					// //
					// // 	// Initialize any additional properties on this struct
					// // 	for (FProperty* Inner; Property; Property = ArrayProperty->PropertyLinkNext)
					// // 	{
					// // 		
					// // 	}
					// // 	FScriptArrayHelper ArrayHelper(ArrayProperty, StructItSelf->ChildProperties);
					// // 	const int32 NumElements = ArrayHelper.Num();
					// // 	for (int32 Index = 0; Index < NumElements; Index++)
					// // 	{
					// // 		const void* const ArrayData = ArrayHelper.GetRawPtr(Index);
					// // 	}
					// // }
				}
				if (SetProperty)
				{
					FProperty* ElementPropProperty = CastField<FProperty>(SetProperty->ElementProp);
					const FStructProperty* ElementPropAsStructProperty = CastField<FStructProperty>(ElementPropProperty);
					FString propData;
					if (ElementPropAsStructProperty->IsValidLowLevel())
						CheckStruct(ElementPropAsStructProperty);
					else
					{
						propData = GetPropertyTypeData(*ElementPropProperty);
					}

					UE_LOG(LogTemp, Warning, TEXT( "%s is a return param!"), *Property->GetName());
				}
			}
		}

		FReactDocsCustomDataType DelegateDataType;
		FReactDocsNodeData NodeData = FReactDocsNodeData();

		FString FunctionName = Function->GetName();
		FString FuncDesc = Function->GetToolTipText().ToString();

		DelegateDataType.Name = FunctionName.Replace(TEXT("__DelegateSignature"),TEXT(""));
		FText BaseCategory = FText();
		FName Category = FName(UK2Node_CallFunction::GetDefaultCategoryForFunction(Function, BaseCategory).ToString());

		if (!CategoryFunctionDataMap.Contains(Category))
			CategoryFunctionDataMap.Add(Category, {});

		CategoryFunctionDataMap[Category].Add(NodeData);


		if (IsBoundDelegate)
		{
			FString Left, Right;
			FString ClassName, ComponentName;
			ClassName = InClass->GetFName().ToString().Replace(TEXT(" "),TEXT("_"));
			FunctionName.Split(TEXT("_K2Node"), &Left, &Right);
			Right.RemoveFromEnd(HEADER_GENERATED_DELEGATE_SIGNATURE_SUFFIX);

			if (const UBlueprintCore* BlueprintAsset = Cast<const UBlueprintCore>(InClass))
			{
				auto x = BlueprintAsset->GeneratedClass;
				if (const UBlueprintGeneratedClass* BPGC = Cast<UBlueprintGeneratedClass>(x))
				{
					for (UDynamicBlueprintBinding* DynamicBindingObject : BPGC->DynamicBindingObjects)
					{
						if (ensure(DynamicBindingObject))
						{
							if (UComponentDelegateBinding* ComponentDelegateBinding = Cast<UComponentDelegateBinding>(DynamicBindingObject))
							{
								for (auto& Binding : ComponentDelegateBinding->ComponentDelegateBindings)
								{
									if (FunctionName == Binding.FunctionNameToBind)
									{
										NodeData.Name = FString::Format(TEXT("{0} ({1})"), {Binding.DelegatePropertyName.ToString(), Binding.ComponentPropertyName.ToString()});
										NodeData.Comments.Add(FString::Format(TEXT("Bound Delegate {0} from Object {1}"), {Binding.DelegatePropertyName.ToString(), Binding.ComponentPropertyName.ToString()}));
									}
								}
							}

							if (UInputActionDelegateBinding* InputActionDelegateBinding = Cast<UInputActionDelegateBinding>(DynamicBindingObject))
							{
								for (auto& Binding : InputActionDelegateBinding->InputActionDelegateBindings)
								{
									if (FunctionName == Binding.FunctionNameToBind)
									{
										// FString Stripped = FunctionName.Replace(TEXT("InpActEvt_"),TEXT(""));
										// Stripped.Split(TEXT("_K2Node"),&Left,nullptr);

										NodeData.Name = FString::Format(TEXT("{0})"), {Binding.InputActionName.ToString()});
										NodeData.Comments.Add(FString::Format(TEXT("Bound Action {0} to Event {1}"), {Binding.InputActionName.ToString(), Binding.InputActionName.ToString()}));
									}
								}
							}
						}
					}
				}
			}
		}
		else
		{
			NodeData.Name = Function->GetName();
			GetDefaultTooltipForFunction(Function).ParseIntoArrayLines(NodeData.Comments);
			DelegateDataType.Description = NodeData.Comments[0];
		}


		// UE_LOG(LogTemp, Log, TEXT("\nFunction: %s :: %s"), *Function->GetName(), *FuncDesc);

		FunctionData.Append(FString::Format(TEXT("{0} {1} \n"), {*FunctionName, *FuncDesc}));


		FString Params;
		for (TFieldIterator<FProperty> It(Function); It; ++It)
		{
			FProperty* Property = *It;

			if (Property->GetName().Contains(DebugFieldToFind))
			{
				UE_LOG(LogTemp, Log, TEXT( "Stop" ));
			}

			FString PropType = Property->GetCPPType();
			FString PropName = Property->GetName();
			TArray<FString> PropDesc;
			Property->GetToolTipText().ToString().ParseIntoArrayLines(PropDesc);

			bool IsReturnParam = !Property->HasAnyPropertyFlags(CPF_ReferenceParm) && Property->HasAnyPropertyFlags(CPF_ReturnParm | CPF_OutParm);


			Params.Append(FString::Format(TEXT("{0} {1} \n"), {*Property->GetCPPType(), *Property->GetName()}));

			if (IsReturnParam)
			{
				Params.Append(FString::Format(TEXT("{0} is a return param! \n"), {*Property->GetName()}));
				UE_LOG(LogTemp, Warning, TEXT( "%s is a return param!"), *Property->GetName());
			}

			const TMap<FName, FString>* MetaDataMap = Property->GetMetaDataMap();

			if (MetaDataMap)
			{
				if (MetaDataMap->Num() > 0)
				{
					FString AllMetaKVPs;
					for (auto KVP = MetaDataMap->CreateConstIterator(); KVP; ++KVP)
					{
						FString KVPStr = KVP.Key().ToString() + " : " + KVP.Value() + "\n";
						AllMetaKVPs.Append(KVPStr);
					}
					Params.Append("Metas \n");
					Params.Append(AllMetaKVPs);
				}
			}

			FReactDocsPropertyData PropertyData;

			PropertyData.Name = PropName;
			GeneratePropertyTooltipFromFunction(PropertyData, Function, IsReturnParam);


			UE_LOG(LogTemp, Log, TEXT( "%s"), *Params);

			///////


			FString PropertyExtraData = GetPropertyTypeData(*Property);
			FString Left;
			FString Right;
			FString FirstDataType;
			FString FirstObject;

			const bool bIsDelegate = Property->IsA(FMulticastDelegateProperty::StaticClass());
			if (bIsDelegate)
			{
				UE_LOG(LogTemp, Log, TEXT( "delegate" ));
				PropertyData.DataType = "delegate";
				PropertyData.Object = PropType;
			}

			if (IsContainer(*Property))
			{
				PropertyData.ContainerType = PropType;
				if (PropertyExtraData == "container")
				{
					PropertyExtraData = GetContainerPropertyData(*Property);
				}
				if (PropertyExtraData.Contains("::"))
				{
					FString SecondDataType;
					FString SecondObject;
					PropertyExtraData.Split("::", &Left, &Right, ESearchCase::IgnoreCase, ESearchDir::FromStart);
					Left.Split(":", &FirstDataType, &FirstObject, ESearchCase::IgnoreCase, ESearchDir::FromStart);
					Right.Split(":", &SecondDataType, &SecondObject, ESearchCase::IgnoreCase, ESearchDir::FromStart);

					if (PropertyData.DataType == "")
						PropertyData.DataType = FirstDataType + ":" + SecondDataType;

					if (PropertyData.Object == "")
						PropertyData.Object = FirstObject + ":" + SecondObject;
				}
				else
				{
					PropertyExtraData.Split(":", &FirstDataType, &FirstObject, ESearchCase::IgnoreCase, ESearchDir::FromStart);

					if (PropertyData.DataType == "")
						PropertyData.DataType = FirstDataType;
					if (PropertyData.Object == "")
						PropertyData.Object = FirstObject;
				}
			}
			else
			{
				PropertyData.ContainerType = "single";
				FirstDataType = PropType;
				if (PropertyExtraData != "container")
				{
					PropertyExtraData.Split(":", &FirstDataType, &FirstObject, ESearchCase::IgnoreCase, ESearchDir::FromStart);
				}

				if (PropertyData.DataType == "")
					PropertyData.DataType = FirstDataType;
				if (PropertyData.Object == "")
					PropertyData.Object = FirstObject;
			}

			if (IsDelegate)
			{
				DelegateDataType.Data.Add(PropertyData);
			}
			else
			{
				IsReturnParam ? NodeData.Outputs.Add(PropertyData) : NodeData.Inputs.Add(PropertyData);
			}

			///////


			// if (Property->HasMetaData(NAME_BlueprintPrivate))
			// {
			// }
			// static FName NAME_BlueprintProtected = "BlueprintProtected";
			// if (Property->HasMetaData(NAME_BlueprintProtected))
			// {
			// }
		}
		Params.Append("------\n");

		UPackage* Package = Function->GetOutermost();
		check(Package);

		FMetaData MetaData = Package->GetMetaData();
		bIsLatent = (Function->HasMetaData(FBlueprintMetadata::MD_Latent) != false) || bIsLatent;

		auto ParseFunctionFlags([](uint32 Flags, TArray<const TCHAR*>& Results)
		{
			const TCHAR* FunctionFlags[32] =
			{
				TEXT("Final"), // FUNC_Final
				TEXT("0x00000002"),
				TEXT("BlueprintAuthorityOnly"), // FUNC_BlueprintAuthorityOnly
				TEXT("BlueprintCosmetic"), // FUNC_BlueprintCosmetic
				TEXT("0x00000010"),
				TEXT("0x00000020"),
				TEXT("Net"), // FUNC_Net
				TEXT("NetReliable"), // FUNC_NetReliable
				TEXT("NetRequest"), // FUNC_NetRequest
				TEXT("Exec"), // FUNC_Exec
				TEXT("Native"), // FUNC_Native
				TEXT("Event"), // FUNC_Event
				TEXT("NetResponse"), // FUNC_NetResponse
				TEXT("Static"), // FUNC_Static
				TEXT("NetMulticast"), // FUNC_NetMulticast
				TEXT("0x00008000"),
				TEXT("MulticastDelegate"), // FUNC_MulticastDelegate
				TEXT("Public"), // FUNC_Public
				TEXT("Private"), // FUNC_Private
				TEXT("Protected"), // FUNC_Protected
				TEXT("Delegate"), // FUNC_Delegate
				TEXT("NetServer"), // FUNC_NetServer
				TEXT("HasOutParms"), // FUNC_HasOutParms
				TEXT("HasDefaults"), // FUNC_HasDefaults
				TEXT("NetClient"), // FUNC_NetClient
				TEXT("DLLImport"), // FUNC_DLLImport
				TEXT("BlueprintCallable"), // FUNC_BlueprintCallable
				TEXT("BlueprintEvent"), // FUNC_BlueprintEvent
				TEXT("BlueprintPure"), // FUNC_BlueprintPure
				TEXT("0x20000000"),
				TEXT("Const"), // FUNC_Const
				TEXT("0x80000000"),
			};

			for (int32 i = 0; i < 32; ++i)
			{
				const uint32 Mask = 1U << i;
				if ((Flags & Mask) != 0)
				{
					Results.Add(FunctionFlags[i]);
				}
			}
		});
		// Flags
		TArray<const TCHAR*> Flags;
		ParseFunctionFlags(Function->FunctionFlags, Flags);
		for (int32 i = 0; i < Flags.Num(); ++i)
		{
			NodeData.Flags.Add(Flags[i]);
			if (IsDelegate)
			{
				DelegateDataType.Flags.Add(Flags[i]);
			}
		}

		// bool IsBpVisibleFunction = (Function->HasMetaData(FBlueprintMetadata::MD_));
		if (bIsLatent)
		{
			NodeData.FunctionTypes.Add("Latent");
		}

		if (IsDelegate)
		{
			ReactUnrealDocsDataAsset->AddNewCustomData(DelegateDataType, EReactDocs_CustomDataType::DELEGATE);
		}
		else
		{
			NodeDatas.Add(NodeData);
			ReactUnrealDocsDataAsset->AddNewNode(NodeData);
		}

		FReactDocsNodeCategory* FoundReactDocsNodeCategory = ReactDocsClass.ClassNodeCategories.FindByPredicate([Category](FReactDocsNodeCategory& Other)
		{
			return Other.Category == Category;
		});
		if (FoundReactDocsNodeCategory)
		{
			if (FoundReactDocsNodeCategory->Category != "")
			{
				FReactDocsNodeData* FoundNodeData = FoundReactDocsNodeCategory->CategoryNodes.FindByPredicate([FunctionName](FReactDocsNodeData& Other)
				{
					return Other.Name == FunctionName;
				});
				if (!FoundNodeData)
					FoundReactDocsNodeCategory->CategoryNodes.Add(NodeData);
			}
		}
		else if (!IsDelegate)
		{
			FReactDocsNodeCategory ReactCategory = FReactDocsNodeCategory();
			ReactCategory.Category = Category.ToString();
			ReactCategory.CategoryNodes.Add(NodeData);
			ReactDocsClass.AddNodeCategory(ReactCategory);
		}

		FunctionData.Append(Params);
	};

	ProcessProperty = [&](FProperty* Property, FReactDocsCustomDataType* CustomData = nullptr)
	{
		const bool IsCustomDatatype = CustomData != nullptr;
		const bool IsEnumTypeProperty = CastField<FEnumProperty>(Property) != nullptr;

		if (DebugFieldToFind != "")
		{
			if (Property->GetName().Contains(DebugFieldToFind))
			{
				UE_LOG(LogTemp, Log, TEXT( "Stop" ));

				auto OwnerProperty = Property->GetOwnerProperty();
				auto field = Property->GetOwnerUField();
				auto fieldowner = field->GetOwnerClass();

				if (IsContainer(*OwnerProperty))
				{
					UE_LOG(LogTemp, Log, TEXT( "Owner Property %s IS A CONTAINER"), *OwnerProperty->GetName());
				}

				const FStructProperty* StructProperty = CastField<FStructProperty>(Property);
				if (StructProperty)
				{
					auto faojasf = StructProperty->Struct;
				}


				if (const FMapProperty* MapProperty = CastField<FMapProperty>(Property))
				{
					if (MapProperty->KeyProp)
					{
						UE_LOG(LogTemp, Log, TEXT( "MapPropertyKey" ));
					}

					if (MapProperty->ValueProp)
					{
						UE_LOG(LogTemp, Log, TEXT( "MapPropertyValue" ));
					}
				}


				else if (const FSetProperty* SetProperty = CastField<FSetProperty>(Property))
				{
					if (SetProperty->ElementProp)
					{
						UE_LOG(LogTemp, Log, TEXT( "SetProperty" ));
					}
				}
				else if (const FArrayProperty* ArrayProperty = CastField<FArrayProperty>(Property))
				{
					if (ArrayProperty->Inner)
					{
						UE_LOG(LogTemp, Log, TEXT( "ArrayProperty" ));
					}
				}

				// FProperty* LastOwnerProperty = NULL;

				// while (LastOwnerProperty != OwnerProperty)
				// {
				// 	OwnerProperty = OwnerProperty->GetOwnerProperty();
				// 	UE_LOG(LogTemp, Log, TEXT( "OwnerProperty %s"),*OwnerProperty->GetName());
				// 	LastOwnerProperty = OwnerProperty;
				// }
			}
		}

		EPropertyFlags PropertyFlags = Property->GetPropertyFlags();
		EPropertyFlags IgnoreFlagPropertyFlags;
		IgnoreFlagPropertyFlags |= CPF_ZeroConstructor;
		IgnoreFlagPropertyFlags |= CPF_NoDestructor;
		IgnoreFlagPropertyFlags |= CPF_HasGetValueTypeHash;
		IgnoreFlagPropertyFlags |= CPF_NonTransactional;
		IgnoreFlagPropertyFlags |= CPF_DisableEditOnInstance;
		IgnoreFlagPropertyFlags |= CPF_DisableEditOnTemplate;
		// IgnoreFlagPropertyFlags |= CPF_Edit;
		IgnoreFlagPropertyFlags |= CPF_IsPlainOldData;
		IgnoreFlagPropertyFlags |= CPF_InstancedReference;
		IgnoreFlagPropertyFlags |= CPF_ExportObject;
		IgnoreFlagPropertyFlags |= CPF_ContainsInstancedReference;
		IgnoreFlagPropertyFlags |= CPF_UObjectWrapper;
		PropertyFlags &= ~IgnoreFlagPropertyFlags;

		TArray<const TCHAR*> Flags = ParsePropertyFlags(PropertyFlags);
		TArray<const TCHAR*> IgnoreFlags = ParsePropertyFlags(IgnoreFlagPropertyFlags);
		TArray<FString> PropMetas;

		for (int32 Index = 0; Index < Flags.Num(); Index++)
		{
			// if (!IgnoreFlags.Contains(FString(Flags[Index])))
			PropMetas.Add(FString(Flags[Index]));
		}


		// int index = 1;
		// for (int i = 1; i < static_cast<uint8>(EPropertyFlags::CPF_SkipSerialization); i = i << 1)
		// {
		// 	if (i & static_cast<uint8>(PropertyFlags))
		// 	{
		// 		// const EPropertyFlags PropertyFlag = static_cast<EPropertyFlags>(index);
		// 		// static const UEnum* EnumType = FindObject<UEnum>(ANY_PACKAGE, TEXT("EPropertyFlags"));
		//
		// 		// UE_LOG(LogTemp, Warning, TEXT("PropertyFlags: %s"), *EnumType->GetNameStringByIndex(index));
		// 	}
		// 	index++;
		// }

		// const UEnum* PropertyFlagEnums = StaticEnum<EPropertyFlags>();
		//
		// for (int32 i = 0; i < PropertyFlagEnums->NumEnums() - 1; i++)
		// {
		// 	UE_LOG(LogTemp, Warning, TEXT("A: %s"), *PropertyFlagEnums->GetDisplayNameTextByIndex(i).ToString());
		// }

		// if (Property->HasAnyPropertyFlags(CPF_Transient)) return;

		bool bIsContainer = IsContainer(*Property);
		UClass* OwnerClass = Property->GetOwnerClass();
		UField* FieldOwner = Property->GetOwnerUField();
		UClass* FieldOwnerClass = FieldOwner->GetOwnerClass();
		auto SuperClass = ClassToCheck->GetSuperClass();
		// if (OwnerClass == AActor::StaticClass()) return;
		// // if (OwnerClass != SuperClass) continue;

		if (ReactUnrealDocsDataAsset->ClassesToIgnoreWhenGeneratingData.Contains(OwnerClass))
			return;

		if (ReactUnrealDocsDataAsset->ClassesToIgnoreWhenGeneratingData.Contains(FieldOwnerClass))
			return;


		FString PropType = Property->GetCPPType();
		FString PropName = Property->GetName();

		if (PropName.Contains("UberGraph")) return;

		FString PropDesc = Property->GetToolTipText().ToString();
		TArray<FString> PropDescArray;
		TArray<FString> PropDescReturnArray;
		if (PropDesc.Contains("@return"))
		{
			FString Left;
			FString Right;
			if (PropDesc.Split("@return", &Left, &Right, ESearchCase::IgnoreCase, ESearchDir::FromStart))
			{
				Left.ParseIntoArrayLines(PropDescArray);
				Right.ParseIntoArrayLines(PropDescReturnArray);
				PropDescReturnArray[0] = "@return" + PropDescReturnArray[0];

				if (PropDescArray.Num() > 1)
				{
					PropDescArray.Swap(0, 1);
				}
				PropDescArray.Append(PropDescReturnArray);
			}
		}
		else
		{
			FText Tooltip;

			if (const FArrayProperty* ArrayProperty = CastField<FArrayProperty>(Property))
			{
				Tooltip = ArrayProperty->Inner->GetToolTipText();
			}

			PropDesc.ParseIntoArrayLines(PropDescArray);
		}


		FName PropertyCategory = FName("Default");

		Properties.Append(FString::Format(TEXT("{0} : {1} : {2} \n"), {PropType, PropName, PropDesc}));


		// UE_LOG(LogTemp, Log, TEXT( "------------" ));
		// UE_LOG(LogTemp, Log, TEXT( " %s :: %s :: %s;" ), *Property->GetCPPType(), *Property->GetName(), *Property->GetToolTipText().ToString());

		const TMap<FName, FString>* MetaDataMap = Property->GetMetaDataMap();
		if (MetaDataMap)
		{
			PropertyCategory = FName(Property->GetMetaData(FName("Category")));

			if (MetaDataMap->Num() > 0)
			{
				FString AllMetaKVPs;
				for (auto KVP = MetaDataMap->CreateConstIterator(); KVP; ++KVP)
				{
					FString KVPStr = KVP.Key().ToString() + " : " + KVP.Value() + "\n";
					AllMetaKVPs.Append(KVPStr);
				}
				Properties.Append("Metas \n");
				Properties.Append(AllMetaKVPs);
			}
		}
		Properties.Append("------\n");

		FReactDocsCustomDataType EnumType;
		// if (IsEnumTypeProperty && !IsCustomDatatype)
		if (IsEnumTypeProperty)
		{
			const FEnumProperty* EnumProperty = CastField<FEnumProperty>(Property);
			const UEnum* Enum = EnumProperty->GetEnum();
			const FString EnumPath = Enum->GetPathName();
			FString Name;
			FString DisplayName;
			FString ToolTip;
			TArray<FString> TooltipArray;
			EnumType.Name = Enum->GetName();
			// Enum->GetToolTipText().ToString().ParseIntoArrayLines(TooltipArray);
			if (MetaDataMap)
			{
				ToolTip = Property->GetMetaData("ToolTip");
				ToolTip.ParseIntoArrayLines(TooltipArray);

				if(TooltipArray.Num()>0)
				{
					EnumType.Description = TooltipArray[0];
					if (TooltipArray.Num() > 1)
					{
						for (int t = 1; t < TooltipArray.Num(); ++t)
						{
							EnumType.Comments.Add(TooltipArray[t]);
						}
					}
				}
			}

			if (const UEnum* EnumPtr = FindObject<UEnum>(nullptr, *EnumPath, true))
			{
				const bool IsBitFieldEnum = EnumPtr->HasMetaData(TEXT("BitFlags"));
				// UPackage* Package = EnumPtr->GetOutermost();
				// check(Package);
				// 	
				// UMetaData* MetaData = Package->GetMetaData();
				// check(MetaData);

				// int index = 1;
				//
				// for (int i = 1; i < static_cast<uint8>(EPGGadgetSlot::MAX); i = i << 1)
				// {
				// 	if (i & static_cast<uint8>(Slot))
				// 	{
				// 		const EPGGadgetSlot GadgetSlot = static_cast<EPGGadgetSlot>(index);
				// 		static const UEnum* GadgetSlotType = FindObject<UEnum>(ANY_PACKAGE, TEXT("EPGGadgetSlot"));
				// 		auto slotname = GadgetSlotType->GetNameStringByIndex(index);
				// 		DebugLog(-1,LogGadget,"Activate Slot %s EINDEX %d index %d", *slotname, static_cast<uint8>(GadgetSlot), index);
				//
				// 		APG_GadgetBase* GadgetBase = GetGadgetInSlot(Slot);
				// 		if (IsValid(GadgetBase))
				// 			GadgetBase->ActivatePrimary();
				// 		return;
				// 	}
				// 	index++;
				//}

				int CountToUse = EnumPtr->GetMaxEnumValue() - 1;

				if (true)
				{
					//
					UPackage* Package = EnumPtr->GetOutermost();
					check(Package);

					FMetaData MetaData = Package->GetMetaData();

					TArray<FString> Names;


					for (auto& KVP : MetaData.ObjectMetaDataMap)
					{
						if (KVP.Key == EnumType.Name)
						{
							for (auto Kvp2 : KVP.Value)
							{
								if (Kvp2.Key.ToString().Contains(".Name"))
									Names.Add(Kvp2.Value);
							}

							UE_LOG(LogTemp, Log, TEXT("Names: %s"), *UKismetStringLibrary::JoinStringArray(Names));
						}
					}


					UEnum* BitmaskEnum = nullptr;
					static const FName BitmaskEnumFlagName(TEXT("BitmaskEnum"));
					const FString& BitmaskEnumName = Property->GetMetaData(BitmaskEnumFlagName);
					if (!BitmaskEnumName.IsEmpty())
					{
						BitmaskEnum = UClass::TryFindTypeSlow<UEnum>(BitmaskEnumName);
					}
					CountToUse = Names.Num();

					// EnumPropData.Name = Name;
					// EnumPropData.Description = "TODO FIX THE BITFIELD ENUMS...";
					// EnumType.Data.Add(EnumPropData);
					// continue;
				}


				for (int32 EnumItr = 0; EnumItr < CountToUse; EnumItr++)
				{
					FReactDocsPropertyData EnumPropData;

					if (EnumPtr->HasMetaData(TEXT("Hidden"), EnumItr)) continue;

					Name = EnumPtr->GetNameStringByIndex(EnumItr);
					DisplayName = EnumPtr->GetDisplayNameTextByIndex(EnumItr).ToString();
					ToolTip = EnumPtr->GetToolTipTextByIndex(EnumItr).ToString();
					EnumPropData.Name = Name;

					ToolTip.ParseIntoArrayLines(TooltipArray);

					if(TooltipArray.Num()>0)
					{
						EnumPropData.Description = TooltipArray[0];
						if (TooltipArray.Num() > 1)
						{
							for (int t = 1; t < TooltipArray.Num(); ++t)
							{
								EnumPropData.Comments.Add(TooltipArray[t]);
							}
						}
					}
					EnumPropData.DataType = "EnumValue";
					EnumType.Data.Add(EnumPropData);
					UE_LOG(LogTemp, Log, TEXT( "Enum Name %s Display %s TT %s"), *Name, *DisplayName, *ToolTip);
				}
			}
		}

		FReactDocsPropertyData PropertyData;
		PropertyData.DataPath = Property->GetPathName();

		const FStructProperty* StructProperty = CastField<FStructProperty>(Property);
		if (StructProperty)
		{
			for (TFieldIterator<FProperty> StrPropIt(StructProperty->Struct, EFieldIterationFlags::Default); StrPropIt; ++StrPropIt)
			{
				FProperty* StrProperty = *StrPropIt;
				FString StrPropType = StrProperty->GetCPPType();
				FString StrPropName = StrProperty->GetName();
				FString StrPropDesc = StrProperty->GetToolTipText().ToString();
			}
		}


		PropertyData.Name = PropName;
		if (PropDescArray.Num() > 0)
		{
			PropertyData.Description = PropDescArray[0];

			for (int i = 1; i < PropDescArray.Num(); ++i)
			{
				PropertyData.Comments.Add(PropDescArray[i]);
			}
		}
		else
		{
			PropertyData.Description = PropDesc;
		}
		PropertyData.Metas = PropMetas;

		FString PropertyExtraData = GetPropertyTypeData(*Property);
		FString Left;
		FString Right;
		FString FirstDataType;
		FString FirstObject;

		if (IsCustomDatatype)
		{
			UE_LOG(LogTemp, Log, TEXT( "Stop" ));
		}

		const bool bIsDelegate = Property->IsA(FMulticastDelegateProperty::StaticClass());
		if (bIsDelegate)
		{
			FMulticastDelegateProperty* DelegateProperty = CastField<FMulticastDelegateProperty>(Property);

			ProcessFunction(DelegateProperty->SignatureFunction, true, true);
			UE_LOG(LogTemp, Log, TEXT( "delegate" ));
			PropertyData.DataType = "delegate";
			PropertyData.Object = PropType;
			if (bIsContainer)
			{
				//TODO
			}
			else
			{
				PropertyData.ContainerType = "single";
			}
		}
		else
		{
			if (bIsContainer)
			{
				PropertyData.ContainerType = PropType;
				if (PropertyExtraData == "container")
				{
					PropertyExtraData = GetContainerPropertyData(*Property);
				}
				if (PropertyExtraData.Contains("::"))
				{
					FString SecondDataType;
					FString SecondObject;
					PropertyExtraData.Split("::", &Left, &Right, ESearchCase::IgnoreCase, ESearchDir::FromStart);
					Left.Split(":", &FirstDataType, &FirstObject, ESearchCase::IgnoreCase, ESearchDir::FromStart);
					Right.Split(":", &SecondDataType, &SecondObject, ESearchCase::IgnoreCase, ESearchDir::FromStart);

					PropertyData.DataType = FirstDataType + ":" + SecondDataType;
					PropertyData.Object = FirstObject + ":" + SecondObject;
				}
				else
				{
					PropertyExtraData.Split(":", &FirstDataType, &FirstObject, ESearchCase::IgnoreCase, ESearchDir::FromStart);
					PropertyData.DataType = FirstDataType;
					PropertyData.Object = FirstObject;
				}
			}
			else
			{
				PropertyData.ContainerType = "single";
				FirstDataType = PropType;
				if (PropertyExtraData != "container")
				{
					PropertyExtraData.Split(":", &FirstDataType, &FirstObject, ESearchCase::IgnoreCase, ESearchDir::FromStart);
				}

				PropertyData.DataType = FirstDataType;
				PropertyData.Object = FirstObject;
			}
		}


		if (!CategoryPropDataMap.Contains(PropertyCategory))
			CategoryPropDataMap.Add(PropertyCategory, FReactDocsPropertyCategory());

		// FReactDocsPropertyAndMetas PropertyAndMetas;
		// PropertyAndMetas.Name = PropName;
		// PropertyAndMetas.Metas = PropMetas;

		if (IsCustomDatatype)
		{
			CustomData->Data.Add(PropertyData);
		}
		else
		{
			FReactDocsPropertyCategory* FoundReactDocsPropertyCategory = ReactDocsClass.ClassPropertyCategories.FindByPredicate([PropertyCategory](FReactDocsPropertyCategory& Other)
			{
				return Other.Category == PropertyCategory;
			});
			if (FoundReactDocsPropertyCategory)
			{
				if (FoundReactDocsPropertyCategory->Category != "")
				{
					FReactDocsPropertyData* FoundReactDocsProperty = FoundReactDocsPropertyCategory->CategoryProperties.FindByPredicate([PropName](FReactDocsPropertyData& Other)
					{
						return Other.Name == PropName;
					});
					if (!FoundReactDocsProperty)
					{
						FoundReactDocsPropertyCategory->CategoryProperties.Add(PropertyData);
					}
				}
			}
			else
			{
				FReactDocsPropertyCategory ReactCategory = FReactDocsPropertyCategory();
				ReactCategory.Category = PropertyCategory.ToString();
				ReactCategory.CategoryProperties.Add(PropertyData);
				ReactDocsClass.AddPropertyCategory(ReactCategory);
			}
			ReactUnrealDocsDataAsset->AddNewProperty(FName(ReactDocsClass.ClassName), PropertyData);
			PropertyDatas.Add(PropertyData);
		}

		if (IsEnumTypeProperty)
		{
			ReactUnrealDocsDataAsset->AddNewCustomData(EnumType, EReactDocs_CustomDataType::ENUM);
		}
	};


	// if(FStructProperty* StructProperty = CastField<FStructProperty>(Property))		{}		
	// if(FArrayProperty* ArrayProperty = CastField<FArrayProperty>(Property))		{}
	// if(FMapProperty* MapProperty = CastField<FMapProperty>(Property))		{}


	CategoryPropDataMap.Add(FName("Default"), FReactDocsPropertyCategory());
	ReactDocsClass.ClassName = InClass->GetFName().ToString();
	static const FName NAME_BlueprintPrivate = "BlueprintPrivate";
	static const FName NAME_DeprecatedFunction = "DeprecatedFunction";
	static const FName NAME_BlueprintGetter = "BlueprintGetter";
	static const FName NAME_BlueprintSetter = "BlueprintSetter";
	TObjectPtr<UObject> CDO;

	// if (const UClass* const Native = Cast<UClass>(InClass))
	// {
	// 	CDO = Native->ClassDefaultObject;
	// }
	//
	// else if (const UBlueprint* const BP = Cast<UBlueprint>(InClass))
	// {
	// 	const TSubclassOf<UObject> BPClass = BP->GeneratedClass;
	// 	CDO = BPClass.GetDefaultObject();
	// }
	//
	// if (IsValid(CDO))
	// {
	// 	ClassToCheck = CDO->GetClass();
	// }
	//


	EFieldIterationFlags FieldIterationFlags = EFieldIterationFlags::Default;
	if (InClass->IsNative())
	{
		ClassToCheck = Cast<UClass>(InClass);
	}
	else if (const auto BP = Cast<UBlueprint>(InClass))
	{
		ClassToCheck = BP->GeneratedClass;
		// FieldIterationFlags = EFieldIterationFlags::IncludeSuper;
		ReactDocsClass.Description = BP->BlueprintDescription;
	}

	ReactDocsClass.DataObject = InClass;


	for (TFieldIterator<FProperty> PropIt(ClassToCheck, FieldIterationFlags); PropIt; ++PropIt)
	{
		FProperty* Property = *PropIt;
		ProcessProperty(Property, nullptr);
	}

	for (TFieldIterator<UFunction> FIT(ClassToCheck, EFieldIterationFlags::Default); FIT; ++FIT)
	{
		UFunction* Function = *FIT;
		ProcessFunction(Function, false, false);
	}

	FString JSONPayload;
	ReactUnrealDocsDataAsset->AddNewClass(ReactDocsClass);
	FJsonObjectConverter::UStructToJsonObjectString(ReactDocsClass, JSONPayload, 0, 0);
	ReactUnrealDocsDataAsset->SetCurrentJSONString(JSONPayload);

	// UEditorAssetLibrary::SaveAsset
	UEditorAssetSubsystem* EditorAssetSubsystem = GEditor->GetEditorSubsystem<UEditorAssetSubsystem>();
	EditorAssetSubsystem->SaveAsset(ReactUnrealDocsDataAsset->GetPathName());

	UE_LOG(LogTemp, Log, TEXT("%s \n --FUNCTIONS--\n %s \n --PROPERTIES-- %s "), *InClass->GetName(), *FunctionData, *Properties);
	return JSONPayload;
}


void UEUW_ReactUnrealDocsGenerator::NativeCurrentStringChanged()
{
	RichJSONs.Empty();
	ConvertJSONToRichJson(ReactUnrealDocsDataAsset->CurrentJSONString).ParseIntoArrayLines(RichJSONLines);

	EReactDocs_JSONLineType LineType = EReactDocs_JSONLineType::NONE;
	FString Category;
	FString Class;
	for (auto Line : RichJSONLines)
	{
		if (Line.ToLower().Contains("\"className\""))
		{
			FString SubString = "\"className\"</>: \"";
			FString ClassLine = Line;
			ClassLine.Split(SubString, nullptr, &ClassLine, ESearchCase::IgnoreCase, ESearchDir::FromStart);
			ClassLine.LeftChopInline(2);
			Class = ClassLine;
		}

		if (Line.ToLower().Contains("\"category\""))
		{
			FString CategorySubString = "\"category\"</>: \"";
			FString CategoryLine = Line;
			CategoryLine.Split(CategorySubString, nullptr, &CategoryLine, ESearchCase::IgnoreCase, ESearchDir::FromStart);
			CategoryLine.LeftChopInline(2);
			Category = CategoryLine;
		}

		if (LineType == EReactDocs_JSONLineType::CATEGORYPROPERTY)
		{
			LineType = EReactDocs_JSONLineType::PROPERTY;
		}
		else if (LineType == EReactDocs_JSONLineType::CATEGORYNODE)
		{
			LineType = EReactDocs_JSONLineType::NODE;
		}
		else if (LineType == EReactDocs_JSONLineType::FUNCTIONTYPE)
		{
			LineType = EReactDocs_JSONLineType::NONE;
		}

		else
		{
			if (Line.ToLower().Contains("]") || Line.ToLower().Contains("}"))
			{
				LineType = EReactDocs_JSONLineType::NONE;
				Category = "";
			}
			else if (Line.ToLower().Contains("categoryproperties"))
			{
				LineType = EReactDocs_JSONLineType::CATEGORYPROPERTY;
			}
			else if (Line.ToLower().Contains("categorynodes"))
			{
				LineType = EReactDocs_JSONLineType::CATEGORYNODE;
			}
		}

		if (Line.ToLower().Contains("\"functiontypes\""))
		{
			LineType = EReactDocs_JSONLineType::FUNCTIONTYPE;
		}

		if (Line.ToLower().Contains("\"description\""))
		{
			LineType = EReactDocs_JSONLineType::DESCRIPTION;
		}

		if (Line.ToLower().Contains("\"defaultvalue\""))
		{
			LineType = EReactDocs_JSONLineType::DEFAULTVALUE;
		}

		FReactDocsJsonLine RichLine = FReactDocsJsonLine(Class, Category, Line, LineType);
		RichJSONs.Add(RichLine);
	}

	OnCurrentStringChanged();
}

void UEUW_ReactUnrealDocsGenerator::ShowFullJsonOfType(EReactDocs_Type InType)
{
	FString* NewString = nullptr;
	switch (InType)
	{
		case EReactDocs_Type::CLASS:
			{
				ReactUnrealDocsDataAsset->GenerateClassesJson();
				NewString = &ReactUnrealDocsDataAsset->ClassesJson;
			}
			break;
		case EReactDocs_Type::PROPERTY:
			{
				// TArray<UReactDocsDataObjectNative*> Datas;
				// for (auto& KVP : ReactUnrealDocsDataAsset->ClassDataMap)
				// {
				// 	ShowDatas()
				// }
				ReactUnrealDocsDataAsset->GeneratePropertiesJson();
				NewString = &ReactUnrealDocsDataAsset->PropertiesJson;
			}
			break;
		case EReactDocs_Type::NODE:
			{
				ReactUnrealDocsDataAsset->GenerateNodesJson();
				NewString = &ReactUnrealDocsDataAsset->NodesJson;
			}
			break;
		case EReactDocs_Type::DATATYPE:
			{
				ReactUnrealDocsDataAsset->GenerateDataTypesJson();
				NewString = &ReactUnrealDocsDataAsset->DataTypesJson;
			}
			break;
		default: ;
	}
	ReactUnrealDocsDataAsset->SetCurrentJSONString(*NewString);
}

//Shameleslly taken from  UK2Node_CallFunction::GetDefaultTooltipForFunction
FString UEUW_ReactUnrealDocsGenerator::GetDefaultTooltipForFunction(const UFunction* Function)
{
	FString Tooltip;

	if (Function != NULL)
	{
		Tooltip = Function->GetToolTipText().ToString();
	}

	if (!Tooltip.IsEmpty())
	{
		// Strip off the doxygen nastiness
		static const FString DoxygenBriefParam(TEXT("@brief"));
		static const FString DoxygenParam(TEXT("@param"));
		static const FString DoxygenReturn(TEXT("@return"));
		static const FString DoxygenSee(TEXT("@see"));
		static const FString TooltipSee(TEXT("See:"));
		static const FString DoxygenNote(TEXT("@note"));
		static const FString TooltipNote(TEXT("Note:"));

		if (Tooltip.Contains("@brief"))
		{
			UE_LOG(LogTemp, Log, TEXT( "------------" ));
		}

		Tooltip.Split(DoxygenBriefParam, nullptr, &Tooltip, ESearchCase::IgnoreCase, ESearchDir::FromStart);
		Tooltip.Split(DoxygenParam, &Tooltip, nullptr, ESearchCase::IgnoreCase, ESearchDir::FromStart);
		Tooltip.Split(DoxygenReturn, &Tooltip, nullptr, ESearchCase::IgnoreCase, ESearchDir::FromStart);

		Tooltip.ReplaceInline(*DoxygenSee, *TooltipSee);
		Tooltip.ReplaceInline(*DoxygenNote, *TooltipNote);

		Tooltip.TrimStartAndEndInline();

		UClass* CurrentSelfClass = (Function != NULL) ? Function->GetOwnerClass() : NULL;
		UClass const* TrueSelfClass = CurrentSelfClass;
		if (CurrentSelfClass && CurrentSelfClass->ClassGeneratedBy)
		{
			TrueSelfClass = CurrentSelfClass->GetAuthoritativeClass();
		}

		FString TargetDisplayText = (TrueSelfClass != NULL) ? TrueSelfClass->GetDisplayNameText().ToString() : "";
		if (TargetDisplayText == "")
		{
			return FString::Format(TEXT("{0}\n"), {Tooltip});
		}
		else
		{
			return FString::Format(TEXT("{0}\n Target is {1}"), {Tooltip, TargetDisplayText});
		}
	}
	else
	{
		return UK2Node_CallFunction::GetUserFacingFunctionName(Function).ToString();
	}
}


//Shameleslly taken from  UK2Node_CallFunction::GeneratePinTooltipFromFunction
void UEUW_ReactUnrealDocsGenerator::GeneratePropertyTooltipFromFunction(FReactDocsPropertyData& InProperty, const UFunction* Function, bool IsReturnProp)
{
	// figure what tag we should be parsing for (is this a return-val pin, or a parameter?)
	FString ParamName;
	FString TagStr = TEXT("@param");
	ESearchDir::Type SearchDir = ESearchDir::FromStart;

	if (InProperty.Name == "ReturnValue")
	{
		TagStr = TEXT("@return");
		SearchDir = ESearchDir::FromStart;
	}
	TArray<FString> TooltipLines;
	Function->GetToolTipText().ToString().ParseIntoArrayLines(TooltipLines);


	for (auto TooltipLine : TooltipLines)
	{
		int TypePosStart = INDEX_NONE;
		int ObjectPosStart = INDEX_NONE;
		if (InProperty.Name == "ReturnValue")
		{
			if (TooltipLine.Contains("@return"))
			{
				TypePosStart = TooltipLine.Find("@type");
				ObjectPosStart = TooltipLine.Find("@object");
				TagStr = TEXT("@return");
				IsReturnProp = true;
			}
		}

		if (TooltipLine.ToLower().Contains(InProperty.Name))
		{
			if (TooltipLine.Contains("@return"))
			{
				TagStr = TEXT("@return");
				IsReturnProp = true;
			}
			else if (TooltipLine.Contains("@param"))
			{
				ParamName = InProperty.Name;
				IsReturnProp = false;
			}

			TypePosStart = TooltipLine.Find("@type");
			ObjectPosStart = TooltipLine.Find("@object");
		}
		if (TypePosStart != INDEX_NONE)
		{
			TypePosStart += FString("@type").Len();

			while (TypePosStart < TooltipLine.Len() && TooltipLine[TypePosStart] != '@')
			{
				InProperty.DataType.AppendChar(TooltipLine[TypePosStart++]);
			}
			InProperty.DataType.TrimStartAndEndInline();
		}

		if (ObjectPosStart != INDEX_NONE)
		{
			ObjectPosStart += FString("@object").Len();
			while (ObjectPosStart < TooltipLine.Len() && TooltipLine[ObjectPosStart] != '@')
			{
				InProperty.Object.AppendChar(TooltipLine[ObjectPosStart++]);
			}
			InProperty.Object.TrimStartAndEndInline();
		}
	}

	if (Function->GetName().Contains("CanUse"))
	{
		UE_LOG(LogTemp, Log, TEXT( "FUCK YEs();" ));
	}


	if (InProperty.Description.IsEmpty())
	{
		// grab the the function's comment block for us to parse
		FString FunctionToolTipText = Function->GetToolTipText().ToString();

		int32 CurStrPos = INDEX_NONE;
		int32 FullToolTipLen = FunctionToolTipText.Len();
		// parse the full function tooltip text, looking for tag lines
		do
		{
			CurStrPos = FunctionToolTipText.Find(TagStr, ESearchCase::IgnoreCase, SearchDir, CurStrPos);
			if (CurStrPos == INDEX_NONE) // if the tag wasn't found
			{
				break;
			}

			// advance past the tag
			CurStrPos += TagStr.Len();

			// handle people having done @returns instead of @return
			if (IsReturnProp && CurStrPos < FullToolTipLen && FunctionToolTipText[CurStrPos] == TEXT('s'))
			{
				++CurStrPos;
			}

			// advance past whitespace
			while (CurStrPos < FullToolTipLen && FChar::IsWhitespace(FunctionToolTipText[CurStrPos]))
			{
				++CurStrPos;
			}

			// if this is a parameter pin
			if (!ParamName.IsEmpty())
			{
				FString TagParamName;

				// copy the parameter name
				while (CurStrPos < FullToolTipLen && !FChar::IsWhitespace(FunctionToolTipText[CurStrPos]))
				{
					TagParamName.AppendChar(FunctionToolTipText[CurStrPos++]);
				}

				// if this @param tag doesn't match the param we're looking for
				if (TagParamName != ParamName)
				{
					continue;
				}
			}

			// advance past whitespace (get to the meat of the comment)
			// since many doxygen style @param use the format "@param <param name> - <comment>" we also strip - if it is before we get to any other non-whitespace
			while (CurStrPos < FullToolTipLen && (FChar::IsWhitespace(FunctionToolTipText[CurStrPos]) || FunctionToolTipText[CurStrPos] == '-'))
			{
				++CurStrPos;
			}


			FString ParamDesc;
			// collect the param/return-val description
			while (CurStrPos < FullToolTipLen && FunctionToolTipText[CurStrPos] != TEXT('@'))
			{
				// advance past newline
				while (CurStrPos < FullToolTipLen && FChar::IsLinebreak(FunctionToolTipText[CurStrPos]))
				{
					++CurStrPos;

					// advance past whitespace at the start of a new line
					while (CurStrPos < FullToolTipLen && FChar::IsWhitespace(FunctionToolTipText[CurStrPos]))
					{
						++CurStrPos;
					}

					// replace the newline with a single space
					if (CurStrPos < FullToolTipLen && !FChar::IsLinebreak(FunctionToolTipText[CurStrPos]))
					{
						ParamDesc.AppendChar(TEXT(' '));
					}
				}

				if (CurStrPos < FullToolTipLen && FunctionToolTipText[CurStrPos] != TEXT('@'))
				{
					ParamDesc.AppendChar(FunctionToolTipText[CurStrPos++]);
				}
			}

			// trim any trailing whitespace from the descriptive text
			ParamDesc.TrimEndInline();

			// if we came up with a valid description for the param/return-val
			if (!ParamDesc.IsEmpty())
			{
				TArray<FString> Desc;
				ParamDesc.ParseIntoArrayLines(Desc);
				InProperty.Description = ParamDesc;
				break; // we found a match, so there's no need to continue
			}
		}
		while (CurStrPos < FullToolTipLen);
		// If we have no parameter or return value descriptions the full description will be relevant in describing the return value:
		if (IsReturnProp &&
			InProperty.Comments.IsEmpty() &&
			FunctionToolTipText.Find(TEXT("@param")) == INDEX_NONE &&
			FunctionToolTipText.Find(TEXT("@return")) == INDEX_NONE)
		{
			// for the return pin, default to using the function description if no @return tag was provided:
			InProperty.Comments.Add(Function->GetToolTipText().ToString());
		}
	}
}

template <class T>
TArray<FReactDocsPropertyData> UEUW_ReactUnrealDocsGenerator::GeneratePropertyDatasFromObject(T* Object)
{
	TArray<FReactDocsPropertyData> OutProperties;
	FString Name = Object->GetName();
	// figure what tag we should be parsing for (is this a return-val pin, or a parameter?)
	FString ParamName;
	FString TagStr = TEXT("@param");
	ESearchDir::Type SearchDir = ESearchDir::FromStart;

	TArray<FString> TooltipLines;
	Object->GetToolTipText().ToString().ParseIntoArrayLines(TooltipLines);


	for (auto TooltipLine : TooltipLines)
	{
		int PropertyPosStart = INDEX_NONE;

		if (TooltipLine.Contains("@property"))
		{
			PropertyPosStart = TooltipLine.Find("@property");

			FReactDocsPropertyData Data;

			if (PropertyPosStart != INDEX_NONE)
			{
				PropertyPosStart += FString("@property ").Len();
				while (PropertyPosStart && TooltipLine[PropertyPosStart] != ':')
				{
					Data.Name.AppendChar(TooltipLine[PropertyPosStart++]);
				}

				PropertyPosStart += 2;
				while (PropertyPosStart < TooltipLine.Len())
				{
					Data.Description.AppendChar(TooltipLine[PropertyPosStart++]);
				}
			}
		}
	}


	// for (auto TooltipLine : TooltipLines)
	// {
	// 	int TypePosStart = INDEX_NONE;
	// 	int ObjectPosStart = INDEX_NONE;
	// 	
	// 	if (TooltipLine.Contains("@return"))
	// 	{
	// 		TypePosStart = TooltipLine.Find("@type");
	// 		ObjectPosStart = TooltipLine.Find("@object");
	// 		TagStr = TEXT("@return");
	// 		IsReturnProp = true;
	// 	}
	//
	// 	if (TooltipLine.ToLower().Contains(Name))
	// 	{
	// 		if (TooltipLine.Contains("@return"))
	// 		{
	// 			TagStr = TEXT("@return");
	// 			IsReturnProp = true;
	// 		}
	// 		else if (TooltipLine.Contains("@param"))
	// 		{
	// 			ParamName = Name;
	// 			IsReturnProp = false;
	// 		}
	//
	// 		else if (TooltipLine.Contains("@property"))
	// 		{
	// 			ParamName = Name;
	// 			IsReturnProp = false;
	// 		}
	//
	// 		TypePosStart = TooltipLine.Find("@type");
	// 		ObjectPosStart = TooltipLine.Find("@object");
	// 	}
	// 	if (TypePosStart != INDEX_NONE)
	// 	{
	// 		TypePosStart += FString("@type").Len();
	//
	// 		while (TypePosStart < TooltipLine.Len() && TooltipLine[TypePosStart] != '@')
	// 		{
	// 			OutProperty.DataType.AppendChar(TooltipLine[TypePosStart++]);
	// 		}
	// 		OutProperty.DataType.TrimStartAndEndInline();
	// 	}
	//
	// 	if (ObjectPosStart != INDEX_NONE)
	// 	{
	// 		ObjectPosStart += FString("@object").Len();
	// 		while (ObjectPosStart < TooltipLine.Len() && TooltipLine[ObjectPosStart] != '@')
	// 		{
	// 			OutProperty.Object.AppendChar(TooltipLine[ObjectPosStart++]);
	// 		}
	// 		OutProperty.Object.TrimStartAndEndInline();
	// 	}
	// }


	// if (OutProperty.Description.IsEmpty())
	// {
	// 	// grab the the function's comment block for us to parse
	// 	FString ObjectToolTipText = Object->GetToolTipText().ToString();
	//
	// 	int32 CurStrPos = INDEX_NONE;
	// 	int32 FullToolTipLen = ObjectToolTipText.Len();
	// 	// parse the full function tooltip text, looking for tag lines
	// 	do
	// 	{
	// 		CurStrPos = ObjectToolTipText.Find(TagStr, ESearchCase::IgnoreCase, SearchDir, CurStrPos);
	// 		if (CurStrPos == INDEX_NONE) // if the tag wasn't found
	// 		{
	// 			break;
	// 		}
	//
	// 		// advance past the tag
	// 		CurStrPos += TagStr.Len();
	//
	// 		// handle people having done @returns instead of @return
	// 		if (IsReturnProp && CurStrPos < FullToolTipLen && ObjectToolTipText[CurStrPos] == TEXT('s'))
	// 		{
	// 			++CurStrPos;
	// 		}
	//
	// 		// advance past whitespace
	// 		while (CurStrPos < FullToolTipLen && FChar::IsWhitespace(ObjectToolTipText[CurStrPos]))
	// 		{
	// 			++CurStrPos;
	// 		}
	//
	// 		// if this is a parameter pin
	// 		if (!ParamName.IsEmpty())
	// 		{
	// 			FString TagParamName;
	//
	// 			// copy the parameter name
	// 			while (CurStrPos < FullToolTipLen && !FChar::IsWhitespace(ObjectToolTipText[CurStrPos]))
	// 			{
	// 				TagParamName.AppendChar(ObjectToolTipText[CurStrPos++]);
	// 			}
	//
	// 			// if this @param tag doesn't match the param we're looking for
	// 			if (TagParamName != ParamName)
	// 			{
	// 				continue;
	// 			}
	// 		}
	//
	// 		// advance past whitespace (get to the meat of the comment)
	// 		// since many doxygen style @param use the format "@param <param name> - <comment>" we also strip - if it is before we get to any other non-whitespace
	// 		while (CurStrPos < FullToolTipLen && (FChar::IsWhitespace(ObjectToolTipText[CurStrPos]) || ObjectToolTipText[CurStrPos] == '-'))
	// 		{
	// 			++CurStrPos;
	// 		}
	//
	//
	// 		FString ParamDesc;
	// 		// collect the param/return-val description
	// 		while (CurStrPos < FullToolTipLen && ObjectToolTipText[CurStrPos] != TEXT('@'))
	// 		{
	// 			// advance past newline
	// 			while (CurStrPos < FullToolTipLen && FChar::IsLinebreak(ObjectToolTipText[CurStrPos]))
	// 			{
	// 				++CurStrPos;
	//
	// 				// advance past whitespace at the start of a new line
	// 				while (CurStrPos < FullToolTipLen && FChar::IsWhitespace(ObjectToolTipText[CurStrPos]))
	// 				{
	// 					++CurStrPos;
	// 				}
	//
	// 				// replace the newline with a single space
	// 				if (CurStrPos < FullToolTipLen && !FChar::IsLinebreak(ObjectToolTipText[CurStrPos]))
	// 				{
	// 					ParamDesc.AppendChar(TEXT(' '));
	// 				}
	// 			}
	//
	// 			if (CurStrPos < FullToolTipLen && ObjectToolTipText[CurStrPos] != TEXT('@'))
	// 			{
	// 				ParamDesc.AppendChar(ObjectToolTipText[CurStrPos++]);
	// 			}
	// 		}
	//
	// 		// trim any trailing whitespace from the descriptive text
	// 		ParamDesc.TrimEndInline();
	//
	// 		// if we came up with a valid description for the param/return-val
	// 		if (!ParamDesc.IsEmpty())
	// 		{
	// 			TArray<FString> Desc;
	// 			ParamDesc.ParseIntoArrayLines(Desc);
	// 			OutProperty.Description = ParamDesc;
	// 			break; // we found a match, so there's no need to continue
	// 		}
	// 	}
	// 	while (CurStrPos < FullToolTipLen);
	// 	// If we have no parameter or return value descriptions the full description will be relevant in describing the return value:
	// 	if (IsReturnProp &&
	// 		OutProperty.Comments.IsEmpty() &&
	// 		ObjectToolTipText.Find(TEXT("@param")) == INDEX_NONE &&
	// 		ObjectToolTipText.Find(TEXT("@return")) == INDEX_NONE)
	// 	{
	// 		// for the return pin, default to using the function description if no @return tag was provided:
	// 		for (int t = 1; t < TooltipLines.Num(); ++t)
	// 		{
	// 			OutProperty.Comments.Add(TooltipLines[t]);
	// 		}
	// 	}
	// }
	// return OutProperty;

	return OutProperties;
}

FString UEUW_ReactUnrealDocsGenerator::ConvertJSONToRichJson(const FString& JSONToConvert)
{
	// FReactDocsClass ReactDocsClass;
	// FJsonObjectConverter::JsonObjectStringToUStruct(JSONToConvert, &ReactDocsClass, 0, 0);
	FString RichTextJSON;
	// RichTextJSON.Append(FString::Format(TEXT("{\n "
	// 	"	className: \"{0}\", \n "
	// 	"	description: \"{1}\", \n"
	// 	"	classProperties: [ \n"), {ReactDocsClass.ClassName, ReactDocsClass.Description}));
	//
	//
	// for (auto& Element : ReactDocsClass.PropertyCategories)
	// {
	// 	RichTextJSON.Append(FString::Format(TEXT("		{\n"
	// 		"			category: \"{0}\", \n"
	// 		"			image: \"\", \n"
	// 		"			onlyInPropertyImage: \"false\", \n"
	// 		"			categoryProperties:\n"
	//   "				[\n"), {Element.Category}));
	// 	for (auto CategoryProperty : Element.CategoryProperties)
	// 	{
	// 		RichTextJSON.Append(FString::Format(TEXT("					\"{0}\",\n"), {CategoryProperty}));
	// 	}
	// 	RichTextJSON.Append("				]\n");
	// 	RichTextJSON.Append("		},\n");
	//
	// }
	// RichTextJSON.Append("}");
	// return RichTextJSON;

	// Define regex patterns and arrays to store matches
	// FRegexPattern KeywordPattern(TEXT("\\b(const|var|let|function|if|else|for|while|switch|case|break|return)\\b"));
	// FRegexPattern KeywordPattern(TEXT("\\b(const|var|let|function|if|else|for|while|switch|case|break|return)(?=\"|\\b)"));
	FRegexPattern KeywordPattern(TEXT("\\b(const|return|export)(?=\"|\\b)"));
	FRegexPattern DatatypePattern(TEXT("^\\s*([^\\s:]+)\\s*:"));
	FRegexPattern BracketPattern(TEXT("[\\[\\]{}()]"));
	TArray<FString> Keywords;
	TArray<FString> Datatypes;
	TArray<FString> Brackets;

	// Extract keywords, datatypes, and brackets
	FRegexMatcher KeywordMatcher(KeywordPattern, JSONToConvert);
	while (KeywordMatcher.FindNext())
	{
		Keywords.AddUnique(KeywordMatcher.GetCaptureGroup(0));
	}
	FRegexMatcher DatatypeMatcher(DatatypePattern, JSONToConvert);
	while (DatatypeMatcher.FindNext())
	{
		Datatypes.AddUnique(DatatypeMatcher.GetCaptureGroup(0));
	}
	FRegexMatcher BracketMatcher(BracketPattern, JSONToConvert);
	while (BracketMatcher.FindNext())
	{
		Brackets.AddUnique(BracketMatcher.GetCaptureGroup(0));
	}
	TArray<FString> Lines;
	JSONToConvert.ParseIntoArrayLines(Lines);
	// Extract datatypes from each line
	TArray<FString> Datatypes2;
	for (const FString& Line : Lines)
	{
		FRegexMatcher Matcher(DatatypePattern, Line);
		if (Matcher.FindNext())
		{
			FString Datatype = Matcher.GetCaptureGroup(1);
			Datatypes.AddUnique(Datatype);
		}
	}

	// Construct the converted JSON string
	FString ConvertedJson = JSONToConvert;
	for (auto str : Keywords)
	{
		FString Replaced = "<keyword>" + str + "</>";
		ConvertedJson.ReplaceInline(*str, *Replaced, ESearchCase::CaseSensitive);
	}
	for (auto str : Datatypes)
	{
		FString Replaced = "<datatype>" + str + "</>";
		ConvertedJson.ReplaceInline(*str, *Replaced, ESearchCase::CaseSensitive);
	}
	for (auto str : Brackets)
	{
		FString Replaced;
		if (str == "{" || str == "}")
			Replaced = "<curly>" + str + "</>";
		else
			Replaced = "<square>" + str + "</>";

		ConvertedJson.ReplaceInline(*str, *Replaced);
	}

	// Return the converted JSON string
	return ConvertedJson;
}

void UEUW_ReactUnrealDocsGenerator::DeleteAll()
{
	FString DialogText = "Are you sure you want to delete ALL data?";
	if (FMessageDialog::Open(EAppMsgType::YesNo, FText::FromString(DialogText)) == EAppReturnType::Yes)
	{
		ReactUnrealDocsDataAsset->DeleteAll();
	}
}

bool UEUW_ReactUnrealDocsGenerator::ShowDatas()
{
	return ReactUnrealDocsDataAsset->ShowDatas(SoloDatas);
}


bool UEUW_ReactUnrealDocsGenerator::DeleteData(UReactDocsDataObjectNative* DataObject, bool ShowPrompt)
{
	bool bCanTryToDelete = false;
	auto Delete([&]
	{
		ReactUnrealDocsDataAsset->DeleteData(*DataObject);
		UEditorAssetSubsystem* EditorAssetSubsystem = GEditor->GetEditorSubsystem<UEditorAssetSubsystem>();
		EditorAssetSubsystem->SaveAsset(ReactUnrealDocsDataAsset->GetPathName());
	});


	if (ShowPrompt)
	{
		FString DialogText = FString::Format(TEXT("Are you sure you want to delete data for \n {0}?"), {DataObject->DataName.ToString()});
		if (FMessageDialog::Open(EAppMsgType::YesNo, FText::FromString(DialogText)) == EAppReturnType::Yes)
		{
			bCanTryToDelete = true;
		}
	}

	if (bCanTryToDelete)
	{
		Delete();
		return true;
	}
	return true;
}

bool UEUW_ReactUnrealDocsGenerator::AddNewDataToClass(FName Category, FName DataName, EReactDocs_Type DataType)
{
	return ReactUnrealDocsDataAsset->AddNewDataToClassCategory(Category, DataName, DataType);
}

// FString UEUW_ReactUnrealDocsGenerator::ConvertJSONToRichJson(const FString& JSONToConvert)
// {
// 	// FReactDocsClass ReactDocsClass;
// 	// FJsonObjectConverter::JsonObjectStringToUStruct(JSONToConvert, &ReactDocsClass, 0, 0);
// 	FString RichTextJSON;
// 	// RichTextJSON.Append(FString::Format(TEXT("{\n "
// 	// 	"	className: \"{0}\", \n "
// 	// 	"	description: \"{1}\", \n"
// 	// 	"	classProperties: [ \n"), {ReactDocsClass.ClassName, ReactDocsClass.Description}));
//  //
//  //
// 	// for (auto& Element : ReactDocsClass.PropertyCategories)
// 	// {
// 	// 	RichTextJSON.Append(FString::Format(TEXT("		{\n"
// 	// 		"			category: \"{0}\", \n"
// 	// 		"			image: \"\", \n"
// 	// 		"			onlyInPropertyImage: \"false\", \n"
// 	// 		"			categoryProperties:\n"
//  //   "				[\n"), {Element.Category}));
// 	// 	for (auto CategoryProperty : Element.CategoryProperties)
// 	// 	{
// 	// 		RichTextJSON.Append(FString::Format(TEXT("					\"{0}\",\n"), {CategoryProperty}));
// 	// 	}
// 	// 	RichTextJSON.Append("				]\n");
// 	// 	RichTextJSON.Append("		},\n");
//  //
// 	// }
// 	// RichTextJSON.Append("}");
// 	// return RichTextJSON;
//
// 	// Define regex patterns and arrays to store matches
// 	FRegexPattern KeywordPattern(TEXT("\\b(const|var|let|function|if|else|for|while|switch|case|break|return)\\b"));
// 	FRegexPattern DatatypePattern(TEXT("^\\s*([^\\s:]+)\\s*:"));
// 	FRegexPattern BracketPattern(TEXT("[\\[\\]{}()]"));
// 	TArray<FString> Keywords;
// 	TArray<FString> Datatypes;
// 	TArray<FString> Brackets;
//
// 	// Extract keywords, datatypes, and brackets
// 	FRegexMatcher KeywordMatcher(KeywordPattern, JSONToConvert);
// 	while (KeywordMatcher.FindNext())
// 	{
// 		Keywords.Add(KeywordMatcher.GetCaptureGroup(0));
// 	}
// 	FRegexMatcher DatatypeMatcher(DatatypePattern, JSONToConvert);
// 	while (DatatypeMatcher.FindNext())
// 	{
// 		Datatypes.AddUnique(DatatypeMatcher.GetCaptureGroup(0));
// 	}
// 	FRegexMatcher BracketMatcher(BracketPattern, JSONToConvert);
// 	while (BracketMatcher.FindNext())
// 	{
// 		Brackets.AddUnique(BracketMatcher.GetCaptureGroup(0));
// 	}
// 	TArray<FString> Lines;
// 	JSONToConvert.ParseIntoArrayLines(Lines);
// 	// Extract datatypes from each line
// 	TArray<FString> Datatypes2;
// 	for (const FString& Line : Lines)
// 	{
// 		FRegexMatcher Matcher(DatatypePattern, Line);
// 		if (Matcher.FindNext())
// 		{
// 			FString Datatype = Matcher.GetCaptureGroup(1);
// 			Datatypes.AddUnique(Datatype);
// 		}
// 	}
// 	
// 	// Construct the converted JSON string
// 	FString ConvertedJson = JSONToConvert;
// 	for (auto str : Keywords)
// 	{
// 		FString Replaced = "<keyword>"+str+"</>";
// 		ConvertedJson.ReplaceInline(*str,*Replaced);
// 	}
// 	for (auto str : Datatypes)
// 	{
// 		FString Replaced = "<datatype>"+str+"</>";
// 		ConvertedJson.ReplaceInline(*str,*Replaced);
// 	}
// 	for (auto str : Brackets)
// 	{
// 		FString Replaced;
// 		if(str=="{" || str=="}")
// 		 Replaced = "<curly>"+str+"</>";
// 		else
// 			Replaced = "<square>"+str+"</>";
//
// 		ConvertedJson.ReplaceInline(*str,*Replaced);
// 	}
// 	
// 	// Return the converted JSON string
// 	return ConvertedJson;
// }
// 	
//

bool UEUW_ReactUnrealDocsGenerator::ShowData(UReactDocsDataObjectNative* DataObject)
{
	// auto GetFunction([&]() -> void(UReactUnrealDocsDA::*)(FName)
	// {
	// 	switch (DataObject->DataType)
	// 	{
	// 		case EReactDocs_Type::CLASS:
	// 			return &UReactUnrealDocsDA::ShowClass;
	// 		case EReactDocs_Type::PROPERTY:
	// 			return &UReactUnrealDocsDA::ShowProperty;
	// 		case EReactDocs_Type::NODE:
	// 			return &UReactUnrealDocsDA::ShowNode;
	// 		case EReactDocs_Type::DATATYPE:
	// 			return &UReactUnrealDocsDA::ShowDatatype;
	// 		default: ;
	// 	}
	// 	return NULL;
	// });
	//
	// (ReactUnrealDocsDataAsset->*GetFunction())(DataObject->DataName);
	return ReactUnrealDocsDataAsset->ShowData(*DataObject);
}

FString UEUW_ReactUnrealDocsGenerator::WriteDataToDisk() const
{
	ReactUnrealDocsDataAsset->GenerateClassesJson();
	ReactUnrealDocsDataAsset->GeneratePropertiesJson();
	ReactUnrealDocsDataAsset->GenerateNodesJson();
	ReactUnrealDocsDataAsset->GenerateDataTypesJson();

	const FString Classes = ReactUnrealDocsDataAsset->ClassesJson;
	const FString Properties = ReactUnrealDocsDataAsset->PropertiesJson;
	const FString Nodes = ReactUnrealDocsDataAsset->NodesJson;
	const FString DataTypes = ReactUnrealDocsDataAsset->DataTypesJson;

	const FString ProjectName = FApp::GetProjectName();
	const FString Path = FPaths::ProjectSavedDir() + "/ReactUnrealDocs/" + ProjectName + "/";

	const FString ClassesPath = Path + "Classes.js";
	const FString PropertiesPath = Path + "Properties.js";
	const FString NodesPath = Path + "Nodes.js";
	const FString DataTypesPath = Path + "DataTypes.js";

	FFileHelper::SaveStringToFile(Classes, *ClassesPath, FFileHelper::EEncodingOptions::AutoDetect, &IFileManager::Get());
	FFileHelper::SaveStringToFile(Properties, *PropertiesPath, FFileHelper::EEncodingOptions::AutoDetect, &IFileManager::Get());
	FFileHelper::SaveStringToFile(Nodes, *NodesPath, FFileHelper::EEncodingOptions::AutoDetect, &IFileManager::Get());
	FFileHelper::SaveStringToFile(DataTypes, *DataTypesPath, FFileHelper::EEncodingOptions::AutoDetect, &IFileManager::Get());

	return ClassesPath + '\n' + PropertiesPath + '\n' + NodesPath + '\n' + DataTypesPath;
}

void UEUW_ReactUnrealDocsGenerator::OpenSavePathInExplorer()
{
	const FString ProjectName = FApp::GetProjectName();
	const FString Path = FPaths::ConvertRelativePathToFull(FPaths::ProjectSavedDir() + "/ReactUnrealDocs/" + ProjectName + "/");
	if (!FPaths::DirectoryExists(*Path))
	{
		IPlatformFile& PlatformFile = FPlatformFileManager::Get().GetPlatformFile();
		PlatformFile.CreateDirectory(*Path);
	}
	FPlatformProcess::ExploreFolder(*Path);
}

FString UEUW_ReactUnrealDocsGenerator::GeneratePropertiesForClass(FName ClassName)
{
	auto ClassData = ReactUnrealDocsDataAsset->ClassDataMap.Find(ClassName);

	for (auto& Element : ClassData->ClassPropertyCategories)
	{
	}
	return "";
}
