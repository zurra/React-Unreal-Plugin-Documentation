// Copyright Epic Games, Inc. All Rights Reserved.

#include "ReactUnrealDocsDataGeneratorCommands.h"

#define LOCTEXT_NAMESPACE "FReactUnrealDocsDataGeneratorModule"

void FReactUnrealDocsDataGeneratorCommands::RegisterCommands()
{
	UI_COMMAND(PluginAction, "ReactUnrealDocsDataGenerator", "Execute ReactUnrealDocsDataGenerator action", EUserInterfaceActionType::Button, FInputChord());
}

#undef LOCTEXT_NAMESPACE
