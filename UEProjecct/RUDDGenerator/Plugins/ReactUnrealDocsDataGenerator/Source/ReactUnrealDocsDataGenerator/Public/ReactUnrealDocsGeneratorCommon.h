// Copyright Clusterfact Games 2024.  All Rights Reserved.

#pragma once
#include "CoreMinimal.h"
#include "JsonObjectConverter.h"
#include "ReactUnrealDocsGeneratorCommon.generated.h"

UENUM(Blueprintable)
enum class EReactDocs_Type : uint8
{
	CLASS,
	PROPERTY,
	NODE,
	PROPERTYCATEGORY,
	NODECATEGORY,
	DATATYPE,
	DATATYPECATEGORY,
	
};

UENUM(Blueprintable)
enum class EReactDocs_DataChangedType : uint8
{
	NONE,
	REMOVED,
	ADDED,
	MODIFIED,
};

UENUM(Blueprintable)
enum class EReactDocs_ObjectType : uint8
{
	NONE,
	BLUEPRINT,
	NATIVE
};


UENUM(Blueprintable)
enum class EReactDocs_CustomDataType : uint8
{
	DELEGATE,
	STRUCT,
	ENUM
};

UENUM(Blueprintable)
enum class EReactDocs_JSONLineType : uint8
{
	NONE,
	CLASS,
	PROPERTY,
	NODE,
	DATATYPE,
	CATEGORYPROPERTY,
	CATEGORYNODE,
	FUNCTIONTYPE,
	DESCRIPTION,
	DEFAULTVALUE,
};

/*
UCLASS(BlueprintType)
class REACTUNREALDOCSDATAGENERATOR_API UReactDocsClassPropertyCategory: public UObject
{
	GENERATED_BODY()
	// The category of the class property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Category;

	// The image associated with the class property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Image;

	// Indicates whether the property is only applicable within an image context.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	bool OnlyInPropertyImage;

	// The list of properties within a category.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FString> CategoryProperties;

	// Subcategories within a class property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<UReactDocsClassPropertyCategory> SubCategories;
};

UCLASS(BlueprintType)
class REACTUNREALDOCSDATAGENERATOR_API UReactDocsClassNodeCategory: public UObject
{
	GENERATED_BODY()

	// The category of the class property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Category;

	// The list of properties within a category.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FString> CategoryNodes;
};

UCLASS(BlueprintType)
class REACTUNREALDOCSDATAGENERATOR_API UReactDocsPropertyData: public UObject
{
	GENERATED_BODY()

	// The name of the property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Name;

	// The data type of the property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString DataType;

	// The container type of the property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString ContainerType;

	// The associated object of the property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Object;

	// The description of the property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Description;

	// Additional comments associated with the property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FString> Comments;

	// The default value of the property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString DefaultValue;
};

UCLASS(BlueprintType)
class REACTUNREALDOCSDATAGENERATOR_API UReactDocsNodeData : public UObject
{
	GENERATED_BODY()
	// The name of the node.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Name;

	// Additional comments associated with the node.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FString> Comments;

	// Types of this node.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FString> FunctionTypes;

	// Inputs of this node
	TArray<UReactDocsPropertyData> Inputs;

	// Outputs of this node
	TArray<UReactDocsPropertyData> Outputs;
};


UCLASS(BlueprintType)
class REACTUNREALDOCSDATAGENERATOR_API UReactDocsCFStomDataType: public UObject
{

	GENERATED_BODY()
	// The name of the datatype.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Name;

	// The description of the datatype.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Description;

	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<UReactDocsPropertyData> Data;
};

UCLASS(BlueprintType)
class REACTUNREALDOCSDATAGENERATOR_API UReactDocsClass: public UObject
{
	GENERATED_BODY()
	// Name of the class.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString ClassName;

	// The description of the class.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Description;

	// An array of class properties data.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<UReactDocsClassPropertyCategory> PropertyCategories;

	// An array of class nodes data.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<UReactDocsClassNodeCategory> NodeCategories;
};
*/


