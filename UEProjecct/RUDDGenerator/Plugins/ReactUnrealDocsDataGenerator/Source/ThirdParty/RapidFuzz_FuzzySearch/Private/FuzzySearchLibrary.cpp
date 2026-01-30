// Fill out your copyright notice in the Description page of Project Settings.


#define RAPIDFUZZ_EXCLUDE_SIMD
#include "FuzzySearchLibrary.h"
#include <ThirdParty/RapidFuzz/fuzz.hpp>

// Helper struct to pair a string with its similarity score
struct FStringWithScore
{
    FString String;
    double Score;

    FStringWithScore(const FString& InString, double InScore)
        : String(InString), Score(InScore)
    {
    }

    // Comparator for sorting
    bool operator<(const FStringWithScore& Other) const
    {
        return Score > Other.Score; // Sort in descending order of score
    }
};

TArray<FString> UFuzzySearchLibrary::SortStringsBySimilarity(const TArray<FString>& StringArray, const FString& Query)
{
    // This vector will hold pairs of FString and their corresponding similarity scores
    std::vector<std::pair<FString, double>> StringsWithScores;

    // Calculate similarity scores and fill the vector
    for (const FString& String : StringArray)
    {
    std::string src(TCHAR_TO_UTF8(*Query));
    std::string tgt(TCHAR_TO_UTF8(*String));
    
    // Use RapidFuzz to calculate the similarity score
    double Score = static_cast<double>(rapidfuzz::fuzz::ratio(src, tgt));

    // Now emplace_back will receive a pair of FString and double as intended
    StringsWithScores.emplace_back(String, Score);
    }

    // Sort the vector by the similarity scores
    std::sort(StringsWithScores.begin(), StringsWithScores.end(),
              [](const std::pair<FString, double>& A, const std::pair<FString, double>& B) {
                  return A.second > B.second; // Sort in descending order of score
              });

    // Create a new TArray to hold the sorted strings
    TArray<FString> SortedArray;
    SortedArray.Reserve(StringsWithScores.size());

    // Fill the TArray with sorted strings
    for (const auto& Pair : StringsWithScores)
    {
        SortedArray.Add(Pair.first);
    }

    // Return the sorted TArray
    return SortedArray;
}

TArray<FString> UFuzzySearchLibrary::SortStringsByPartialSimilarity(const TArray<FString>& StringArray, const FString& Query)
{
    // This vector will hold pairs of FString and their corresponding similarity scores
    std::vector<std::pair<FString, double>> StringsWithScores;

    // Convert FString query to std::string
    std::string QueryStd(TCHAR_TO_UTF8(*Query));

    // Calculate partial similarity scores for each string in the array
    for (const FString& String : StringArray)
    {
        std::string StringStd(TCHAR_TO_UTF8(*String));
        double Score = static_cast<double>(rapidfuzz::fuzz::partial_ratio(QueryStd, StringStd));

        // Store the string along with its similarity score
        StringsWithScores.emplace_back(String, Score);
    }

    // Sort the vector by the similarity scores in descending order
    std::sort(StringsWithScores.begin(), StringsWithScores.end(),
              [](const std::pair<FString, double>& A, const std::pair<FString, double>& B) {
                  return A.second > B.second;
              });

    // Create a new TArray to hold the sorted strings
    TArray<FString> SortedArray;
    SortedArray.Reserve(StringsWithScores.size());

    // Fill the TArray with sorted strings
    for (const auto& Pair : StringsWithScores)
    {
        SortedArray.Add(Pair.first);
    }

    // Return the sorted TArray
    return SortedArray;
}

