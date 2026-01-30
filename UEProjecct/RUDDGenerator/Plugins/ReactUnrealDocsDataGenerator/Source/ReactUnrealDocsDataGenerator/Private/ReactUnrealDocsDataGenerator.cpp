// Copyright Epic Games, Inc. All Rights Reserved.

#include "ReactUnrealDocsDataGenerator.h"

#include "EditorUtilitySubsystem.h"
#include "EditorUtilityWidgetBlueprint.h"
#include "IBlutilityModule.h"
#include "ReactUnrealDocsDataGeneratorStyle.h"
#include "ReactUnrealDocsDataGeneratorCommands.h"
#include "Misc/MessageDialog.h"
#include "ToolMenus.h"

static const FName ReactUnrealDocsDataGeneratorTabName("ReactUnrealDocsDataGenerator");

#define LOCTEXT_NAMESPACE "FReactUnrealDocsDataGeneratorModule"

void FReactUnrealDocsDataGeneratorModule::StartupModule()
{
	// This code will execute after your module is loaded into memory; the exact timing is specified in the .uplugin file per-module

	FReactUnrealDocsDataGeneratorStyle::Initialize();
	FReactUnrealDocsDataGeneratorStyle::ReloadTextures();

	FReactUnrealDocsDataGeneratorCommands::Register();

	PluginCommands = MakeShareable(new FUICommandList);

	PluginCommands->MapAction(
		FReactUnrealDocsDataGeneratorCommands::Get().PluginAction,
		FExecuteAction::CreateRaw(this, &FReactUnrealDocsDataGeneratorModule::PluginButtonClicked),
		FCanExecuteAction());

	UToolMenus::RegisterStartupCallback(FSimpleMulticastDelegate::FDelegate::CreateRaw(this, &FReactUnrealDocsDataGeneratorModule::RegisterMenus));
}

void FReactUnrealDocsDataGeneratorModule::ShutdownModule()
{
	// This function may be called during shutdown to clean up your module.  For modules that support dynamic reloading,
	// we call this function before unloading the module.

	UToolMenus::UnRegisterStartupCallback(this);

	UToolMenus::UnregisterOwner(this);

	FReactUnrealDocsDataGeneratorStyle::Shutdown();

	FReactUnrealDocsDataGeneratorCommands::Unregister();
}

void FReactUnrealDocsDataGeneratorModule::PluginButtonClicked()
{
	// // Put your "OnButtonClicked" stuff here
	// FText DialogText = FText::Format(
	// 	LOCTEXT("PluginButtonDialogText", "Add code to {0} in {1} to override this button's actions"),
	// 	FText::FromString(TEXT("FReactUnrealDocsDataGeneratorModule::PluginButtonClicked()")),
	// 	FText::FromString(TEXT("ReactUnrealDocsDataGenerator.cpp"))
	// );
	// FMessageDialog::Open(EAppMsgType::Ok,
	// DialogText);


	UBlueprint* UMGBP = LoadObject<UBlueprint>(nullptr, L"/Script/Blutility.EditorUtilityWidgetBlueprint'/ReactUnrealDocsDataGenerator/Widget/BEUW_ReactUnrealDocsGenerator.BEUW_ReactUnrealDocsGenerator'");

	GeneratorWidget = Cast<UEditorUtilityWidgetBlueprint>(UMGBP);

	if (GeneratorWidget)
	{
		UEditorUtilitySubsystem* EditorUtilitySubsystem = GEditor->GetEditorSubsystem<UEditorUtilitySubsystem>();
		EditorWidget = EditorUtilitySubsystem->SpawnAndRegisterTab(Cast<UEditorUtilityWidgetBlueprint>(GeneratorWidget));
	}
}

void FReactUnrealDocsDataGeneratorModule::RegisterMenus()
{
	// Owner will be used for cleanup in call to UToolMenus::UnregisterOwner
	FToolMenuOwnerScoped OwnerScoped(this);

	{
		UToolMenu* Menu = UToolMenus::Get()->ExtendMenu("LevelEditor.MainMenu.Window");
		{
			FToolMenuSection& Section = Menu->FindOrAddSection("WindowLayout");
			Section.AddMenuEntryWithCommandList(FReactUnrealDocsDataGeneratorCommands::Get().PluginAction, PluginCommands);
		}
	}

	{
		UToolMenu* ToolbarMenu = UToolMenus::Get()->ExtendMenu("LevelEditor.LevelEditorToolBar.PlayToolBar");
		{
			FToolMenuSection& Section = ToolbarMenu->FindOrAddSection("PluginTools");
			{
				FToolMenuEntry& Entry = Section.AddEntry(FToolMenuEntry::InitToolBarButton(FReactUnrealDocsDataGeneratorCommands::Get().PluginAction));
				Entry.SetCommandList(PluginCommands);
			}
		}
	}
}

#undef LOCTEXT_NAMESPACE

IMPLEMENT_MODULE(FReactUnrealDocsDataGeneratorModule, ReactUnrealDocsDataGenerator)