UCLASS(BlueprintType)
class REACTUNREALDOCSDATAGENERATOR_API UReactDocsDataObjectNative : public UObject
{
	GENERATED_BODY()
	UReactDocsDataObjectNative()
	{
		DataChangedType = EReactDocs_DataChangedType::NONE;
		ObjectType = EReactDocs_ObjectType::NONE;
	}

public:
	DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnSoloChanged, bool, NewSolo);

	UPROPERTY(BlueprintAssignable)
	FOnSoloChanged OnSoloChanged;

	UFUNCTION(BlueprintCallable)
	void SetSolo(bool bNewSolo)
	{
		bIsSolo = bNewSolo;
		OnSoloChanged.Broadcast(bIsSolo);
	};

	UPROPERTY(Transient, BlueprintReadWrite)
	bool bIsSolo;

	UPROPERTY(Transient, BlueprintReadWrite, EditAnywhere, Category="ReactUnrealDocs|Data", meta=(ExposeOnSpawn="true"))
	EReactDocs_DataChangedType DataChangedType;

	UPROPERTY(BlueprintReadWrite, EditAnywhere, Category="ReactUnrealDocs|Data", meta=(ExposeOnSpawn="true"))
	FName DataName;

	UPROPERTY(BlueprintReadWrite, EditAnywhere, Category="ReactUnrealDocs|Data", meta=(ExposeOnSpawn="true"))
	UObject* DataObject;

	UPROPERTY(BlueprintReadWrite, EditAnywhere, Category="ReactUnrealDocs|Data", meta=(ExposeOnSpawn="true"))
	EReactDocs_Type DataType;

	UPROPERTY(BlueprintReadWrite, EditAnywhere, Category="ReactUnrealDocs|Data", meta=(ExposeOnSpawn="true"))
	EReactDocs_ObjectType ObjectType;

	UPROPERTY(BlueprintReadWrite, EditAnywhere, Category="ReactUnrealDocs|Data", meta=(ExposeOnSpawn="true"))
	TArray<UReactDocsDataObjectNative*> Childs;

	UPROPERTY(BlueprintReadWrite, EditAnywhere, Category="ReactUnrealDocs|Data", meta=(ExposeOnSpawn="true"))
	int Level;

	UPROPERTY(BlueprintReadWrite, EditAnywhere, Category="ReactUnrealDocs|Data", meta=(ExposeOnSpawn="true"))
	class UEUW_ReactUnrealDocsGenerator* ReactUnrealDocsGenerator;

	const UReactDocsDataObjectNative* GetClassDataObject() const
	{
		switch (DataType)
		{
			case EReactDocs_Type::CLASS:
				return this;
				break;
			case EReactDocs_Type::PROPERTY:
				return Cast<UReactDocsDataObjectNative>(Cast<UReactDocsDataObjectNative>(DataObject)->DataObject);
				break;
			case EReactDocs_Type::NODE:
				return Cast<UReactDocsDataObjectNative>(Cast<UReactDocsDataObjectNative>(DataObject)->DataObject);
				break;
			case EReactDocs_Type::DATATYPE:
				break;
			case EReactDocs_Type::PROPERTYCATEGORY:
				return Cast<UReactDocsDataObjectNative>(DataObject);
				break;
			case EReactDocs_Type::NODECATEGORY:
				return Cast<UReactDocsDataObjectNative>(DataObject);
				break;
			default: ;
		}
		return nullptr;
	}
};

USTRUCT(BlueprintType)
struct REACTUNREALDOCSDATAGENERATOR_API FReactDocsPropertyData
{
	GENERATED_BODY()
	FReactDocsPropertyData()
	{
	}

	// The name of the property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Name;

	// The data type of the property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString DataType;

	// The container type of the property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString ContainerType;

	// The associated object of the property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Object;

	// The description of the property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Description;

	// Additional comments associated with the property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FString> Comments;

	// The default value of the property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString DefaultValue;

	UPROPERTY(EditAnywhere, Transient, BlueprintReadOnly)
	FString DataPath;

	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FString> Metas;

