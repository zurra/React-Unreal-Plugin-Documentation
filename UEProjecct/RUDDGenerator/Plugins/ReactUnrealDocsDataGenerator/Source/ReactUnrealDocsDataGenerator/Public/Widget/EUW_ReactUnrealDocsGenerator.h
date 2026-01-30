// Copyright Clusterfact Games. All Rights Reserved.

#pragma once

#include "CoreMinimal.h"
#include "EditorUtilityWidget.h"
#include "Data/UReactUnrealDocsDA.h"
#include "EUW_ReactUnrealDocsGenerator.generated.h"

UCLASS()
class REACTUNREALDOCSDATAGENERATOR_API UEUW_ReactUnrealDocsGenerator : public UEditorUtilityWidget
{
	GENERATED_BODY()

public:
	UEUW_ReactUnrealDocsGenerator();

	virtual void NativeConstruct() override;

	UPROPERTY(EditDefaultsOnly, BlueprintReadOnly, Category="ReactUnrealDocs|Data")
	UReactUnrealDocsDA* ReactUnrealDocsDataAsset;

	UFUNCTION(BlueprintCallable, Category="ReactUnrealDocs|Data")
	FString CheckClassPropsAndFunctions(UObject* InClass, FString DebugFieldToFind);
	
	UPROPERTY(BlueprintReadOnly, Category="ReactUnrealDocs|Data")
	TArray<UReactDocsDataObjectNative*> PendingDataChanges;

	UPROPERTY(BlueprintReadOnly, Category="ReactUnrealDocs|Data")
	TArray<UReactDocsDataObjectNative*> SoloDatas;
	
	void NativeCurrentStringChanged();

	UFUNCTION(BlueprintImplementableEvent)
	void OnCurrentStringChanged();

	UFUNCTION(BlueprintCallable, Category="ReactUnrealDocs|Data")
	void ShowFullJsonOfType(EReactDocs_Type InType);

	UFUNCTION(BlueprintCallable, Category="ReactUnrealDocs|Data")
	FString ConvertJSONToRichJson(const FString& JSONToConvert);

	UFUNCTION(BlueprintPure, Category="ReactUnrealDocs|Data")
	FString GetCurrentJSONString() { return ReactUnrealDocsDataAsset->CurrentJSONString; }

	UFUNCTION(BlueprintCallable, Category="ReactUnrealDocs|Data")
	bool DeleteData(UReactDocsDataObjectNative* DataObject, bool ShowPrompt);

	UFUNCTION(BlueprintCallable, Category="ReactUnrealDocs|Data")
	bool AddNewDataToClass(FName Category, FName DataName,EReactDocs_Type DataType);
	UFUNCTION(BlueprintCallable)
	void DeleteAll();

	UFUNCTION(BlueprintCallable, Category="ReactUnrealDocs|Data")
	bool ShowDatas();
	
	UFUNCTION(BlueprintCallable, Category="ReactUnrealDocs|Data")
	bool ShowData(UReactDocsDataObjectNative* DataObject);

	UFUNCTION(BlueprintCallable, Category="ReactUnrealDocs|File")
	FString WriteDataToDisk() const;

	UFUNCTION(BlueprintCallable, Category="ReactUnrealDocs|File")
	void OpenSavePathInExplorer();

	FString GeneratePropertiesForClass(FName ClassName);

	UPROPERTY(BlueprintReadOnly, Category="ReactUnrealDocs|Data")
	TArray<FReactDocsJsonLine> RichJSONs;

	UPROPERTY(BlueprintReadOnly, Category="ReactUnrealDocs|Data")
	TArray<FString> RichJSONLines;

	template <class T>
	TArray<FReactDocsPropertyData> GeneratePropertyDatasFromObject(T* Object); 
	
	void GeneratePropertyTooltipFromFunction(FReactDocsPropertyData& InProperty, const UFunction* Function, bool IsReturnProp);
	FString GetDefaultTooltipForFunction(const UFunction* Function);

};
