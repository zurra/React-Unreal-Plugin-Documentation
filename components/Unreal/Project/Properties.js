const Properties = [
{
	"className": "LXRDetectionComponent",
	"properties": [
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
		},
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
		},
		{
			"name": "CombinedLXRColor",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "Combined LXR color from all received LXR Sources",
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
			"description": "Combined LXR intensity from all received LXR Sources",
			"comments": [],
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
			"name": "OnSeenBySilhouette",
			"dataType": "delegate",
			"containerType": "single",
			"object": "FOnSeenBySilhouette",
			"description": "Broadcasts when this Detection component is seen by silhouette component.",
			"comments": [
				"Blueprint Assignable event",
				"@return Detector : Detector Actor with silhouette component."
			],
			"defaultValue": "",
			"metas": [
				"CPF_BlueprintAssignable",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
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
		},
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
		}
	]
},
{
	"className": "LXRMemoryComponent",
	"properties": [
		{
			"name": "bDrawDebug",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "Render debug shapes.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit"
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
				"CPF_Edit"
			]
		},
		{
			"name": "OnLightStateChanged",
			"dataType": "delegate",
			"containerType": "single",
			"object": "FOnMemorizedLightStateChanged",
			"description": "Broadcasts when any Light Component state changes.",
			"comments": [
				"Blueprint Assignable event",
				"@return LightSourceComponent : Changed Source Component",
				"@return OldLightState : Old state",
				"@return NewLightState : New state"
			],
			"defaultValue": "",
			"metas": [
				"CPF_BlueprintAssignable"
			]
		},
		{
			"name": "OnLightComponentStateChanged",
			"dataType": "delegate",
			"containerType": "single",
			"object": "FOnMemorizedLightComponentStateChanged",
			"description": "Broadcasts when Source Component state changes.",
			"comments": [
				"Blueprint Assignable event",
				"@return LightSourceComponent : Changed Source Component",
				"@return LightComponent : Changed Light component on Source actor",
				"@return OldLightComponentState : Old state",
				"@return NewLightComponentStat : New state"
			],
			"defaultValue": "",
			"metas": [
				"CPF_BlueprintAssignable"
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
				"CPF_Edit"
			]
		}
	]
},
] 
export default { 
	Properties, 
	}