	EReactDocs_ObjectType GetMyObjectType() const
	{
		if (Metas.ContainsByPredicate([](const FString& OtherString)
		{
			return OtherString.Contains("Blueprint");
		}))
		{
			return EReactDocs_ObjectType::BLUEPRINT;
		}
		return EReactDocs_ObjectType::NATIVE;
	}

	bool operator==(const FReactDocsPropertyData& Other) const
	{
		return Name == Other.Name;
	}
};

USTRUCT(BlueprintType)
struct REACTUNREALDOCSDATAGENERATOR_API FReactDocsPropertiesForClass
{
	GENERATED_BODY()
	FReactDocsPropertiesForClass()
	{
	}

	// Name of the class.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString ClassName;

	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FReactDocsPropertyData> Properties;
};


USTRUCT(BlueprintType)
struct REACTUNREALDOCSDATAGENERATOR_API FReactDocsPropertyAndMetas
{
	GENERATED_BODY()
	FReactDocsPropertyAndMetas()
	{
	}

	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Name;

	bool operator==(const FReactDocsPropertyAndMetas& Other) const
	{
		return Name == Other.Name;
	}
};

USTRUCT(BlueprintType)
struct REACTUNREALDOCSDATAGENERATOR_API FReactDocsPropertyCategory
{
	FReactDocsPropertyCategory(): OnlyInPropertyImage(false)
	{
	}

	GENERATED_BODY()
	// The category of the properties.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Category;

	// The image associated with the category.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Image;

	// Indicates whether the property is only applicable within rendered image.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	bool OnlyInPropertyImage;

	// The list of properties within a category.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FReactDocsPropertyData> CategoryProperties;

	// // Subcategories within a class property.
	// UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FReactDocsPropertyCategory> SubCategories;

	bool operator==(const FReactDocsPropertyCategory& Other) const
	{
		return Category == Other.Category;
	}

	bool operator==(const FName InCategory) const
	{
		return Category == InCategory;
	}
};

USTRUCT(BlueprintType)
struct REACTUNREALDOCSDATAGENERATOR_API FReactDocsNodeData
{
	GENERATED_BODY()
	FReactDocsNodeData()
	{
	}

	// The name of the node.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Name;

	// Additional comments associated with the node.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FString> Comments;

	// Types of this node.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FString> FunctionTypes;

	// Inputs of this node
	UPROPERTY(BlueprintReadOnly, EditAnywhere)
	TArray<FReactDocsPropertyData> Inputs;

	// Outputs of this node
	UPROPERTY(BlueprintReadOnly, EditAnywhere)
	TArray<FReactDocsPropertyData> Outputs;

	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FString> Flags;

	EReactDocs_ObjectType GetMyObjectType() const
	{
		if (Flags.FindByPredicate([](const FString& OtherString)
		{
			return OtherString.Contains("Blueprint");
		}))
		{
			return EReactDocs_ObjectType::BLUEPRINT;
		}
		return EReactDocs_ObjectType::NATIVE;
	}

	bool operator==(const FReactDocsNodeData& Other) const
	{
		return Name == Other.Name;
	}
};


USTRUCT(BlueprintType)
struct REACTUNREALDOCSDATAGENERATOR_API FReactDocsNodeCategory
{
	GENERATED_BODY()
	FReactDocsNodeCategory()
	{
		Category = "";
	}

	// The category of the class property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Category;

	// The list of properties within a category.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FReactDocsNodeData> CategoryNodes;
};

USTRUCT(BlueprintType)
struct REACTUNREALDOCSDATAGENERATOR_API FReactDocsFunctionsForClass
{
	GENERATED_BODY()
	FReactDocsFunctionsForClass()
	{
	}

	// Name of the class.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString ClassName;

	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FReactDocsNodeCategory> Properties;
};

USTRUCT(BlueprintType)
struct REACTUNREALDOCSDATAGENERATOR_API FReactDocsCustomDataType
{
	GENERATED_BODY()
	FReactDocsCustomDataType()
	{
	}

	// The name of the datatype.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Name;

	// The description of the datatype.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Description;
	
	// The comments of the datatype.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FString> Comments;

	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FReactDocsPropertyData> Data;

	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FString> Flags;

	bool operator==(const FReactDocsCustomDataType& Other) const
	{
		return Name == Other.Name;
	}
};

