// Fill out your copyright notice in the Description page of Project Settings.

#pragma once

#include "CoreMinimal.h"
#include "Kismet/BlueprintFunctionLibrary.h"
#include "FuzzySearchLibrary.generated.h"

/**
 * 
 */
UCLASS()
class RAPIDFUZZ_FUZZYSEARCH_API UFuzzySearchLibrary : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()
	
		public:
    UFUNCTION(BlueprintCallable, Category = "RapidFuzz|StringSorting", meta = (ToolTip = "Sorts strings by their direct similarity to a query, placing the closest matches first. Suitable for straightforward similarity-based ordering."))
        static TArray<FString> SortStringsBySimilarity(const TArray<FString>& StringArray, const FString& Query);

    UFUNCTION(BlueprintCallable, Category = "RapidFuzz|StringSorting", meta = (ToolTip = "Sorts strings by resemblance to a reference text, prioritizing those with most matching content. Ideal for highlighting partial matches in search results or filters."))
        static TArray<FString> SortStringsByPartialSimilarity(const TArray<FString>& StringArray, const FString& Query);

    UFUNCTION(BlueprintCallable, Category = "RapidFuzz|StringSorting", meta = (ToolTip = "Sorts strings to prioritize those most similar to a query, effectively handling extra or shuffled words. Great for flexible 'best fit' searches."))
        static TArray<FString> SortStringsByPartialTokenSetSimilarity(const TArray<FString>& StringArray, const FString& Query);

    UFUNCTION(BlueprintCallable, Category = "RapidFuzz|StringComparison", meta = (ToolTip = "Computes how similar two strings are, returning a score from 0 to 100. Perfect for exact match comparisons."))
        static float RapidFuzzRatio(const FString& Source, const FString& Target);

    UFUNCTION(BlueprintCallable, Category = "RapidFuzz|StringComparison", meta = (ToolTip = "Determines the similarity of the most similar substring, useful for matching shorter phrases within longer texts."))
        static float RapidFuzzPartialRatio(const FString& Source, const FString& Target);

    UFUNCTION(BlueprintCallable, Category = "RapidFuzz|StringComparison", meta = (ToolTip = "Measures similarity, ignoring token order. Ideal for sentences with mixed-up words."))
        static float RapidFuzzTokenSortRatio(const FString& Source, const FString& Target);

    UFUNCTION(BlueprintCallable, Category = "RapidFuzz|StringComparison", meta = (ToolTip = "Assesses similarity considering token duplicity, best for texts with repeated words."))
        static float RapidFuzzTokenSetRatio(const FString& Source, const FString& Target);

    UFUNCTION(BlueprintCallable, Category = "RapidFuzz|StringComparison", meta = (ToolTip = "Evaluates partial match similarity, disregarding token order. For flexible matching with mixed words."))
        static float RapidFuzzPartialTokenSortRatio(const FString& Source, const FString& Target);

    UFUNCTION(BlueprintCallable, Category = "RapidFuzz|StringComparison", meta = (ToolTip = "Calculates similarity for partial matches with token duplicity, optimizing for texts with repetitions."))
        static float RapidFuzzPartialTokenSetRatio(const FString& Source, const FString& Target);

    UFUNCTION(BlueprintCallable, Category = "RapidFuzz|StringComparison", meta = (ToolTip = "Provides a weighted similarity score, combining various strategies for a comprehensive comparison."))
        static float RapidFuzzWRatio(const FString& Source, const FString& Target);

    UFUNCTION(BlueprintCallable, Category = "RapidFuzz|StringComparison", meta = (ToolTip = "Offers a quick similarity assessment, streamlined for performance without compromising accuracy."))
        static float RapidFuzzQRatio(const FString& Source, const FString& Target);

};
