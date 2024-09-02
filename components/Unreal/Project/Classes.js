const Classes = [
{
	"className": "LXRSourceComponent",
	"description": "",
	"classPropertyCategories": [
		{
			"category": "LXR|Source|Debug",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "bDrawDebug",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "Should LightDetection component show debug about this light source actor.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bSolo",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "Disables detection from all other non-solo LXR Sources",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "LXR|Source",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "OverlapDetectionDistance",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "Defines the distance within which static actors are considered part of this Source Component.",
					"comments": [
						"Actors within this distance will be ignored when checking for visibility."
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bDisable",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "Disables detection from all other non-solo LXR Sources",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bAlwaysRelevant",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "Should this light source actor be always relevant to Light Detection.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bAddDetected",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "Add detected actors to list. DetectionComponent bAddToSourceWhenDetected needs to be true.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "AttenuationMultiplierToBeRelevant",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "Attenuation multiplier to be relevant.",
					"comments": [
						"Light is relevant if Actor is closer than Attenuation * AttenuationMultiplierToBeRelevant."
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "LXRMultiplier",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "LXR multiplier.",
					"comments": [
						"Multiplier to add to final LXR.",
						"Added to all LightComponents unless overriden with LightLXRMultipliers variable."
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "LXRColorMultiplier",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "LXR color multiplier.",
					"comments": [
						"Multiplier to add to final LXR color.",
						"Added to all LightComponents unless overriden with LightLXRColorMultipliers variable."
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "LXRSenseMultiplier",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "LXR multiplier for Sense.",
					"comments": [
						"Multiplier to add to Sense LXR."
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "LXRSilhouetteMultiplier",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "LXR multiplier for Silhouette.",
					"comments": [
						"Multiplier to add to Silhouette LXR."
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "LightLXRMultipliers",
					"dataType": "struct",
					"containerType": "TArray",
					"object": "FLightSourceData",
					"description": "LXR Intensity multiplier per LightComponent.",
					"comments": [
						"Overrides LXR Multiplier for light contained in array."
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "LightLXRColorMultipliers",
					"dataType": "struct",
					"containerType": "TArray",
					"object": "FLightSourceData",
					"description": "LXR Color multiplier per LightComponent.",
					"comments": [
						" Overrides LXR Color Multiplier for light contained in array."
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "ExcludedLights",
					"dataType": "struct",
					"containerType": "TArray",
					"object": "FComponentReference",
					"description": "List of LightComponents to exclude from LightDetection, Only used when GetMyLightComponentsMethodToUse is set to Class.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "IsEnabledMethodToUse",
					"dataType": "enum",
					"containerType": "single",
					"object": "EMethodToUse",
					"description": "Method to use for is actor light enabled",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "GetSourceActorStateMethodToUse",
					"dataType": "enum",
					"containerType": "single",
					"object": "EMethodToUse",
					"description": "Method to use for actor light state",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "GetLightComponentStateMethodToUse",
					"dataType": "enum",
					"containerType": "single",
					"object": "EMethodToUse",
					"description": "Method to use for light component state",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "IsLightComponentEnabledMethodToUse",
					"dataType": "enum",
					"containerType": "single",
					"object": "EMethodToUse",
					"description": "Method to use for if actor light component is enabled.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "GetMyLightComponentsMethodToUse",
					"dataType": "enum",
					"containerType": "single",
					"object": "EMethodToUse",
					"description": "Method to use for get my lights components.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "IgnoreVisibilityActorsMethodToUse",
					"dataType": "enum",
					"containerType": "single",
					"object": "EMethodToUse",
					"description": "Method to use for ignore visibility actors.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "LODDetectionMethodToUse",
					"dataType": "enum",
					"containerType": "single",
					"object": "EMethodToUse",
					"description": "Method to use for ignore visibility actors.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "LXRMethodObject",
					"dataType": "struct",
					"containerType": "single",
					"object": "FSoftClassPath",
					"description": "Assign the LXRMethodObject to use which overrides the specified method.",
					"comments": [
						" If any of the Method To Use properties are set to UObject then field LXRMethodObject can be set."
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "DetectedActors",
					"dataType": "class",
					"containerType": "TArray",
					"object": "AActor*",
					"description": "List of Detected actors.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "IgnoreVisibilityActors",
					"dataType": "class",
					"containerType": "TArray",
					"object": "AActor*",
					"description": "List of actors to ignore when checking visibility.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "MyLightComponents",
					"dataType": "class",
					"containerType": "TArray",
					"object": "ULightComponent*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierProtected"
					]
				}
			]
		},
		{
			"category": "LXR|Sense",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "bEnableLightSense",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "This actor can be sensed by light sense component",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "LXR|Memory",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "bIsMemorizable",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "This actor can be memorized by memory  component",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bBroadcastStateChanges",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "When enabled, SourceComponent will broadcast Light State changes.",
					"comments": [
						" OnLightStateChanged event can be implemented in BP or c++."
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "OnLightStateChanged",
					"dataType": "delegate",
					"containerType": "single",
					"object": "FOnLightStateChanged",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintAssignable",
						"CPF_NativeAccessSpecifierProtected"
					]
				}
			]
		},
		{
			"category": "None",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "MyOverlappingActors",
					"dataType": "class",
					"containerType": "TArray",
					"object": "AActor*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierProtected"
					]
				},
				{
					"name": "MethodObject",
					"dataType": "class",
					"containerType": "single",
					"object": "ULXRMethodObject*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierProtected"
					]
				}
			]
		},
		{
			"category": "LXR|LOD",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "OnLightLodStateChanged",
					"dataType": "delegate",
					"containerType": "single",
					"object": "FOnLightStateChanged",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintAssignable",
						"CPF_NativeAccessSpecifierProtected"
					]
				}
			]
		}
	],
	"classNodeCategories": [
		{
			"category": "LXR|Source",
			"categoryNodes": [
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
						"Get actors to ignore when checking visibility.",
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
				}
			]
		}
	]
},
{
	"className": "LXRDetectionComponent",
	"description": "",
	"classPropertyCategories": [
		{
			"category": "LXR|Detection|Debug",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "bDrawDebug",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "Render debug shapes, also needs to be enabled on Light Source Component.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bPrintDebug",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "Print debug messages, if bDrawDebug is enabled on Light Source Component.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bDebugRelevantAndPassed",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "Debug Render Relevant lights & Passed lights",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bDebugOctreeLights",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "Debug Render Octree lights",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "DebugDrawTime",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bDebugVectorArray",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "Draw debug sphere for each VectorArray position.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "LXR|Detection",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "SocketPreset",
					"dataType": "enum",
					"containerType": "single",
					"object": "ESocketPreset",
					"description": "Use preset sockets or custom one..",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "TargetSockets",
					"dataType": "FName",
					"containerType": "TArray",
					"object": "FName",
					"description": "Bones or sockets to use as detection targets",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "TargetVectors",
					"dataType": "struct",
					"containerType": "TArray",
					"object": "FVector",
					"description": "Detection targets in local space to use for VectorArray type.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bAddToSourceWhenDetected",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "This actor can be added to source component DetectedActors list.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bGetIlluminatedTargets",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "Gets illuminated targets and their LXR value.",
					"comments": [
						" Causes some extra calculations."
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "IgnoreVisibilityActors",
					"dataType": "class",
					"containerType": "TArray",
					"object": "AActor*",
					"description": "List of actors to ignore when checking visibility.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "LXR|Detection|Relevancy",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "RelevancyCheckQuality",
					"dataType": "enum",
					"containerType": "single",
					"object": "ECheckQuality",
					"description": "Quality for Relevancy Check",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "RelevancyCheckType",
					"dataType": "enum",
					"containerType": "single",
					"object": "ERelevancyCheckType",
					"description": "Method to use for checking if light is relevant",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "RelevancyLightBatchCount",
					"dataType": "int",
					"containerType": "single",
					"object": "int",
					"description": "How many lights we check for relevancy per check.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "RelevancyTargetType",
					"dataType": "enum",
					"containerType": "single",
					"object": "ETraceTarget",
					"description": "Target type to use for relevancy detection.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "TargetsRequired",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "Percentage of how many targets needs to pass relevancy check for light to be relevant.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "LXR|Detection|Relevancy|Quality",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "RelevancySmartDistanceMin",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "Min distance after which check rate will be reduced.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "RelevancySmartDistanceMax",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "Max distance after which check rate will be greatly reduced.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "RelevancySmartCheckRateDivider",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "Divider for Smart check rate.",
					"comments": [
						" Near check rate is 5/RelevancySmartCheckRateDivider in second",
						" Mid: light will be 2/RelevancySmartCheckRateDivider twice in second.",
						" Far: light will be 1/RelevancySmartCheckRateDivider every second."
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "RelevancyCheckRate",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "Rate for checking for new relevant lights.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "RelevancyOctreeCheckBoundsSize",
					"dataType": "int",
					"containerType": "single",
					"object": "int",
					"description": "Bounds size to check for nearby lights.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "LXR|Detection|Directional Light",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "DirectionalLightTraceDistance",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "Max distance to check if Directional Light sees owner.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "LXR|Detection|Relevant",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "RelevantCheckQuality",
					"dataType": "enum",
					"containerType": "single",
					"object": "ECheckQuality",
					"description": "Quality for Relevant Check",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "RelevantCheckType",
					"dataType": "enum",
					"containerType": "single",
					"object": "ETaskProcessType",
					"description": "Method to use for tracing checks.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "RelevantTargetType",
					"dataType": "enum",
					"containerType": "single",
					"object": "ETraceTarget",
					"description": "Target type to use for detection.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "RelevantLightBatchCount",
					"dataType": "int",
					"containerType": "single",
					"object": "int",
					"description": "How many relevant lights we process per check.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "TraceChannel",
					"dataType": "TEnumAsByte<ECollisionChannel>",
					"containerType": "single",
					"object": "TEnumAsByte<ECollisionChannel>",
					"description": "Trace channel to use for traces.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "TracesRequired",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "Percentage of how many traces needs to be passed (not hit) to be lit.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "MaxConsecutiveFails",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "How many  times in row relevant check must fail to remove light from relevant list.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "LXR|Detection|Relevant|Quality",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "RelevantLightCheckRate",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "Rate for checking if relevant light illuminates Actor.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "LXR|Detection|Passed",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "CombinedLXRColor",
					"dataType": "struct",
					"containerType": "single",
					"object": "FLinearColor",
					"description": "Combined LXR color from all received LXR Sources",
					"comments": ["Color combined from all targets."],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintVisible",
						"CPF_BlueprintReadOnly",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "CombinedLXRIntensity",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "Combined LXR intensity from all received LXR Sources",
					"comments": ["Value combined from all targets."],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintVisible",
						"CPF_BlueprintReadOnly",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "IlluminatedTargets",
					"dataType": "int:struct",
					"containerType": "TMap",
					"object": "int:FLinearColor",
					"description": "List of all illuminated targets",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintVisible",
						"CPF_BlueprintReadOnly",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "LXR|Detection|Silhouette",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "OnSeenBySilhouette",
					"dataType": "delegate",
					"containerType": "single",
					"object": "FOnSeenBySilhouette",
					"description": "Blueprint Assignable event",
					"comments": [
						"Broadcasts when this Detection component is seen by silhouette component.",
						"@return Detector : Detector Actor with silhouette component."
					],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintAssignable",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "None",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "MemoryComponent",
					"dataType": "class",
					"containerType": "single",
					"object": "ULXRMemoryComponent*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "LXRSubsystem",
					"dataType": "class",
					"containerType": "single",
					"object": "ULXRSubsystem*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "DetectionDebugWidget",
					"dataType": "TWeakObjectPtr<UUserWidget>",
					"containerType": "single",
					"object": "TWeakObjectPtr<UUserWidget>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "OctreeLightsToRemove",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "OctreeLightsToAdd",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "RelevantOctreeLights",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "NearbyOctreeLights",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "RelevantLights",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "RelevantLightsPassed",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "NewRelevantLightsToAdd",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "RelevantLightsToRemove",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "AllLights",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "SmartNearLights",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "SmartMidLights",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "SmartFarLights",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "NewAllLightsToAdd",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "LightsToRemove",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "ErrorAlreadyThrownFromActor",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "SmartFarLightsToRemove",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "SmartMidLightsToRemove",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "SmartNearLightsToRemove",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "SmartFarLightsToAdd",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "SmartMidLightsToAdd",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "SmartNearLightsToAdd",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "RelevantLightsFailCounts",
					"dataType": "TWeakObjectPtr<AActor>:int",
					"containerType": "TMap",
					"object": "TWeakObjectPtr<AActor>:int",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "SkeletalMeshComponent",
					"dataType": "class",
					"containerType": "single",
					"object": "USkeletalMeshComponent*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				}
			]
		}
	],
	"classNodeCategories": [
		{
			"category": "LXR|Detection| Trace Targets",
			"categoryNodes": [
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
				}
			]
		},
		{
			"category": "LXR|Detection| Passed Lights",
			"categoryNodes": [
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
				}
			]
		}
	]
},
{
	"className": "LXRIndirectDetector",
	"description": "",
	"classPropertyCategories": [
		{
			"category": "LXR|Detection|Indirect",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "RenderTextureSize",
					"dataType": "int",
					"containerType": "single",
					"object": "int",
					"description": "Size of the RenderTextures",
					"comments": [
						"Default 32."
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "TopRT",
					"dataType": "class",
					"containerType": "single",
					"object": "UTextureRenderTarget2D*",
					"description": "Override default Top Render Texture",
					"comments": [
						"Default RTF_RGBA8 RenderTextureSize*RenderTextureSize"
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_BlueprintReadOnly",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "BotRT",
					"dataType": "class",
					"containerType": "single",
					"object": "UTextureRenderTarget2D*",
					"description": "Override default Bot Render Texture",
					"comments": [
						"Default RTF_RGBA8 RenderTextureSize*RenderTextureSize"
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_BlueprintReadOnly",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "Luminance",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintVisible",
						"CPF_BlueprintReadOnly",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "ColorOutput",
					"dataType": "struct",
					"containerType": "single",
					"object": "FLinearColor",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintVisible",
						"CPF_BlueprintReadOnly",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "LightUpdateInterval",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "MinimumLightValue",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "MaxLightHistory",
					"dataType": "int",
					"containerType": "single",
					"object": "int",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "None",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "IndirectDebugWidget",
					"dataType": "TWeakObjectPtr<UUserWidget>",
					"containerType": "single",
					"object": "TWeakObjectPtr<UUserWidget>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "TopSceneCaptureComponent",
					"dataType": "class",
					"containerType": "single",
					"object": "USceneCaptureComponent2D*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "BotSceneCaptureComponent",
					"dataType": "class",
					"containerType": "single",
					"object": "USceneCaptureComponent2D*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "ChildActorComponent",
					"dataType": "class",
					"containerType": "single",
					"object": "UChildActorComponent*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "IndirectMeshComponent",
					"dataType": "class",
					"containerType": "single",
					"object": "UStaticMeshComponent*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "SceneCaptures",
					"dataType": "class",
					"containerType": "TArray",
					"object": "USceneCaptureComponent2D*",
					"description": "FRenderTarget* TopRenderTarget;",
					"comments": [
						"FRenderTarget* BotRenderTarget;"
					],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "IndirectMatInst",
					"dataType": "class",
					"containerType": "single",
					"object": "UMaterialInstanceDynamic*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "DetectorTextureTop",
					"dataType": "class",
					"containerType": "single",
					"object": "TObjectPtr<UTextureRenderTarget2D>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic",
						"CPF_ExperimentalOverridableLogic"
					]
				},
				{
					"name": "DetectorTextureBottom",
					"dataType": "class",
					"containerType": "single",
					"object": "TObjectPtr<UTextureRenderTarget2D>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic",
						"CPF_ExperimentalOverridableLogic"
					]
				},
				{
					"name": "DetectorBottom",
					"dataType": "class",
					"containerType": "single",
					"object": "TObjectPtr<USceneCaptureComponent2D>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic",
						"CPF_ExperimentalOverridableLogic"
					]
				},
				{
					"name": "DetectorTop",
					"dataType": "class",
					"containerType": "single",
					"object": "TObjectPtr<USceneCaptureComponent2D>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic",
						"CPF_ExperimentalOverridableLogic"
					]
				}
			]
		}
	],
	"classNodeCategories": [
		{
			"category": "LXR|Detection| Indirect",
			"categoryNodes": [
				{
					"name": "GetTopTarget",
					"comments": [
						"Get Top Target",
						" Target is LXRIndirect Detector"
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
						" Target is LXRIndirect Detector"
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
					"name": "StartThreadWorker",
					"comments": [
						"Start Thread Worker",
						" Target is Light Detector"
					],
					"functionTypes": [],
					"inputs": [],
					"outputs": [],
					"flags": [
						"Final",
						"Native",
						"Public",
						"BlueprintCallable"
					]
				},
				{
					"name": "GetColor",
					"comments": [
						"Get Color",
						" Target is Light Detector"
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
								"Get Color"
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
					"name": "GetBrightness",
					"comments": [
						"Get Brightness",
						" Target is Light Detector"
					],
					"functionTypes": [],
					"inputs": [],
					"outputs": [
						{
							"name": "ReturnValue",
							"dataType": "float",
							"containerType": "single",
							"object": "float",
							"description": "",
							"comments": [
								"Get Brightness"
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
				}
			]
		}
	]
},
{
	"className": "LXROctreeVolume",
	"description": "",
	"classPropertyCategories": [
		{
			"category": "Brush",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "BrushType",
					"dataType": "TEnumAsByte<EBrushType>",
					"containerType": "single",
					"object": "TEnumAsByte<EBrushType>",
					"description": "Type of brush",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "None",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "BrushColor",
					"dataType": "struct",
					"containerType": "single",
					"object": "FColor",
					"description": "Information.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "PolyFlags",
					"dataType": "int",
					"containerType": "single",
					"object": "int",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bColored",
					"dataType": "uint8",
					"containerType": "single",
					"object": "uint8",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bSolidWhenSelected",
					"dataType": "uint8",
					"containerType": "single",
					"object": "uint8",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bPlaceableFromClassBrowser",
					"dataType": "uint8",
					"containerType": "single",
					"object": "uint8",
					"description": "If true, this brush class can be placed using the class browser like other simple class types",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bNotForClientOrServer",
					"dataType": "uint8",
					"containerType": "single",
					"object": "uint8",
					"description": "If true, this brush is a builder or otherwise does not need to be loaded into the game",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "Brush",
					"dataType": "class",
					"containerType": "single",
					"object": "TObjectPtr<UModel>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_PersistentInstance",
						"CPF_NativeAccessSpecifierPublic",
						"CPF_ExperimentalOverridableLogic"
					]
				},
				{
					"name": "bInManipulation",
					"dataType": "uint8",
					"containerType": "single",
					"object": "uint8",
					"description": "Flag set when we are in a manipulation (scaling, translation, brush builder param change etc.)",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "SavedSelections",
					"dataType": "struct",
					"containerType": "TArray",
					"object": "FGeomSelection",
					"description": "Stores selection information from geometry mode.  This is the only information that we can't",
					"comments": [
						"regenerate by looking at the source brushes following an undo operation."
					],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "Collision",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "BrushComponent",
					"dataType": "class",
					"containerType": "single",
					"object": "TObjectPtr<UBrushComponent>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_BlueprintReadOnly",
						"CPF_EditConst",
						"CPF_NativeAccessSpecifierPrivate",
						"CPF_ExperimentalOverridableLogic"
					]
				}
			]
		},
		{
			"category": "BrushBuilder",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "BrushBuilder",
					"dataType": "class",
					"containerType": "single",
					"object": "TObjectPtr<UBrushBuilder>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_EditConst",
						"CPF_EditorOnly",
						"CPF_PersistentInstance",
						"CPF_NativeAccessSpecifierPublic",
						"CPF_ExperimentalOverridableLogic"
					]
				}
			]
		},
		{
			"category": "BrushSettings",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "bDisplayShadedVolume",
					"dataType": "uint8",
					"containerType": "single",
					"object": "uint8",
					"description": "If true, display the brush with a shaded volume",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_Transient",
						"CPF_EditorOnly",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "ShadedVolumeOpacityValue",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "Value used to set the opacity for the shaded volume, between 0-1",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_Transient",
						"CPF_EditorOnly",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		}
	],
	"classNodeCategories": []
},
{
	"className": "LXRSubsystem",
	"description": "",
	"classPropertyCategories": [
		{
			"category": "None",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "LightSources",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "DetectionOwners",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "LXRActorsNotInOctreeYetBuffer",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				}
			]
		}
	],
	"classNodeCategories": [
		{
			"category": "LXR",
			"categoryNodes": [
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
				}
			]
		}
	]
},
{
	"className": "LXRFunctionLibrary",
	"description": "",
	"classPropertyCategories": [],
	"classNodeCategories": [
		{
			"category": "LXR|Color",
			"categoryNodes": [
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
				}
			]
		},
		{
			"category": "LXR|Detection| Combined Data",
			"categoryNodes": [
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
				}
			]
		},
		{
			"category": "LXR|Query",
			"categoryNodes": [
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
							"object": "FTargetsLXR",
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
				}
			]
		},
		{
			"category": "LXR|Perception",
			"categoryNodes": [
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
				}
			]
		},
		{
			"category": "LXR|Get LXR",
			"categoryNodes": [
				{
					"name": "GetLXR",
					"comments": [
						"Get LXR",
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
						}
					],
					"outputs": [
						{
							"name": "TargetsLXR",
							"dataType": "struct",
							"containerType": "single",
							"object": "FTargetsLXR",
							"description": "",
							"comments": [
								"Get LXR"
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
								"Get LXR"
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
				}
			]
		},
		{
			"category": "LXR|Generate| Targets",
			"categoryNodes": [
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
				}
			]
		},
		{
			"category": "LXR|Filter| Targets",
			"categoryNodes": [
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
				}
			]
		},
		{
			"category": "LXR|Debug| Targets",
			"categoryNodes": [
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
				}
			]
		},
		{
			"category": "LXR|Debug| LXR",
			"categoryNodes": [
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
							"object": "FTargetsLXR",
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
				}
			]
		},
		{
			"category": "LXR|Check| Targets",
			"categoryNodes": [
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
				}
			]
		},
		{
			"category": "LXR|Relevant Lights",
			"categoryNodes": [
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
				}
			]
		}
	]
},
{
	"className": "LXRMemoryComponent",
	"description": "",
	"classPropertyCategories": [
		{
			"category": "LXR|Memory|Debug",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "bDrawDebug",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "Render debug shapes.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bPrintDebug",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "Print debug messages.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "LXR|Memory",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "OnMemorizedLightStateChanged",
					"dataType": "delegate",
					"containerType": "single",
					"object": "FOnMemorizedLightStateChanged",
					"description": "Blueprint Assignable event",
					"comments": [
						"Broadcasts when any Light Component state changes.",
						"@return LightSourceComponent : Changed Source Component",
						"@return OldLightState : Old state",
						"@return NewLightState : New state"
					],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintAssignable",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "OnMemorizedLightComponentStateChanged",
					"dataType": "delegate",
					"containerType": "single",
					"object": "FOnMemorizedLightComponentStateChanged",
					"description": "Blueprint Assignable event",
					"comments": [
						"Broadcasts when Source Component state changes.",
						"@return LightSourceComponent : Changed Source Component",
						"@return LightComponent : Changed Light component on Source actor",
						"@return OldLightComponentState : Old state",
						"@return NewLightComponentStat : New state"
					],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintAssignable",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "MemoryCheckClass",
					"dataType": "enum",
					"containerType": "single",
					"object": "EMemoryCheckClass",
					"description": "Which class to use for Memory checks, either Detection or Sense.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		}
	],
	"classNodeCategories": [
		{
			"category": "LXR|Memory",
			"categoryNodes": [
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
				}
			]
		}
	]
},
{
	"className": "LXRLightSenseComponent",
	"description": "",
	"classPropertyCategories": [
		{
			"category": "LXR|Sense|Debug",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "bDrawDebug",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "Render Light Sense debug shapes.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "DebugOptions",
					"dataType": "struct",
					"containerType": "single",
					"object": "FQueryLXRDebugOptions",
					"description": "@brief Debug options",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "LXR|Sense",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "SenseTraceTransform",
					"dataType": "enum",
					"containerType": "single",
					"object": "ETraceTransform",
					"description": "Location and Direction to use for the sense cone.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "SocketName",
					"dataType": "FName",
					"containerType": "single",
					"object": "FName",
					"description": "Socket to use for Sense trace Location and Direction.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "SenseCalculationType",
					"dataType": "enum",
					"containerType": "single",
					"object": "ETaskProcessType",
					"description": "Method to use for tracing checks.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "SenseCheckQuality",
					"dataType": "enum",
					"containerType": "single",
					"object": "ECheckQuality",
					"description": "Sense check quality to use.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "SenseTraceTaskParams",
					"dataType": "struct",
					"containerType": "single",
					"object": "FConeTraceTaskParams",
					"description": "Parameters to use for the Sense Cone Trace shape.",
					"comments": [
						"Can be modified if SenseCheckQuality is set to Custom"
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_BlueprintReadOnly",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "CheckRate",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "Check rate for Sense",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "TraceTargetBatchCount",
					"dataType": "int",
					"containerType": "single",
					"object": "int",
					"description": "How many trace targets to iterate per check.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "TargetsRequired",
					"dataType": "int",
					"containerType": "single",
					"object": "int",
					"description": "How many targets needs to pass for light to be sensed.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "TraceChannel",
					"dataType": "TEnumAsByte<ECollisionChannel>",
					"containerType": "single",
					"object": "TEnumAsByte<ECollisionChannel>",
					"description": "Trace channel to use for traces.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "LXRMethodObject",
					"dataType": "struct",
					"containerType": "single",
					"object": "FSoftClassPath",
					"description": "Assign the LXRMethodObject to use which overrides the specified method.",
					"comments": [
						" If any of the Method To Use properties are set to UObject then field LXRMethodObject can be set."
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "LXR|Sense|Passed",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "CombinedLXRColor",
					"dataType": "struct",
					"containerType": "single",
					"object": "FLinearColor",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintVisible",
						"CPF_BlueprintReadOnly",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "CombinedLXRIntensity",
					"dataType": "float",
					"containerType": "single",
					"object": "float",
					"description": "",
					"comments": [""],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintVisible",
						"CPF_BlueprintReadOnly",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "PassedTargets",
					"dataType": "struct",
					"containerType": "TArray",
					"object": "FVector",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintVisible",
						"CPF_BlueprintReadOnly",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "None",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "SensedLightsToRemove",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "MethodObject",
					"dataType": "class",
					"containerType": "single",
					"object": "ULXRMethodObject*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				}
			]
		}
	],
	"classNodeCategories": [
		{
			"category": "LXR|Sense",
			"categoryNodes": [
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
				}
			]
		}
	]
},
{
	"className": "LXRSilhouetteDetectionComponent",
	"description": "",
	"classPropertyCategories": [
		{
			"category": "LXR|Silhouette|Debug",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "bDrawDebug",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "Render debug shapes, also needs to be enabled on Light Source Component.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "DebugOptions",
					"dataType": "struct",
					"containerType": "single",
					"object": "FQueryLXRDebugOptions",
					"description": "@brief Debug options",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "LXR|Silhouette",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "SilhouetteCheckQuality",
					"dataType": "enum",
					"containerType": "single",
					"object": "ECheckQuality",
					"description": "Quality for Relevancy Check",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "SilhouetteTraceTaskParams",
					"dataType": "struct",
					"containerType": "single",
					"object": "FSilhouetteTraceTaskParams",
					"description": "Parameters to use for the Silhouette Cone Trace shape.",
					"comments": [
						"Can be modified if SenseCheckQuality is set to Custom"
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_BlueprintReadOnly",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "TargetsRequired",
					"dataType": "int",
					"containerType": "single",
					"object": "int",
					"description": "How many targets needs to pass for light to be seen by silhouette detection.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "SilhouetteCalculationType",
					"dataType": "enum",
					"containerType": "single",
					"object": "ETaskProcessType",
					"description": "Method to use for tracing checks.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "OctreeCheckBoundsSize",
					"dataType": "int",
					"containerType": "single",
					"object": "int",
					"description": "Bounds size to check for nearby detection components in octree.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "TraceTargetBatchCount",
					"dataType": "int",
					"containerType": "single",
					"object": "int",
					"description": "How many trace targets to iterate per check.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "TraceTransform",
					"dataType": "enum",
					"containerType": "single",
					"object": "ETraceTransform",
					"description": "Location and Direction to use for the sense cone.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "LXRMethodObject",
					"dataType": "struct",
					"containerType": "single",
					"object": "FSoftClassPath",
					"description": "Assign the LXRMethodObject to use which overrides the specified method.",
					"comments": [
						" If any of the Method To Use properties are set to UObject then field LXRMethodObject can be set."
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "None",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "OnSilhouetteSpottedActor",
					"dataType": "delegate",
					"containerType": "single",
					"object": "FOnSeenBySilhouette",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintAssignable",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "NearbyDetectors",
					"dataType": "TWeakObjectPtr<AActor>",
					"containerType": "TArray",
					"object": "TWeakObjectPtr<AActor>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "LXRSubsystem",
					"dataType": "class",
					"containerType": "single",
					"object": "ULXRSubsystem*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "MethodObject",
					"dataType": "class",
					"containerType": "single",
					"object": "ULXRMethodObject*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				}
			]
		},
		{
			"category": "LXR|Silhouette|",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "TraceChannel",
					"dataType": "TEnumAsByte<ECollisionChannel>",
					"containerType": "single",
					"object": "TEnumAsByte<ECollisionChannel>",
					"description": "Trace channel to use for traces.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		}
	],
	"classNodeCategories": []
},
{
	"className": "EnvQueryTest_LXR",
	"description": "",
	"classPropertyCategories": [
		{
			"category": "LXR",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "DebugOptions",
					"dataType": "struct",
					"containerType": "single",
					"object": "FQueryLXRDebugOptions",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "ColorToTest",
					"dataType": "struct",
					"containerType": "single",
					"object": "FLinearColor",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "LXRMultiplier",
					"dataType": "struct",
					"containerType": "single",
					"object": "FAIDataProviderFloatValue",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_AdvancedDisplay",
						"CPF_NativeAccessSpecifierPrivate"
					]
				}
			]
		},
		{
			"category": "Trace",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "Context",
					"dataType": "class",
					"containerType": "single",
					"object": "TSubclassOf<UEnvQueryContext>",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPrivate"
					]
				}
			]
		},
		{
			"category": "None",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "TestOrder",
					"dataType": "int",
					"containerType": "single",
					"object": "int",
					"description": "Number of test as defined in data asset",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bWorkOnFloatValues",
					"dataType": "uint8",
					"containerType": "single",
					"object": "uint8",
					"description": "When set, test operates on float values (e.g. distance, with AtLeast, UpTo conditions),",
					"comments": [
						"otherwise it will accept bool values (e.g. visibility, with Equals condition)"
					],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "VerNum",
					"dataType": "int",
					"containerType": "single",
					"object": "int",
					"description": "Versioning for updating deprecated properties",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "Test",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "TestPurpose",
					"dataType": "TEnumAsByte<EEnvTestPurpose",
					"containerType": "single",
					"object": ":Type>:TEnumAsByte<EEnvTestPurpose::Type>",
					"description": "The purpose of this test.  Should it be used for filtering possible results, scoring them, or both?",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "TestComment",
					"dataType": "FString",
					"containerType": "single",
					"object": "FString",
					"description": "Optional comment or explanation about what this test is for.  Useful when the purpose of tests may not be clear,",
					"comments": [
						"especially when there are multiple tests of the same type."
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "Filter",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "MultipleContextFilterOp",
					"dataType": "TEnumAsByte<EEnvTestFilterOperator",
					"containerType": "single",
					"object": ":Type>:TEnumAsByte<EEnvTestFilterOperator::Type>",
					"description": "Determines filtering operator when context returns multiple items",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_AdvancedDisplay",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "FilterType",
					"dataType": "TEnumAsByte<EEnvTestFilterType",
					"containerType": "single",
					"object": ":Type>:TEnumAsByte<EEnvTestFilterType::Type>",
					"description": "Does this test filter out results that are below a lower limit, above an upper limit, or both?  Or does it just look for a matching value?",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "BoolValue",
					"dataType": "struct",
					"containerType": "single",
					"object": "FAIDataProviderBoolValue",
					"description": "Desired boolean value of the test for scoring to occur or filtering test to pass.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "FloatValueMin",
					"dataType": "struct",
					"containerType": "single",
					"object": "FAIDataProviderFloatValue",
					"description": "Minimum limit (inclusive) of valid values for the raw test value. Lower values will be discarded as invalid.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "FloatValueMax",
					"dataType": "struct",
					"containerType": "single",
					"object": "FAIDataProviderFloatValue",
					"description": "Maximum limit (inclusive) of valid values for the raw test value. Higher values will be discarded as invalid.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "Score",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "MultipleContextScoreOp",
					"dataType": "TEnumAsByte<EEnvTestScoreOperator",
					"containerType": "single",
					"object": ":Type>:TEnumAsByte<EEnvTestScoreOperator::Type>",
					"description": "Determines scoring operator when context returns multiple items",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_AdvancedDisplay",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "ScoringEquation",
					"dataType": "TEnumAsByte<EEnvTestScoreEquation",
					"containerType": "single",
					"object": ":Type>:TEnumAsByte<EEnvTestScoreEquation::Type>",
					"description": "The shape of the curve equation to apply to the normalized score before multiplying by factor.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "ClampMinType",
					"dataType": "TEnumAsByte<EEnvQueryTestClamping",
					"containerType": "single",
					"object": ":Type>:TEnumAsByte<EEnvQueryTestClamping::Type>",
					"description": "How should the lower bound for normalization of the raw test value before applying the scoring formula be determined?",
					"comments": [
						"          Should it use the lowest value found (tested), the lower threshold for filtering, or a separate specified normalization minimum?"
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "ClampMaxType",
					"dataType": "TEnumAsByte<EEnvQueryTestClamping",
					"containerType": "single",
					"object": ":Type>:TEnumAsByte<EEnvQueryTestClamping::Type>",
					"description": "How should the upper bound for normalization of the raw test value before applying the scoring formula be determined?",
					"comments": [
						"          Should it use the highest value found (tested), the upper threshold for filtering, or a separate specified normalization maximum?"
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "NormalizationType",
					"dataType": "enum",
					"containerType": "single",
					"object": "EEQSNormalizationType",
					"description": "Specifies how to determine value span used to normalize scores",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "ScoreClampMin",
					"dataType": "struct",
					"containerType": "single",
					"object": "FAIDataProviderFloatValue",
					"description": "Minimum value to use to normalize the raw test value before applying scoring formula.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "ScoreClampMax",
					"dataType": "struct",
					"containerType": "single",
					"object": "FAIDataProviderFloatValue",
					"description": "Maximum value to use to normalize the raw test value before applying scoring formula.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "ScoringFactor",
					"dataType": "struct",
					"containerType": "single",
					"object": "FAIDataProviderFloatValue",
					"description": "The weight (factor) by which to multiply the normalized score after the scoring equation is applied.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "ReferenceValue",
					"dataType": "struct",
					"containerType": "single",
					"object": "FAIDataProviderFloatValue",
					"description": "When specified gets used to normalize test's results in such a way that the closer a value is to ReferenceValue",
					"comments": [
						"    the higher normalized result it will produce. Value farthest from ReferenceValue will be normalized",
						"    to 0, and all the other values in between will get normalized linearly with the distance to ReferenceValue."
					],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "bDefineReferenceValue",
					"dataType": "bool",
					"containerType": "single",
					"object": "bool",
					"description": "When set to true enables usage of ReferenceValue. It's false by default",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_Edit",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		}
	],
	"classNodeCategories": []
},
{
	"className": "QueryLXRTask",
	"description": "",
	"classPropertyCategories": [
		{
			"category": "None",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "OnQueryLXRDone",
					"dataType": "delegate",
					"containerType": "single",
					"object": "FOnQueryLXRDone",
					"description": "UQueryLXRTask return Delegate",
					"comments": [
						"@return TargetsLXR : LXR Amount of passed targets",
						"@return PassedData : Contains passed data."
					],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintAssignable",
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "WorldContextObject",
					"dataType": "class",
					"containerType": "single",
					"object": "UObject*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "Lights",
					"dataType": "class",
					"containerType": "TArray",
					"object": "AActor*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				}
			]
		}
	],
	"classNodeCategories": [
		{
			"category": "LXR|Query",
			"categoryNodes": [
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
				}
			]
		}
	]
},
] 
export default { 
	Classes, 
	}
