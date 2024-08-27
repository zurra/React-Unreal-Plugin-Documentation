const Delegates = [
{
	"name": "OnSeenBySilhouette",
	"comments": [
		"On Seen by Silhouette  Delegate Signature"
	],
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
	"name": "OnLightStateChanged",
	"comments": [
		"On Light State Changed  Delegate Signature"
	],
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
	"name": "OnLightComponentStateChanged",
	"comments": [
		"On Light Component State Changed  Delegate Signature"
	],
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
	"name": "OnMemorizedLightStateChanged",
	"comments": [
		"On Memorized Light State Changed  Delegate Signature"
	],
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
	"comments": [
		"On Memorized Light Component State Changed  Delegate Signature"
	],
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
];
const Structs = [
];
const Enums = [
{
	"name": "ESocketPreset",
	"comments": [
		"Use preset sockets or custom one.."
	],
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
	"comments": [
		"Quality for Relevant Check"
	],
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
	"comments": [
		"Method to use for checking if light is relevant"
	],
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
			"description": "Calculate rate from distance to light.\nLights will be categorized in three different category:\nNear: Distance to light is less than RelevancySmartDistanceMin, light will be checked 4 times in second.\nMid: Distance to light is between RelevancySmartDistanceMin and RelevancySmartDistanceMax, light will be checked twice in second.\nFar: Distance to light is more than RelevancySmartDistanceMax, light will be checked every second.",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "Octree",
			"dataType": "EnumValue",
			"containerType": "",
			"object": "",
			"description": "Lights",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	],
	"flags": []
},
{
	"name": "ETraceTarget",
	"comments": [
		"Target type to use for detection."
	],
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
	"comments": [
		"Method to use for tracing checks."
	],
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
	"name": "EMemoryCheckClass",
	"comments": [
		"Which class to use for Memory checks, either Detection or Sense."
	],
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
];
export default { 
	Delegates,Structs,Enums 
}
