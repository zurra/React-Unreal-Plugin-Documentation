const Classes = [
{
	"className": "RetroDebugSubSystem",
	"description": "",
	"classPropertyCategories": [
		{
			"category": "None",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "OnRetroDebugStateChanged",
					"dataType": "delegate",
					"containerType": "single",
					"object": "FOnRetroDebugStateChanged",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "DebugWindowWidget",
					"dataType": "TWeakObjectPtr<UURetroDebugWindowWidget>",
					"containerType": "single",
					"object": "TWeakObjectPtr<UURetroDebugWindowWidget>",
					"description": "Created RetroDebugWindow Widget object",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "DebugMiniWindowWidget",
					"dataType": "TWeakObjectPtr<UURetroDebugMiniWindowWidget>",
					"containerType": "single",
					"object": "TWeakObjectPtr<UURetroDebugMiniWindowWidget>",
					"description": "Created RetroDebugMiniWindow Widget object",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPublic"
					]
				},
				{
					"name": "ConsoleEntries",
					"dataType": "FName:class",
					"containerType": "TMap",
					"object": "FName:URetroDebugObject*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "PersistingEntries",
					"dataType": "FName:class",
					"containerType": "TMap",
					"object": "FName:URetroDebugObject*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "InputComponent",
					"dataType": "class",
					"containerType": "single",
					"object": "UInputComponent*",
					"description": "",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_NativeAccessSpecifierPrivate"
					]
				},
				{
					"name": "PlayerController",
					"dataType": "class",
					"containerType": "single",
					"object": "APlayerController*",
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
			"category": "RetroDebug",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "bIsDebugMenuOpen",
					"dataType": "uint8",
					"containerType": "single",
					"object": "uint8",
					"description": "Is Debug Menu Open? Can be used for ex. to disable character input.",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		},
		{
			"category": "RetroDebug | Command Entry",
			"image": "",
			"onlyInPropertyImage": false,
			"categoryProperties": [
				{
					"name": "bIsConsoleActive",
					"dataType": "uint8",
					"containerType": "single",
					"object": "uint8",
					"description": "Is Console Input active? Used to prevent input. Used to disable RetroDebugWindow input",
					"comments": [],
					"defaultValue": "",
					"metas": [
						"CPF_BlueprintVisible",
						"CPF_NativeAccessSpecifierPublic"
					]
				}
			]
		}
	],
	"classNodeCategories": [
		{
			"category": "Retro Debug| Toggle Retro Debug",
			"categoryNodes": [
				{
					"name": "ToggleDebugMenu",
					"comments": [
						"Toggles Retro Debug Menu on/off",
						" Target is Retro Debug Sub System"
					],
					"functionTypes": [],
					"inputs": [],
					"outputs": [],
					"flags": [
						"Final",
						"Native",
						"Public",
						"BlueprintCallable",
						"Const"
					]
				}
			]
		},
		{
			"category": "Retro Debug| Mini Window",
			"categoryNodes": [
				{
					"name": "SetMiniWindowAnchor",
					"comments": [
						"Changes Mini Window Anchor",
						" Target is Retro Debug Sub System"
					],
					"functionTypes": [],
					"inputs": [
						{
							"name": "InAnchor",
							"dataType": "enum",
							"containerType": "single",
							"object": "ERetroDebugMiniWindowAnchor",
							"description": "New Anchor of type EMiniWindowAnchor.",
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
		},
		{
			"category": "Retro Debug | Add Value Entry",
			"categoryNodes": [
				{
					"name": "K2_AddValueEntry",
					"comments": [
						"Adds new Entry Type of Value to RetroDebug.",
						"InPath MUST be set else error will be thrown in RetroDebugWindowWidget about empty path.",
						" Target is Retro Debug Sub System"
					],
					"functionTypes": [],
					"inputs": [
						{
							"name": "InPath",
							"dataType": "FName",
							"containerType": "single",
							"object": "FName",
							"description": "Path of this entry. Must NOT be empty.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InEvent",
							"dataType": "FRetroDebugObjectDynamicDelegate",
							"containerType": "single",
							"object": "FRetroDebugObjectDynamicDelegate",
							"description": "Delegate to call when need to update data.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InUpdateOnlyWhenOpened",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Only update value when debug menu is opened.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InAddToMiniDebug",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Add to MiniWidget on entry initialize.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InUpdateInterval",
							"dataType": "float",
							"containerType": "single",
							"object": "float",
							"description": "Frequency to update value.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InTooltip",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Tooltip for this entry.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRDExecCommand",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Console command to execute this entry.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRequireRDExecArgument",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Console command requires arguments",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InKeyMapping",
							"dataType": "struct",
							"containerType": "single",
							"object": "FInputActionKeyMapping",
							"description": "InPath                                 Path of this entry. Must NOT be empty.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InPersistent",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Does entry persist when level is changed?",
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
				}
			]
		},
		{
			"category": "Retro Debug | Add Toggle Entry",
			"categoryNodes": [
				{
					"name": "K2_AddToggleEntry",
					"comments": [
						"Adds new Entry Type of Toggle to RetroDebug.",
						"InPath MUST be set else error will be thrown in RetroDebugWindowWidget about empty path.",
						" Target is Retro Debug Sub System"
					],
					"functionTypes": [],
					"inputs": [
						{
							"name": "InPath",
							"dataType": "FName",
							"containerType": "single",
							"object": "FName",
							"description": "Path of this entry. Must NOT be empty.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InEvent",
							"dataType": "FRetroDebugObjectDynamicDelegate",
							"containerType": "single",
							"object": "FRetroDebugObjectDynamicDelegate",
							"description": "Delegate to call when need to update data.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InTooltip",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Tooltip for this entry",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRDExecCommand",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Console command to execute this entry.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRequireRDExecArgument",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Console command requires arguments",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InKeyMapping",
							"dataType": "struct",
							"containerType": "single",
							"object": "FInputActionKeyMapping",
							"description": "InPath                                 Path of this entry. Must NOT be empty.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InPersistent",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Does entry persist when level is changed?",
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
				}
			]
		},
		{
			"category": "Retro Debug | Add Slider Entry",
			"categoryNodes": [
				{
					"name": "K2_AddSliderEntry",
					"comments": [
						"Adds new Entry Type of Slider to RetroDebug.",
						"InPath MUST be set else error will be thrown in RetroDebugWindowWidget about empty path.",
						" Target is Retro Debug Sub System"
					],
					"functionTypes": [],
					"inputs": [
						{
							"name": "InPath",
							"dataType": "FName",
							"containerType": "single",
							"object": "FName",
							"description": "Path of this entry. Must NOT be empty.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InEvent",
							"dataType": "FRetroDebugObjectDynamicDelegate",
							"containerType": "single",
							"object": "FRetroDebugObjectDynamicDelegate",
							"description": "Delegate to call when need to update data.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRangeMin",
							"dataType": "float",
							"containerType": "single",
							"object": "float",
							"description": "Min value of Slider",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRangeMax",
							"dataType": "float",
							"containerType": "single",
							"object": "float",
							"description": "Max value of slider",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRangeStepAmount",
							"dataType": "int",
							"containerType": "single",
							"object": "int",
							"description": "How many steps slider has between Min and Max.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InTooltip",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Tooltip for this entry",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRDExecCommand",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Console command to execute this entry.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRequireRDExecArgument",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Console command requires arguments",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InKeyMapping",
							"dataType": "struct",
							"containerType": "single",
							"object": "FInputActionKeyMapping",
							"description": "InPath                                 Path of this entry. Must NOT be empty.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InPersistent",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Does entry persist when level is changed?",
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
				}
			]
		},
		{
			"category": "Retro Debug| Add Quick Entry",
			"categoryNodes": [
				{
					"name": "K2_AddEntryQuick",
					"comments": [
						"Adds new Entry Type of Value to RetroDebug.",
						"If QuickType is Custom whole Path will be used as entry location.",
						"If QuickType is AutoCategory, entry will be generated in `\"{UObjectClassName}/InEventName\"`",
						"If QuickType is Root, entry will be generated in root list.",
						" Target is Retro Debug Sub System"
					],
					"functionTypes": [],
					"inputs": [
						{
							"name": "Path",
							"dataType": "FName",
							"containerType": "single",
							"object": "FName",
							"description": "Custom Path for QuickType::CustomPath.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "QuickType",
							"dataType": "enum",
							"containerType": "single",
							"object": "ERetroDebugQuickType",
							"description": "Determines in which Path Entry will be generated.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InEvent",
							"dataType": "FRetroDebugObjectDynamicDelegate",
							"containerType": "single",
							"object": "FRetroDebugObjectDynamicDelegate",
							"description": "Dynamic Delegate to call when need to update data.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InTooltip",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Tooltip for this entry",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "AddToMini",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Add to Mini Debug. True by default.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRDExecCommand",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Console command to execute this entry.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRequireRDExecArgument",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Console command requires arguments",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InKeyMapping",
							"dataType": "struct",
							"containerType": "single",
							"object": "FInputActionKeyMapping",
							"description": "Path                                   Custom Path for QuickType::CustomPath.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InPersistent",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Does entry persist when level is changed?",
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
				}
			]
		},
		{
			"category": "Retro Debug | Add Entry",
			"categoryNodes": [
				{
					"name": "K2_AddEntry",
					"comments": [
						"Adds new Entry to RetroDebug.",
						" Target is Retro Debug Sub System"
					],
					"functionTypes": [],
					"inputs": [
						{
							"name": "InEntryData",
							"dataType": "struct",
							"containerType": "single",
							"object": "FRetroDebugEntry",
							"description": "Entry Data parameters.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InEvent",
							"dataType": "FRetroDebugObjectDynamicDelegate",
							"containerType": "single",
							"object": "FRetroDebugObjectDynamicDelegate",
							"description": "Delegate to call when need to update data.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRDExecCommand",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Console command to execute this entry.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRequireRDExecArgument",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Console command requires arguments",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InKeyMapping",
							"dataType": "struct",
							"containerType": "single",
							"object": "FInputActionKeyMapping",
							"description": "InEntryData                            Entry Data parameters.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InPersistent",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Does entry persist when level is changed?",
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
				}
			]
		},
		{
			"category": "Retro Debug | Add Button Entry Test",
			"categoryNodes": [
				{
					"name": "K2_AddButtonEntryTest",
					"comments": [
						"K2 Add Button Entry Test",
						" Target is Retro Debug Sub System"
					],
					"functionTypes": [],
					"inputs": [
						{
							"name": "InPath",
							"dataType": "FName",
							"containerType": "single",
							"object": "FName",
							"description": "",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InEvent",
							"dataType": "FRetroDebugObjectDynamicDelegate",
							"containerType": "single",
							"object": "FRetroDebugObjectDynamicDelegate",
							"description": "",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InTooltip",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRDExecCommand",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRequireRDExecArgument",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InKeyMapping",
							"dataType": "struct",
							"containerType": "single",
							"object": "FInputActionKeyMapping",
							"description": "",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InPersistent",
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
						"Public",
						"HasOutParms",
						"BlueprintCallable"
					]
				}
			]
		},
		{
			"category": "Retro Debug | Add Button Entry",
			"categoryNodes": [
				{
					"name": "K2_AddButtonEntry",
					"comments": [
						"Adds new Entry Type of Button to RetroDebug.",
						"InPath MUST be set else error will be thrown in RetroDebugWindowWidget about empty path.",
						" Target is Retro Debug Sub System"
					],
					"functionTypes": [],
					"inputs": [
						{
							"name": "InPath",
							"dataType": "FName",
							"containerType": "single",
							"object": "FName",
							"description": "Path of this entry. Must NOT be empty.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InEvent",
							"dataType": "FRetroDebugObjectDynamicDelegate",
							"containerType": "single",
							"object": "FRetroDebugObjectDynamicDelegate",
							"description": "Delegate to call when need to update data.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InTooltip",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Tooltip for this entry",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRDExecCommand",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Console command to execute this entry.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRequireRDExecArgument",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Console command requires arguments",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InKeyMapping",
							"dataType": "struct",
							"containerType": "single",
							"object": "FInputActionKeyMapping",
							"description": "InPath                                 Path of this entry. Must NOT be empty.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InPersistent",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Does entry persist when level is changed?",
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
				}
			]
		},
		{
			"category": "Retro Debug| Input",
			"categoryNodes": [
				{
					"name": "ForwardInput",
					"comments": [
						"Forwards input to RetroDebugMenuWindow",
						" Target is Retro Debug Sub System"
					],
					"functionTypes": [],
					"inputs": [
						{
							"name": "InKey",
							"dataType": "enum",
							"containerType": "single",
							"object": "ERetroDebugKey",
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
		},
		{
			"category": "Retro Debug | Add Command Entry",
			"categoryNodes": [
				{
					"name": "AddToggleCommandEntry",
					"comments": [
						"Adds new Toggle Command Entry to RetroDebug. Toggles value between 0 and 1 by default.",
						" Target is Retro Debug Sub System"
					],
					"functionTypes": [],
					"inputs": [
						{
							"name": "InPath",
							"dataType": "FName",
							"containerType": "single",
							"object": "FName",
							"description": "Path of this entry. Must NOT be empty.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InCommand",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Command to execute.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InTooltip",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Tooltip for this entry.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "MinValue",
							"dataType": "float",
							"containerType": "single",
							"object": "float",
							"description": "Min value for toggle. Default 0.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "MaxValue",
							"dataType": "float",
							"containerType": "single",
							"object": "float",
							"description": "Max value for toggle. Default 1.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InSuffix",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Suffix for entry. Some Unreal commands use space \" \" which is default value for InSuffix, but for example \"net pkt*\" command use \"=\".",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InKeyMapping",
							"dataType": "struct",
							"containerType": "single",
							"object": "FInputActionKeyMapping",
							"description": "InPath                                                 Path of this entry. Must NOT be empty.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InPersistent",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Does entry persist when level is changed?",
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
					"name": "AddSliderCommandEntry",
					"comments": [
						"Adds new Slider Command Entry to RetroDebug.",
						" Target is Retro Debug Sub System"
					],
					"functionTypes": [],
					"inputs": [
						{
							"name": "InPath",
							"dataType": "FName",
							"containerType": "single",
							"object": "FName",
							"description": "Path of this entry. Must NOT be empty.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InCommand",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Command to execute.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InTooltip",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Tooltip for this entry.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRangeMin",
							"dataType": "float",
							"containerType": "single",
							"object": "float",
							"description": "Min value of Slider",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRangeMax",
							"dataType": "float",
							"containerType": "single",
							"object": "float",
							"description": "Max value of slider",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InRangeStep",
							"dataType": "float",
							"containerType": "single",
							"object": "float",
							"description": "How many steps slider has between Min and Max.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InSuffix",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Suffix for entry. Some Unreal commands use space \" \" which is default value for InSuffix, but for example \"net pkt*\" command use \"=\".",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InKeyMapping",
							"dataType": "struct",
							"containerType": "single",
							"object": "FInputActionKeyMapping",
							"description": "InPath                                                 Path of this entry. Must NOT be empty.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InPersistent",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Does entry persist when level is changed?",
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
					"name": "AddCommandEntry",
					"comments": [
						"Adds new Command Entry to RetroDebug.",
						" Target is Retro Debug Sub System"
					],
					"functionTypes": [],
					"inputs": [
						{
							"name": "InCommandEntryData",
							"dataType": "struct",
							"containerType": "single",
							"object": "FRetroDebugCommandEntry",
							"description": "Command Entry Data parameters.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InKeyMapping",
							"dataType": "struct",
							"containerType": "single",
							"object": "FInputActionKeyMapping",
							"description": "InCommandEntryData                             Command Entry Data parameters.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InPersistent",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Does entry persist when level is changed?",
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
					"name": "AddButtonWithTimedExecute",
					"comments": [
						"Adds new Button Command Entry to RetroDebug.",
						"Executes InCommand after InTimeCommand has elapsed after triggering entry.",
						" Target is Retro Debug Sub System"
					],
					"functionTypes": [],
					"inputs": [
						{
							"name": "InPath",
							"dataType": "FName",
							"containerType": "single",
							"object": "FName",
							"description": "Path of this entry. Must NOT be empty.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InCommand",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Command to execute.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InTimedCommand",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Command to execute after TimeToExecute.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "TimeToExecute",
							"dataType": "int",
							"containerType": "single",
							"object": "int",
							"description": "Time to execute InTimeCommand",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InTooltip",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Tooltip for this entry.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InKeyMapping",
							"dataType": "struct",
							"containerType": "single",
							"object": "FInputActionKeyMapping",
							"description": "InPath                                                 Path of this entry. Must NOT be empty.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InPersistent",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Does entry persist when level is changed?",
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
					"name": "AddButtonCommandEntry",
					"comments": [
						"Adds new Button Command Entry to RetroDebug.",
						" Target is Retro Debug Sub System"
					],
					"functionTypes": [],
					"inputs": [
						{
							"name": "InPath",
							"dataType": "FName",
							"containerType": "single",
							"object": "FName",
							"description": "Path of this entry. Must NOT be empty.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InCommand",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Command to execute.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InTooltip",
							"dataType": "FString",
							"containerType": "single",
							"object": "FString",
							"description": "Tooltip for this entry.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InKeyMapping",
							"dataType": "struct",
							"containerType": "single",
							"object": "FInputActionKeyMapping",
							"description": "InPath                                                 Path of this entry. Must NOT be empty.",
							"comments": [],
							"defaultValue": "",
							"metas": []
						},
						{
							"name": "InPersistent",
							"dataType": "bool",
							"containerType": "single",
							"object": "bool",
							"description": "Does entry persist when level is changed?",
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
] 
export default { 
	Classes, 
	}
