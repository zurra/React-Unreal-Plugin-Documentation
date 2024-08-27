const Nodes = [
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
] 
export default { 
	Nodes, 
}
