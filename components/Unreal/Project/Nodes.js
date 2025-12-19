const Nodes = [
{
	"name": "GetTraceTargetIndexBySocketName",
	"comments": [
		"Get Trace Target Index by Socket Name",
		" Target is LXRDetection Component"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "SocketName",
			"dataType": "FName",
			"containerType": "single",
			"object": "FName",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "int",
			"containerType": "single",
			"object": "int",
			"description": "",
			"comments": [
				"Get Trace Target Index by Socket Name"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Public",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "GetSocketNameByTraceTargetIndex",
	"comments": [
		"Get Socket Name by Trace Target Index",
		" Target is LXRDetection Component"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "TraceTargetIndex",
			"dataType": "int",
			"containerType": "single",
			"object": "int",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "FName",
			"containerType": "single",
			"object": "FName",
			"description": "",
			"comments": [
				"Get Socket Name by Trace Target Index"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Public",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "GetRelevantTraceTypeTargets",
	"comments": [
		"Get relevant trace type targets of this detection component.",
		" Target is LXRDetection Component"
	],
	"functionTypes": [],
	"inputs": [],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "TArray",
			"object": "FVector",
			"description": "Relevant Trace Type Targets",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Public",
		"BlueprintCallable",
		"BlueprintPure",
		"Const"
	]
},
{
	"name": "GetPassedLights",
	"comments": [
		"Get all lights which has passed detection test.",
		" Target is LXRDetection Component"
	],
	"functionTypes": [],
	"inputs": [],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "class",
			"containerType": "TArray",
			"object": "AActor*",
			"description": "Passed lights as Array of Actors",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Public",
		"BlueprintCallable",
		"BlueprintPure",
		"Const"
	]
},
{
	"name": "GetPassedLightComponents",
	"comments": [
		"Get all light components of a light which has passed detection test.",
		"If LightSourceOwner is not in passed list return empty array",
		" Target is LXRDetection Component"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "LightSourceOwner",
			"dataType": "class",
			"containerType": "single",
			"object": "AActor*",
			"description": "Passed light actor to get components from.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "class",
			"containerType": "TArray",
			"object": "ULightComponent*",
			"description": "Components of passed light.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Public",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "GetIlluminatedTargets",
	"comments": [
		"List of all illuminated targets",
		" Target is LXRDetection Component"
	],
	"functionTypes": [],
	"inputs": [],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "int:struct",
			"containerType": "TMap",
			"object": "int:FLXR",
			"description": "",
			"comments": [
				"List of all illuminated targets"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Public",
		"BlueprintCallable"
	]
},
{
	"name": "IsLightComponentEnabled",
	"comments": [
		"IF owner does not implement ILightSource::IsLightComponentEnabled, then use this function to determine if light component is enabled.",
		" Target is LXRSource Component"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "LightComponent",
			"dataType": "class",
			"containerType": "single",
			"object": "ULightComponent*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [
				"IF owner does not implement ILightSource::IsLightComponentEnabled, then use this function to determine if light component is enabled."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Public",
		"BlueprintCallable",
		"BlueprintPure",
		"Const"
	]
},
{
	"name": "IsEnabled",
	"comments": [
		"IF owner does not implement ILightSource::IsEnabled, then use this function to determine if light source is enabled.",
		" Target is LXRSource Component"
	],
	"functionTypes": [],
	"inputs": [],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [
				"IF owner does not implement ILightSource::IsEnabled, then use this function to determine if light source is enabled."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Public",
		"BlueprintCallable",
		"BlueprintPure",
		"Const"
	]
},
{
	"name": "GetLightState",
	"comments": [
		"Get Light State",
		" Target is LXRSource Component"
	],
	"functionTypes": [],
	"inputs": [],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "enum",
			"containerType": "single",
			"object": "ELightState",
			"description": "",
			"comments": [
				"Get Light State"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Public",
		"BlueprintCallable",
		"BlueprintPure",
		"Const"
	]
},
{
	"name": "GetLightComponentState",
	"comments": [
		"Get Light Component State",
		" Target is LXRSource Component"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InComponent",
			"dataType": "class",
			"containerType": "single",
			"object": "ULightComponent*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "enum",
			"containerType": "single",
			"object": "ELightState",
			"description": "",
			"comments": [
				"Get Light Component State"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Public",
		"BlueprintCallable",
		"BlueprintPure",
		"Const"
	]
},
{
	"name": "GetIsLightLodEnabled",
	"comments": [
		"Get is light lod system enabled.",
		" Target is LXRSource Component"
	],
	"functionTypes": [],
	"inputs": [],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "enum",
			"containerType": "single",
			"object": "ELightState",
			"description": "",
			"comments": [
				"Get is light lod system enabled."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Native",
		"Event",
		"Public",
		"BlueprintCallable",
		"BlueprintEvent"
	]
},
{
	"name": "GetIgnoreVisibilityActors",
	"comments": [
		"Get actors to ignore when checking visibility.",
		" Target is LXRSource Component"
	],
	"functionTypes": [],
	"inputs": [],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "class",
			"containerType": "TArray",
			"object": "AActor*",
			"description": "",
			"comments": [
				"Get actors to ignore when checking visibility."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Native",
		"Event",
		"Public",
		"BlueprintCallable",
		"BlueprintEvent"
	]
},
{
	"name": "GetCombinedColorsByComponents",
	"comments": [
		"Get Combined Colors by Components",
		" Target is LXRSource Component"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "LightComponents",
			"dataType": "class",
			"containerType": "TArray",
			"object": "ULightComponent*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [
				"Get Combined Colors by Components"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "GetCombinedColorsByComponentIndices",
	"comments": [
		"Get Combined Colors by Component Indices",
		" Target is LXRSource Component"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "Indices",
			"dataType": "int",
			"containerType": "TArray",
			"object": "int",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [
				"Get Combined Colors by Component Indices"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "GetCombinedColors",
	"comments": [
		"Get Combined Colors",
		" Target is LXRSource Component"
	],
	"functionTypes": [],
	"inputs": [],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [
				"Get Combined Colors"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Public",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "GetTopTarget",
	"comments": [
		"Get Top Target",
		" Target is LXRFlux Light Detector Component"
	],
	"functionTypes": [],
	"inputs": [],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "class",
			"containerType": "single",
			"object": "UTextureRenderTarget2D*",
			"description": "",
			"comments": [
				"Get Top Target"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Public",
		"BlueprintCallable",
		"BlueprintPure",
		"Const"
	]
},
{
	"name": "GetBotTarget",
	"comments": [
		"Get Bot Target",
		" Target is LXRFlux Light Detector Component"
	],
	"functionTypes": [],
	"inputs": [],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "class",
			"containerType": "single",
			"object": "UTextureRenderTarget2D*",
			"description": "",
			"comments": [
				"Get Bot Target"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Public",
		"BlueprintCallable",
		"BlueprintPure",
		"Const"
	]
},
{
	"name": "UnregisterLight",
	"comments": [
		"Removes light source from LXR",
		" Target is LXRSubsystem"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "LightSource",
			"dataType": "class",
			"containerType": "single",
			"object": "AActor*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [],
	"flags": [
		"Final",
		"Native",
		"Public",
		"BlueprintCallable"
	]
},
{
	"name": "RegisterLight",
	"comments": [
		"Registers new light source for LXR",
		" Target is LXRSubsystem"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "LightSource",
			"dataType": "class",
			"containerType": "single",
			"object": "AActor*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [],
	"flags": [
		"Final",
		"Native",
		"Public",
		"BlueprintCallable"
	]
},
{
	"name": "UpdateActorDebugFeatures",
	"comments": [
		"Update debug features for actor",
		" Target is LXRDebug Subsystem"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InActor",
			"dataType": "class",
			"containerType": "single",
			"object": "AActor*",
			"description": "Actor to modify debug features",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "InDebugFeatures",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLXRDebugFeatures",
			"description": "new features.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [],
	"flags": [
		"Final",
		"Native",
		"Public",
		"HasOutParms",
		"BlueprintCallable"
	]
},
{
	"name": "RemoveDebugActor",
	"comments": [
		"Remove added debug actor",
		" Target is LXRDebug Subsystem"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InActor",
			"dataType": "class",
			"containerType": "single",
			"object": "AActor*",
			"description": "Actor to remove",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [],
	"flags": [
		"Final",
		"Native",
		"Public",
		"BlueprintCallable"
	]
},
{
	"name": "AddDebugActor",
	"comments": [
		"Add new Debug Actor",
		" Target is LXRDebug Subsystem"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InActor",
			"dataType": "class",
			"containerType": "single",
			"object": "AActor*",
			"description": "Actor To Add",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "InDebugFeatures",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLXRDebugFeatures",
			"description": "Features to enable.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [],
	"flags": [
		"Final",
		"Native",
		"Public",
		"HasOutParms",
		"BlueprintCallable"
	]
},
{
	"name": "ToggleColorChannels",
	"comments": [
		"Toggles Color channels according to ToggleChannels.",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InColor",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "ToggleChannels",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [
				"Toggles Color channels according to ToggleChannels."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "RoundToNearestHalf",
	"comments": [
		"Rounds color to nearest half.",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InColor",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [
				"Rounds color to nearest half."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "Round",
	"comments": [
		"Rounds color channels.",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InColor",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [
				"Rounds color channels."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "RemapColorRangeTo01",
	"comments": [
		"Remaps color to 0-1.",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InColor",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [
				"Remaps color to 0-1."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "QueryLocationsLXR",
	"comments": [
		"Query Locations LXR",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "Querier",
			"dataType": "class",
			"containerType": "single",
			"object": "UObject*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Lights",
			"dataType": "class",
			"containerType": "TArray",
			"object": "AActor*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Points",
			"dataType": "struct",
			"containerType": "TArray",
			"object": "FVector",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "QueryLXRDebugOptions",
			"dataType": "struct",
			"containerType": "single",
			"object": "FQueryLXRDebugOptions",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "PassedData",
			"dataType": "struct",
			"containerType": "TSet",
			"object": "FLightSourcePassedData",
			"description": "",
			"comments": [
				"Query Locations LXR"
			],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "IlluminatedTargets",
			"dataType": "struct",
			"containerType": "single",
			"object": "FTargetLXRData",
			"description": "",
			"comments": [
				"Query Locations LXR"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"BlueprintCallable"
	]
},
{
	"name": "LimbToSocketName",
	"comments": [
		"Limb to Socket Name",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "WorldContextObject",
			"dataType": "class",
			"containerType": "single",
			"object": "UObject*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "InLimb",
			"dataType": "enum",
			"containerType": "single",
			"object": "EMannequinLimb",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "FName",
			"containerType": "single",
			"object": "FName",
			"description": "",
			"comments": [
				"Limb to Socket Name"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "IsPerceivedActorLit",
	"comments": [
		"Is Perceived Actor Lit",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "ActorToTest",
			"dataType": "class",
			"containerType": "single",
			"object": "AActor*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "IntensityThreshold",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [
				"Is Perceived Actor Lit"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "GetSecondDominantColor",
	"comments": [
		"Returns the color channel which has the second most influence of InColor.",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InColor",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "single",
			"object": "FDominantColor",
			"description": "",
			"comments": [
				"Returns the color channel which has the second most influence of InColor."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "GetMinOfColorChannels",
	"comments": [
		"Return the min value of color channels.",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InColor",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [
				"Return the min value of color channels."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "GetMaxOfColorChannels",
	"comments": [
		"Return the max value of color channels.",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InColor",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [
				"Return the max value of color channels."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "GetLux",
	"comments": [
		"Get Lux",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "WorldContextObject",
			"dataType": "class",
			"containerType": "single",
			"object": "UObject*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "TraceTaskData",
			"dataType": "struct",
			"containerType": "single",
			"object": "FTraceTaskData",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "PassedData",
			"dataType": "struct",
			"containerType": "TSet",
			"object": "FLightSourcePassedData",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "QueryLXRDebugOptions",
			"dataType": "struct",
			"containerType": "single",
			"object": "FQueryLXRDebugOptions",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "LXRMultiplier",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "MinLuxThreshold",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "TargetLXRData",
			"dataType": "struct",
			"containerType": "single",
			"object": "FTargetLXRData",
			"description": "",
			"comments": [
				"Get Lux"
			],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "ReturnValue",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [
				"Get Lux"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"BlueprintCallable"
	]
},
{
	"name": "GetLinearColorArrayAverage",
	"comments": [
		"Get FLinearColor array Average.",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InColors",
			"dataType": "struct",
			"containerType": "TArray",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [
				"Get FLinearColor array Average."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "GetInverseChannels",
	"comments": [
		"Return inverse of LinearColor channels.",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InColor",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [
				"Return inverse of LinearColor channels."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "GetDominantColor",
	"comments": [
		"Returns the color channel which has the most influence of InColor.",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InColor",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "single",
			"object": "FDominantColor",
			"description": "",
			"comments": [
				"Returns the color channel which has the most influence of InColor."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "GenerateSphereTraceTargets",
	"comments": [
		"Generate Sphere Trace Targets",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "Center",
			"dataType": "struct",
			"containerType": "single",
			"object": "FVector",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Radius",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Segments",
			"dataType": "int",
			"containerType": "single",
			"object": "int",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "TSet",
			"object": "FVector",
			"description": "",
			"comments": [
				"Generate Sphere Trace Targets"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable"
	]
},
{
	"name": "GenerateGridTargets",
	"comments": [
		"Generate Grid Targets",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "WorldContextObject",
			"dataType": "class",
			"containerType": "single",
			"object": "UObject*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Center",
			"dataType": "struct",
			"containerType": "single",
			"object": "FVector",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Radius",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Density",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "TSet",
			"object": "FVector",
			"description": "",
			"comments": [
				"Generate Grid Targets"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasDefaults",
		"BlueprintCallable"
	]
},
{
	"name": "GenerateCylinderTargets",
	"comments": [
		"Generate Cylinder Targets",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "WorldContextObject",
			"dataType": "class",
			"containerType": "single",
			"object": "UObject*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Center",
			"dataType": "struct",
			"containerType": "single",
			"object": "FVector",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Direction",
			"dataType": "struct",
			"containerType": "single",
			"object": "FVector",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "CylinderSegments",
			"dataType": "int",
			"containerType": "single",
			"object": "int",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "CylinderRadius",
			"dataType": "int",
			"containerType": "single",
			"object": "int",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "CylinderDistance",
			"dataType": "int",
			"containerType": "single",
			"object": "int",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "DistancePerSegment",
			"dataType": "int",
			"containerType": "single",
			"object": "int",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "TSet",
			"object": "FVector",
			"description": "",
			"comments": [
				"Generate Cylinder Targets"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasDefaults",
		"BlueprintCallable"
	]
},
{
	"name": "GenerateConeTraceTargets",
	"comments": [
		"Generate Cone Trace Targets",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "WorldContextObject",
			"dataType": "class",
			"containerType": "single",
			"object": "UObject*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Location",
			"dataType": "struct",
			"containerType": "single",
			"object": "FVector",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Direction",
			"dataType": "struct",
			"containerType": "single",
			"object": "FVector",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "ConeAngle",
			"dataType": "int",
			"containerType": "single",
			"object": "int",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "ConeSides",
			"dataType": "int",
			"containerType": "single",
			"object": "int",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "ConeRadius",
			"dataType": "int",
			"containerType": "single",
			"object": "int",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "ConeDistance",
			"dataType": "int",
			"containerType": "single",
			"object": "int",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "DistancePerSegment",
			"dataType": "int",
			"containerType": "single",
			"object": "int",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "TSet",
			"object": "FVector",
			"description": "",
			"comments": [
				"Generate Cone Trace Targets"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable"
	]
},
{
	"name": "GenerateCircleTraceTargets",
	"comments": [
		"Generate Circle Trace Targets",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "WorldContextObject",
			"dataType": "class",
			"containerType": "single",
			"object": "UObject*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Center",
			"dataType": "struct",
			"containerType": "single",
			"object": "FVector",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Forward",
			"dataType": "struct",
			"containerType": "single",
			"object": "FVector",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Radius",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Segments",
			"dataType": "int",
			"containerType": "single",
			"object": "int",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "TSet",
			"object": "FVector",
			"description": "",
			"comments": [
				"Generate Circle Trace Targets"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable"
	]
},
{
	"name": "FilterTargetsByTrace",
	"comments": [
		"Filter Targets by Trace",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "WorldContextObject",
			"dataType": "class",
			"containerType": "single",
			"object": "UObject*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "FilterTraceStartLocation",
			"dataType": "struct",
			"containerType": "single",
			"object": "FVector",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "TraceTargets",
			"dataType": "struct",
			"containerType": "TSet",
			"object": "FVector",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "ActorsToIgnore",
			"dataType": "class",
			"containerType": "TArray",
			"object": "AActor*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "TraceChannel",
			"dataType": "TEnumAsByte<ECollisionChannel>",
			"containerType": "single",
			"object": "TEnumAsByte<ECollisionChannel>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "TSet",
			"object": "FVector",
			"description": "",
			"comments": [
				"Filter Targets by Trace"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable"
	]
},
{
	"name": "Equal_FDominantColor",
	"comments": [
		"Is DominantColors equal.",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "FirstColor",
			"dataType": "struct",
			"containerType": "single",
			"object": "FDominantColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "SecondColor",
			"dataType": "struct",
			"containerType": "single",
			"object": "FDominantColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [
				"Is DominantColors equal."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "DominantToLinearColor",
	"comments": [
		"Return DominantColor converted to LinearColor.",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InDominantColor",
			"dataType": "struct",
			"containerType": "single",
			"object": "FDominantColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [
				"Return DominantColor converted to LinearColor."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "DebugTargets",
	"comments": [
		"Debug Targets",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "WorldContextObject",
			"dataType": "class",
			"containerType": "single",
			"object": "UObject*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Targets",
			"dataType": "struct",
			"containerType": "TSet",
			"object": "FVector",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "DebugDrawTime",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "DebugColor",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasDefaults",
		"BlueprintCallable"
	]
},
{
	"name": "DebugLXR",
	"comments": [
		"Debug LXR",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "WorldContextObject",
			"dataType": "class",
			"containerType": "single",
			"object": "UObject*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "TargetsLXR",
			"dataType": "struct",
			"containerType": "single",
			"object": "FTargetLXRData",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "DebugDrawTime",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "bDebugOnlyPassed",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"BlueprintCallable"
	]
},
{
	"name": "ColorRemappedRoundedHalfEqualColor",
	"comments": [
		"Are the colors after remapping and rounding to half equal.",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InColorOne",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "InColorTwo",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [
				"Are the colors after remapping and rounding to half equal."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "ColorEqual_DominantColor",
	"comments": [
		"Does the LinearColor equal Dominant color.",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "Color",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "DominantColor",
			"dataType": "struct",
			"containerType": "single",
			"object": "FDominantColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [
				"Does the LinearColor equal Dominant color."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "ColorApproximatelyEqualColor",
	"comments": [
		"Are the colors approximately equal.",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InColorOne",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "InColorTwo",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [
				"Are the colors approximately equal."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "ClampTo01Range",
	"comments": [
		"Clamp the color channels to 0-1 range.",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "InColor",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [
				"Clamp the color channels to 0-1 range."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable",
		"BlueprintPure"
	]
},
{
	"name": "CheckVisibility",
	"comments": [
		"Check Visibility",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "WorldContextObject",
			"dataType": "class",
			"containerType": "single",
			"object": "UObject*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "TraceTaskData",
			"dataType": "struct",
			"containerType": "single",
			"object": "FTraceTaskData",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "QueryLXRDebugOptions",
			"dataType": "struct",
			"containerType": "single",
			"object": "FQueryLXRDebugOptions",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "PassedData",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLightSourcePassedData",
			"description": "",
			"comments": [
				"Check Visibility"
			],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "ReturnValue",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [
				"Check Visibility"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms"
	]
},
{
	"name": "CheckIsLightRelevant",
	"comments": [
		"Check Is Light Relevant",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "WorldContextObject",
			"dataType": "class",
			"containerType": "single",
			"object": "UObject*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "TraceTaskData",
			"dataType": "struct",
			"containerType": "single",
			"object": "FTraceTaskData",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "QueryLXRDebugOptions",
			"dataType": "struct",
			"containerType": "single",
			"object": "FQueryLXRDebugOptions",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "PassedData",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLightSourcePassedData",
			"description": "",
			"comments": [
				"Check Is Light Relevant"
			],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "ReturnValue",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [
				"Check Is Light Relevant"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms"
	]
},
{
	"name": "BP_GetRelevantLights",
	"comments": [
		"BP Get Relevant Lights",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "WorldContextObject",
			"dataType": "class",
			"containerType": "single",
			"object": "UObject*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "TraceTargets",
			"dataType": "struct",
			"containerType": "TArray",
			"object": "FVector",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "RelevantLights",
			"dataType": "class",
			"containerType": "TSet",
			"object": "AActor*",
			"description": "",
			"comments": [
				"BP Get Relevant Lights"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"BlueprintCallable"
	]
},
{
	"name": "BP_GetOctreeLights",
	"comments": [
		"BP Get Octree Lights",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "WorldContextObject",
			"dataType": "class",
			"containerType": "single",
			"object": "UObject*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Box",
			"dataType": "struct",
			"containerType": "single",
			"object": "FBox",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "bDebug",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "Lights",
			"dataType": "class",
			"containerType": "TSet",
			"object": "AActor*",
			"description": "",
			"comments": [
				"BP Get Octree Lights"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable"
	]
},
{
	"name": "BP_GetLightsInBox",
	"comments": [
		"BP Get Lights in Box",
		" Target is LXRFunction Library"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "WorldContextObject",
			"dataType": "class",
			"containerType": "single",
			"object": "UObject*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Box",
			"dataType": "struct",
			"containerType": "single",
			"object": "FBox",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "RelevantLights",
			"dataType": "class",
			"containerType": "TSet",
			"object": "AActor*",
			"description": "",
			"comments": [
				"BP Get Lights in Box"
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"HasDefaults",
		"BlueprintCallable"
	]
},
{
	"name": "GetStateOfMemorizedLight",
	"comments": [
		"Gets current memory state of a light.",
		" Target is LXRMemory Component"
	],
	"functionTypes": [],
	"inputs": [
		{
			"name": "LightSourceActor",
			"dataType": "class",
			"containerType": "single",
			"object": "AActor*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "enum",
			"containerType": "single",
			"object": "ELightState",
			"description": "Current memory state of a light.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Public",
		"BlueprintCallable"
	]
},
{
	"name": "GetSensedActors",
	"comments": [
		"List of Sensed actors.",
		" Target is LXRLight Sense Component"
	],
	"functionTypes": [],
	"inputs": [],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "class",
			"containerType": "TArray",
			"object": "AActor*",
			"description": "",
			"comments": [
				"List of Sensed actors."
			],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Public",
		"BlueprintCallable",
		"BlueprintPure",
		"Const"
	]
},
{
	"name": "QueryLocationsLXR_Async",
	"comments": [
		"Query Points LXR amount, this is async Async",
		" Target is Query LXRTask"
	],
	"functionTypes": [
		"Latent"
	],
	"inputs": [
		{
			"name": "Querier",
			"dataType": "class",
			"containerType": "single",
			"object": "AActor*",
			"description": "Querier of the query, required, used for world reference.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Points",
			"dataType": "struct",
			"containerType": "TArray",
			"object": "FVector",
			"description": "Vector array of locations to query.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "InLights",
			"dataType": "class",
			"containerType": "TArray",
			"object": "AActor*",
			"description": "Relevant lights, can be left empty, then LXRSubsystem will calculate relevant lights.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"outputs": [
		{
			"name": "ReturnValue",
			"dataType": "delegate",
			"containerType": "single",
			"object": "OnQueryLXRDone",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"Final",
		"Native",
		"Static",
		"Public",
		"HasOutParms",
		"BlueprintCallable"
	]
},
] 
export default { 
	Nodes, 
}
