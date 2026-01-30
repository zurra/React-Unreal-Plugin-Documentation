// Copyright Epic Games, Inc. All Rights Reserved.

#pragma once

#include "CoreMinimal.h"
#include "Framework/Commands/Commands.h"
#include "ReactUnrealDocsDataGeneratorStyle.h"

class FReactUnrealDocsDataGeneratorCommands : public TCommands<FReactUnrealDocsDataGeneratorCommands>
{
public:

	FReactUnrealDocsDataGeneratorCommands()
		: TCommands<FReactUnrealDocsDataGeneratorCommands>(TEXT("ReactUnrealDocsDataGenerator"), NSLOCTEXT("Contexts", "ReactUnrealDocsDataGenerator", "ReactUnrealDocsDataGenerator Plugin"), NAME_None, FReactUnrealDocsDataGeneratorStyle::GetStyleSetName())
	{
	}

	// TCommands<> interface
	virtual void RegisterCommands() override;

public:
	TSharedPtr< FUICommandInfo > PluginAction;
};