USTRUCT(BlueprintType)
struct REACTUNREALDOCSDATAGENERATOR_API FReactDocsDataTypes
{
	GENERATED_BODY()
	FReactDocsDataTypes()
	{
	}

	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FReactDocsCustomDataType> Delegates;

	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FReactDocsCustomDataType> Structs;

	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FReactDocsCustomDataType> Enums;


	const FReactDocsCustomDataType* FindData(const TArray<FReactDocsCustomDataType>& InArray, FName DataName)
	{
		for (const FReactDocsCustomDataType& Element : InArray)
		{
			if (Element.Name == DataName)
			{
				return &Element;
			}
		}
		return nullptr;
	};

	void Empty()
	{
		Delegates.Empty();
		Structs.Empty();
		Structs.Empty();
	}

	const FReactDocsCustomDataType* IterateAllArraysToFindDataByName(FName DataName, EReactDocs_CustomDataType& FoundType, TArray<FReactDocsCustomDataType>& FoundArray)
	{
		TMap<EReactDocs_CustomDataType, TArray<FReactDocsCustomDataType>*> DataTypeMap = GetDatatypesAsAppendedMap();

		for (const auto& Element : DataTypeMap)
		{
			if (Element.Value)
			{
				if (const FReactDocsCustomDataType* CustomData = FindData(*Element.Value, DataName))
				{
					FoundType = Element.Key;
					FoundArray = *Element.Value;
					return CustomData;
				}
			}
		}
		return nullptr;
	}

	TMap<EReactDocs_CustomDataType, TArray<FReactDocsCustomDataType>*> GetDatatypesAsAppendedMap()
	{
		TMap<EReactDocs_CustomDataType, TArray<FReactDocsCustomDataType>*> DataTypeMap;
		DataTypeMap.Add(EReactDocs_CustomDataType::DELEGATE, &Delegates);
		DataTypeMap.Add(EReactDocs_CustomDataType::STRUCT, &Structs);
		DataTypeMap.Add(EReactDocs_CustomDataType::ENUM, &Enums);
		return DataTypeMap;
	}

	FString GetAppendedJSON()
	{
		FString JsonData;

		TMap<EReactDocs_CustomDataType, TArray<FReactDocsCustomDataType>*> DataTypeMap = GetDatatypesAsAppendedMap();
		const FReactDocsCustomDataType* CustomData = nullptr;

		for (const auto& Element : DataTypeMap)
		{
			if (Element.Value)
			{
				TArray<FString> JsonAsLines;

				switch (Element.Key)
				{
					case EReactDocs_CustomDataType::DELEGATE:
						JsonData.Append(FString("const Delegates = [\n"));

						break;
					case EReactDocs_CustomDataType::STRUCT:
						JsonData.Append(FString("const Structs = [\n"));

						break;
					case EReactDocs_CustomDataType::ENUM:
						JsonData.Append(FString("const Enums = [\n"));

						break;
					default: ;
				}

				for (auto& DataTypeData : *(Element.Value))
				{
					FString Json;
					TArray<FString> Json2;
					FJsonObjectConverter::UStructToJsonObjectString(DataTypeData, Json, 0, 0);
					Json.ParseIntoArrayLines(Json2);
					JsonAsLines.Append(Json2);
				}

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
			JsonData.Append(FString("];\n"));
		}
		return JsonData;
	}
};

USTRUCT(BlueprintType)
struct REACTUNREALDOCSDATAGENERATOR_API FReactDocsClass
{
	GENERATED_BODY()

	FReactDocsClass(): DataObject(nullptr)
	{
	}

	FReactDocsClass(FString InClassName, FString InDescription): DataObject(nullptr)
	{
		ClassName = InClassName;
		Description = InDescription;
	}

	// Name of the class.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString ClassName;

	// The description of the class.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Description;

	// An array of class properties data.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FReactDocsPropertyCategory> ClassPropertyCategories;

	// An array of class nodes data.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	TArray<FReactDocsNodeCategory> ClassNodeCategories;

	UPROPERTY(BlueprintReadOnly, Transient)
	UObject* DataObject;

