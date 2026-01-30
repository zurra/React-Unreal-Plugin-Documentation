// Copyright Clusterfact Games. All Rights Reserved.

#pragma once

#include "CoreMinimal.h"
#include "ReactUnrealDocsGeneratorCommon.h"
#include "Engine/DataAsset.h"
#include "UReactUnrealDocsDA.generated.h"

class UEUW_ReactUnrealDocsGenerator;
DECLARE_DELEGATE(FOnCurrentStringChanged);
UCLASS()
class REACTUNREALDOCSDATAGENERATOR_API UReactUnrealDocsDA : public UDataAsset
{
	GENERATED_BODY()

	UReactUnrealDocsDA(const FObjectInitializer& OI);

	friend UEUW_ReactUnrealDocsGenerator;

public:

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="ReactUnrealDocs|Data")
	UObject* ClassToIterate;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="ReactUnrealDocs|Data")
	TArray<UObject*> ClassesToIterate;
	
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="ReactUnrealDocs|Data")
	TMap<FName, FReactDocsClass> ClassDataMap;
	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="ReactUnrealDocs|Data")
	TMap<FName, FReactDocsNodeData> NodeDataMap;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="ReactUnrealDocs|Data")
	TMap<FName, FReactDocsPropertiesForClass> PropertyDataMap;

	UPROPERTY(EditAnywhere, BlueprintReadWrite, Category="ReactUnrealDocs|Data")
	FReactDocsDataTypes DatatypeData;

	UPROPERTY(BlueprintReadOnly, Category="ReactUnrealDocs|Data")
	FString ClassesJson;

	UPROPERTY(BlueprintReadOnly, Category="ReactUnrealDocs|Data")
	FString PropertiesJson;

	UPROPERTY(BlueprintReadOnly, Category="ReactUnrealDocs|Data")
	FString NodesJson;

	UPROPERTY(BlueprintReadOnly, Category="ReactUnrealDocs|Data")
	FString DataTypesJson;

	UPROPERTY(BlueprintReadWrite, Category="ReactUnrealDocs|Data",EditAnywhere)
	TArray<TSubclassOf<UObject>> ClassesToIgnoreWhenGeneratingData;
	
	UPROPERTY(BlueprintReadWrite, Category="ReactUnrealDocs|Data",EditAnywhere)
	TArray<FString> FunctionsToIgnoreIfContainsString;

	UPROPERTY(BlueprintReadWrite, Category="ReactUnrealDocs|Data",EditAnywhere)
	TArray<FString> PropertiesToIgnoreIfContainsString;

	UFUNCTION(BlueprintCallable)
	const FReactDocsPropertyData& FindPropertyByData(const UReactDocsDataObjectNative* InDataObject,bool& ValidData);

	UFUNCTION(BlueprintCallable)
	const FReactDocsNodeData& FindNodeByData(const UReactDocsDataObjectNative* InDataObject,bool& ValidData);

	UFUNCTION(BlueprintCallable)
	EReactDocs_ObjectType GetTypeOfObject(const UReactDocsDataObjectNative* InDataObject);

	template<typename StructType>
	void SetCurrentJSONString(const FString& NewString,const StructType* InStruct);

	void SetCurrentJSONString(const FString& NewString);

	FOnCurrentStringChanged OnCurrentStringChanged;
	
	bool AddNewDataToClassCategory(FName Category, FName PropertyName, EReactDocs_Type Type);

	void AddNewClass(const FReactDocsClass& NewData);
	void AddNewNode(const FReactDocsNodeData& NewData);
	void AddNewProperty(const FName ClassName, const FReactDocsPropertyData& NewData);
	void AddNewCustomData(const FReactDocsCustomDataType& NewData, EReactDocs_CustomDataType DataType);

	bool ShowData(const UReactDocsDataObjectNative& DataObject);
	bool ShowDatas(const TArray<UReactDocsDataObjectNative*> DataObjects);
	
	void DeleteData(const UReactDocsDataObjectNative& DataObject);
	void DeleteAll();
	
	void GenerateClassesJson();
	void GeneratePropertiesJson();
	void GenerateNodesJson();
	void GenerateDataTypesJson();

	UPROPERTY(BlueprintReadOnly, Category="ReactUnrealDocs|Data")
	TArray<FString> FunctionTypes = {"pure","nonpure", "latent"};

private:
	FString CurrentJSONString;

};
