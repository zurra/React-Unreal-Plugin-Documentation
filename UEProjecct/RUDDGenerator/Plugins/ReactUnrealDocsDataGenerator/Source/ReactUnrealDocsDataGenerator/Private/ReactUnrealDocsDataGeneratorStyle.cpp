// Copyright Epic Games, Inc. All Rights Reserved.

#include "ReactUnrealDocsDataGeneratorStyle.h"
#include "ReactUnrealDocsDataGenerator.h"
#include "Framework/Application/SlateApplication.h"
#include "Styling/SlateStyleRegistry.h"
#include "Slate/SlateGameResources.h"
#include "Interfaces/IPluginManager.h"
#include "Styling/SlateStyleMacros.h"

#define RootToContentDir Style->RootToContentDir

TSharedPtr<FSlateStyleSet> FReactUnrealDocsDataGeneratorStyle::StyleInstance = nullptr;

void FReactUnrealDocsDataGeneratorStyle::Initialize()
{
	if (!StyleInstance.IsValid())
	{
		StyleInstance = Create();
		FSlateStyleRegistry::RegisterSlateStyle(*StyleInstance);
	}
}

void FReactUnrealDocsDataGeneratorStyle::Shutdown()
{
	FSlateStyleRegistry::UnRegisterSlateStyle(*StyleInstance);
	ensure(StyleInstance.IsUnique());
	StyleInstance.Reset();
}

FName FReactUnrealDocsDataGeneratorStyle::GetStyleSetName()
{
	static FName StyleSetName(TEXT("ReactUnrealDocsDataGeneratorStyle"));
	return StyleSetName;
}


const FVector2D Icon16x16(16.0f, 16.0f);
const FVector2D Icon20x20(20.0f, 20.0f);

TSharedRef< FSlateStyleSet > FReactUnrealDocsDataGeneratorStyle::Create()
{
	TSharedRef< FSlateStyleSet > Style = MakeShareable(new FSlateStyleSet("ReactUnrealDocsDataGeneratorStyle"));
	Style->SetContentRoot(IPluginManager::Get().FindPlugin("ReactUnrealDocsDataGenerator")->GetBaseDir() / TEXT("Resources"));

	Style->Set("ReactUnrealDocsDataGenerator.PluginAction", new IMAGE_BRUSH_SVG(TEXT("PlaceholderButtonIcon"), Icon20x20));
	return Style;
}

void FReactUnrealDocsDataGeneratorStyle::ReloadTextures()
{
	if (FSlateApplication::IsInitialized())
	{
		FSlateApplication::Get().GetRenderer()->ReloadTextureResources();
	}
}

const ISlateStyle& FReactUnrealDocsDataGeneratorStyle::Get()
{
	return *StyleInstance;
}