	void AddPropertyCategory(const FReactDocsPropertyCategory& NewData)
	{
		ClassPropertyCategories.Add(NewData);
	}

	void AddNodeCategory(const FReactDocsNodeCategory& NewData)
	{
		ClassNodeCategories.Add(NewData);
	}


	const FReactDocsPropertyData* FindPropertyData(const UReactDocsDataObjectNative* InDataObject)
	{
		if (!InDataObject)
		{
			return nullptr;
		}

		const FString CategoryName = Cast<UReactDocsDataObjectNative>(InDataObject->DataObject)->DataName.ToString();
		const FString DataName = InDataObject->DataName.ToString();
		for (const auto& Category : ClassPropertyCategories)
		{
			if (Category.Category == CategoryName)
			{
				for (const auto& Property : Category.CategoryProperties)
				{
					if (Property.Name == DataName)
					{
						return &Property;
					}
				}
			}
		}

		return nullptr;
	}

	const FReactDocsNodeData* FindNodeData(const UReactDocsDataObjectNative* InDataObject)
	{
		if (!InDataObject)
		{
			return nullptr;
		}

		const FString CategoryName = Cast<UReactDocsDataObjectNative>(InDataObject->DataObject)->DataName.ToString();
		const FString DataName = InDataObject->DataName.ToString();
		for (const auto& Category : ClassNodeCategories)
		{
			if (Category.Category == CategoryName)
			{
				for (const auto& Node : Category.CategoryNodes)
				{
					if (Node.Name == DataName)
					{
						return &Node;
					}
				}
			}
		}

		return nullptr;
	}

	const FReactDocsNodeCategory* FindNodeCategoryData(const UReactDocsDataObjectNative* InDataObject)
	{
		if (!InDataObject)
		{
			return nullptr;
		}

		const FString DataName = InDataObject->DataName.ToString();
		for (const auto& Category : ClassNodeCategories)
		{
			if (Category.Category == DataName)
			{
				return &Category;
			}
		}

		return nullptr;
	}

	const FReactDocsPropertyCategory* FindPropertyCategoryData(const UReactDocsDataObjectNative* InDataObject)
	{
		if (!InDataObject)
		{
			return nullptr;
		}

		const FString DataName = InDataObject->DataName.ToString();
		for (const auto& Category : ClassPropertyCategories)
		{
			if (Category.Category == DataName)
			{
				return &Category;
			}
		}

		return nullptr;
	}
};

USTRUCT(BlueprintType)
struct REACTUNREALDOCSDATAGENERATOR_API FReactDocsJsonLine
{
	GENERATED_BODY()

	FReactDocsJsonLine(): LineType()
	{
	}

	FReactDocsJsonLine(FString InClass, FString InCategory, FString InJsonLine, EReactDocs_JSONLineType InType)
	{
		Class = InClass;
		Category = InCategory;
		JsonLine = InJsonLine;
		LineType = InType;
	}

	UPROPERTY(BlueprintReadOnly)
	FString Class;

	UPROPERTY(BlueprintReadOnly)
	FString Category;

	UPROPERTY(BlueprintReadOnly)
	FString JsonLine;

	UPROPERTY(BlueprintReadOnly)
	EReactDocs_JSONLineType LineType;
};

USTRUCT(BlueprintType)
struct REACTUNREALDOCSDATAGENERATOR_API FReactDocsPropertyInfoData
{
	GENERATED_BODY()
	FReactDocsPropertyInfoData()
	{
	}

	// information about a property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString InfoName;

	// The description of the property information.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Description;

	// The type of information related to the property.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString InfoType;

	// The associated object of the property information.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString Object;

	// relevant properties associated with the property information.
	UPROPERTY(BlueprintReadWrite, EditAnywhere)
	FString RelevantProperties;
};

FORCEINLINE uint32 GetTypeHash(const FReactDocsPropertyCategory& ReactDocsClassPropertyCategory)
{
	const uint32 Hash = FCrc::MemCrc32(&ReactDocsClassPropertyCategory, sizeof FReactDocsPropertyCategory);
	return Hash;
}
