const Delegates = [
{
	"name": "OnLightStateChanged",
	"description": "On Light State Changed  Delegate Signature",
	"comments": [],
	"data": [
		{
			"name": "OldLightState",
			"dataType": "enum",
			"containerType": "single",
			"object": "ELightState",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "NewLightState",
			"dataType": "enum",
			"containerType": "single",
			"object": "ELightState",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"MulticastDelegate",
		"Public",
		"Delegate"
	]
},
{
	"name": "OnSeenBySilhouette",
	"description": "Does this work?",
	"comments": [],
	"data": [
		{
			"name": "Detector",
			"dataType": "class",
			"containerType": "single",
			"object": "AActor*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"MulticastDelegate",
		"Public",
		"Delegate"
	]
},
{
	"name": "OnMemorizedLightStateChanged",
	"description": "On Memorized Light State Changed  Delegate Signature",
	"comments": [],
	"data": [
		{
			"name": "LightSourceComponent",
			"dataType": "class",
			"containerType": "single",
			"object": "ULXRSourceComponent*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "OldLightState",
			"dataType": "enum",
			"containerType": "single",
			"object": "ELightState",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "NewLightState",
			"dataType": "enum",
			"containerType": "single",
			"object": "ELightState",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"MulticastDelegate",
		"Public",
		"Delegate"
	]
},
{
	"name": "OnMemorizedLightComponentStateChanged",
	"description": "On Memorized Light Component State Changed  Delegate Signature",
	"comments": [],
	"data": [
		{
			"name": "LightSourceComponent",
			"dataType": "class",
			"containerType": "single",
			"object": "ULXRSourceComponent*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "LightComponent",
			"dataType": "class",
			"containerType": "single",
			"object": "ULightComponent*",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "OldLightComponentState",
			"dataType": "enum",
			"containerType": "single",
			"object": "ELightState",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "NewLightComponentState",
			"dataType": "enum",
			"containerType": "single",
			"object": "ELightState",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"MulticastDelegate",
		"Public",
		"Delegate"
	]
},
{
	"name": "OnQueryLXRDone",
	"description": "On Query LXRDone  Delegate Signature",
	"comments": [],
	"data": [
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
			"name": "PassedData",
			"dataType": "struct",
			"containerType": "TSet",
			"object": "FLightSourcePassedData",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": [
		"MulticastDelegate",
		"Public",
		"Delegate"
	]
},
];
const Structs = [
{
	"name": "FLightSourcePassedData",
	"description": "Data about passed light sources, light components and targets.",
	"comments": [
		"Not really usable in Blueprint."
	],
	"data": [],
	"flags": []
},
{
	"name": "TargetsLXR",
	"description": "Data about the final LXR",
	"comments": [],
	"data": [
		{
			"name": "TraceTargets",
			"dataType": "struct",
			"containerType": "TArray",
			"object": "FVector",
			"description": "ALL Trace Targets of this trace batch, not only passed ones.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "TargetsLXR",
			"dataType": "int:struct",
			"containerType": "TMap",
			"object": "int:FLXR",
			"description": "LXR amount of targets, key of map is index of TraceTargets array. Contains only passed targets.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "IlluminatedTargetsCount",
			"dataType": "int",
			"containerType": "single",
			"object": "int",
			"description": "Amount of illuminated targets",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		}
	],
	"flags": []
},
{
	"name": "QueryLXRDebugOptions",
	"description": "Query LXRDebug Options",
	"comments": [],
	"data": [
		{
			"name": "bDebugRelevancy",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
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
			"name": "bDebugVisibility",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
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
			"name": "bDebugLXR",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
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
			"name": "bDebugLXR_OnlyPassed",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
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
			"name": "DebugRelevancyDrawTime",
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
			"name": "DebugVisibilityDrawTime",
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
			"name": "DebugLXRDrawTime",
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
		}
	],
	"flags": []
},
{
	"name": "DominantColor",
	"description": "Dominant Color",
	"comments": [],
	"data": [
		{
			"name": "Color",
			"dataType": "enum",
			"containerType": "single",
			"object": "EDominantColor",
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
			"name": "ColorValue",
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
		}
	],
	"flags": []
},
{
	"name": "TraceTaskData",
	"description": "Trace Task Data",
	"comments": [],
	"data": [],
	"flags": []
},
];
const Enums = [
{
	"name": "EMethodToUse",
	"description": "Method to use for ignore visibility actors.",
	"comments": [],
	"data": [
		{
			"name": "Class",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Class",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Interface",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Interface",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "UObject",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "UObject",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": []
},
{
	"name": "ESocketPreset",
	"description": "Use preset sockets or custom one..",
	"comments": [],
	"data": [
		{
			"name": "UE4_Mannequin",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "UE5_Mannequin",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Custom",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": []
},
{
	"name": "ECheckQuality",
	"description": "Quality for Relevancy Check",
	"comments": [],
	"data": [
		{
			"name": "Low",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Medium",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "High",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Epic",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Custom",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": []
},
{
	"name": "ERelevancyCheckType",
	"description": "Method to use for checking if light is relevant",
	"comments": [],
	"data": [
		{
			"name": "Fixed",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Use property RelevancyCheckRate as check rate.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Smart",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Calculate rate from distance to light.",
			"comments": [
				"Lights will be categorized in three different category:",
				"Near: Distance to light is less than RelevancySmartDistanceMin, light will be checked 4 times in second.",
				"Mid: Distance to light is between RelevancySmartDistanceMin and RelevancySmartDistanceMax, light will be checked twice in second.",
				"Far: Distance to light is more than RelevancySmartDistanceMax, light will be checked every second."
			],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Octree",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Use octree to iterate nearby lights for relevancy defined by RelevancyCheckRate property.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": []
},
{
	"name": "ETraceTarget",
	"description": "Target type to use for detection.",
	"comments": [],
	"data": [
		{
			"name": "ActorLocation",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Owner Location.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Sockets",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Bones or sockets to use from skeletal mesh.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "VectorArray",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "TargetVectors property to use as targets.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "ActorBounds",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "six vectors from actor bounds. (Approximate of actor size)",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": []
},
{
	"name": "ETaskProcessType",
	"description": "Method to use for tracing checks.",
	"comments": [],
	"data": [
		{
			"name": "Sync",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Use Synchronous LineTrace for relevant light visibility checks",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Multithread",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Use separate thread for relevant traces",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": []
},
{
	"name": "EDominantColor",
	"description": "",
	"comments": [],
	"data": [
		{
			"name": "None",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Red",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Green",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Blue",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": []
},
{
	"name": "EMemoryCheckClass",
	"description": "Which class to use for Memory checks, either Detection or Sense.",
	"comments": [],
	"data": [
		{
			"name": "Detection",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Detection.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Sense",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Sense.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": []
},
{
	"name": "ETraceTransform",
	"description": "Location and Direction to use for the sense cone.",
	"comments": [],
	"data": [
		{
			"name": "Actor",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "AI Pawn Location.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "ActorEyesViewPoint",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Actor Eyes.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Socket",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Use Mesh Socket",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Custom",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Custom.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "MethodObject",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Method Object.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": []
},
{
	"name": "EEQSNormalizationType",
	"description": "Specifies how to determine value span used to normalize scores",
	"comments": [],
	"data": [
		{
			"name": "Absolute",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Use 0 as the base of normalization range.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "RelativeToScores",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Use lowest item score as the base of normalization range.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": []
},
];
export default { 
	Delegates,Structs,Enums 
}