TArray<FString> UFuzzySearchLibrary::SortStringsByPartialTokenSetSimilarity(const TArray<FString>& StringArray, const FString& Query)
{
    // Vector to hold pairs of FString and their corresponding similarity scores
    std::vector<std::pair<FString, double>> StringsWithScores;

    // Convert FString query to std::string for RapidFuzz compatibility
    std::string QueryStd(TCHAR_TO_UTF8(*Query));

    // Calculate partial token set similarity scores for each string
    for (const FString& String : StringArray)
    {
        std::string StringStd(TCHAR_TO_UTF8(*String));
        double Score = static_cast<double>(rapidfuzz::fuzz::partial_token_set_ratio(QueryStd, StringStd));

        // Store each string along with its similarity score
        StringsWithScores.emplace_back(String, Score);
    }

    // Sort the strings by their similarity scores in descending order
    std::sort(StringsWithScores.begin(), StringsWithScores.end(),
              [](const std::pair<FString, double>& A, const std::pair<FString, double>& B) {
                  return A.second > B.second;
              });

    // Create a TArray to return the sorted strings
    TArray<FString> SortedArray;
    SortedArray.Reserve(StringsWithScores.size());

    // Fill the TArray with the sorted strings
    for (const auto& Pair : StringsWithScores)
    {
        SortedArray.Add(Pair.first);
    }

    // Return the TArray of sorted strings
    return SortedArray;
}

float UFuzzySearchLibrary::RapidFuzzRatio(const FString& Source, const FString& Target)
{
    std::string src(TCHAR_TO_UTF8(*Source));
    std::string tgt(TCHAR_TO_UTF8(*Target));
    return static_cast<float>(rapidfuzz::fuzz::ratio(src, tgt));
}

float UFuzzySearchLibrary::RapidFuzzPartialRatio(const FString& Source, const FString& Target)
{
    std::string src(TCHAR_TO_UTF8(*Source));
    std::string tgt(TCHAR_TO_UTF8(*Target));
    return static_cast<float>(rapidfuzz::fuzz::partial_ratio(src, tgt));
}

float UFuzzySearchLibrary::RapidFuzzTokenSortRatio(const FString& Source, const FString& Target)
{
    std::string src(TCHAR_TO_UTF8(*Source));
    std::string tgt(TCHAR_TO_UTF8(*Target));
    return static_cast<float>(rapidfuzz::fuzz::token_sort_ratio(src, tgt));
}

float UFuzzySearchLibrary::RapidFuzzTokenSetRatio(const FString& Source, const FString& Target)
{
    std::string src(TCHAR_TO_UTF8(*Source));
    std::string tgt(TCHAR_TO_UTF8(*Target));
    return static_cast<float>(rapidfuzz::fuzz::token_set_ratio(src, tgt));
}

float UFuzzySearchLibrary::RapidFuzzPartialTokenSortRatio(const FString& Source, const FString& Target)
{
    std::string src(TCHAR_TO_UTF8(*Source));
    std::string tgt(TCHAR_TO_UTF8(*Target));
    return static_cast<float>(rapidfuzz::fuzz::partial_token_sort_ratio(src, tgt));
}

float UFuzzySearchLibrary::RapidFuzzPartialTokenSetRatio(const FString& Source, const FString& Target)
{
    std::string src(TCHAR_TO_UTF8(*Source));
    std::string tgt(TCHAR_TO_UTF8(*Target));
    return static_cast<float>(rapidfuzz::fuzz::partial_token_set_ratio(src, tgt));
}

float UFuzzySearchLibrary::RapidFuzzWRatio(const FString& Source, const FString& Target)
{
    std::string src(TCHAR_TO_UTF8(*Source));
    std::string tgt(TCHAR_TO_UTF8(*Target));
    return static_cast<float>(rapidfuzz::fuzz::WRatio(src, tgt));
}

float UFuzzySearchLibrary::RapidFuzzQRatio(const FString& Source, const FString& Target)
{
    std::string src(TCHAR_TO_UTF8(*Source));
    std::string tgt(TCHAR_TO_UTF8(*Target));
    return static_cast<float>(rapidfuzz::fuzz::QRatio(src, tgt));
}
