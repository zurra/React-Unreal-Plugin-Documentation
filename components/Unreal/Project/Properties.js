const Properties = [
{
	"className": "LXRDetectionComponent",
	"properties": [
		{
			"name": "DebugOptions",
			"dataType": "struct",
			"containerType": "single",
			"object": "FQueryLXRDebugOptions",
			"description": "Render debug shapes, also needs to be enabled on Light Source Component.",
			"comments": [
				"UPROPERTY(BlueprintReadWrite, EditAnywhere, Category=\"LXR|Detection|Debug\")",
				"bool bDrawDebug = false;"
			],
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
			"name": "SkeletalMeshComponent",
			"dataType": "struct",
			"containerType": "single",
			"object": "FComponentReference",
			"description": "Which Skeletal Mesh Component use if many are present.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_NativeAccessSpecifierPublic"
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
			"name": "TargetSockets",
			"dataType": "FName:float",
			"containerType": "TMap",
			"object": "FName:float",
			"description": "Bones or sockets to use as detection targets",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_BlueprintReadOnly",
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
				"CPF_BlueprintVisible",
				"CPF_BlueprintReadOnly",
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
			"name": "LuxValueSmoothSpeed",
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
			"name": "LuxReturnType",
			"dataType": "enum",
			"containerType": "single",
			"object": "ELuxReturnType",
			"description": "Determines how Lux capture data is summarized.",
			"comments": [
				"Choose between averaging all sockets, only lit sockets, taking the brightest value, or using socket-specific importance weighting."
			],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "GetWeightedAverage",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "WeightToUseAboveMinLuxThreshold",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "WeightedMinLuxThreshold",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "Lux amount target must have to be considered as valid for Lux calculation",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "MinLuxThreshold",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "Lux amount target must have to be considered as valid for Lux calculation",
			"comments": [
				"Used for Weighted Socket"
			],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "MinimumCoveragePercent",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "% of lit sockets required",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "LowCoveragePenaltyMultiplier",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "Multiplier if low coverage",
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
				"CPF_BlueprintVisible",
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
			"name": "IgnoreVisibilityActors",
			"dataType": "class",
			"containerType": "TArray",
			"object": "TObjectPtr<AActor>",
			"description": "List of actors to ignore when checking visibility.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Edit",
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic",
				"CPF_ExperimentalOverridableLogic"
			]
		},
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
		},
		{
			"name": "MemoryComponent",
			"dataType": "class",
			"containerType": "single",
			"object": "TObjectPtr<ULXRMemoryComponent>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPrivate",
				"CPF_ExperimentalOverridableLogic"
			]
		},
		{
			"name": "LXRSubsystem",
			"dataType": "class",
			"containerType": "single",
			"object": "TObjectPtr<ULXRSubsystem>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPrivate",
				"CPF_ExperimentalOverridableLogic"
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
			"name": "RealSkeletalMeshComponent",
			"dataType": "class",
			"containerType": "single",
			"object": "TObjectPtr<USkeletalMeshComponent>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPrivate",
				"CPF_ExperimentalOverridableLogic"
			]
		}
	]
},
{
	"className": "LXRSourceComponent",
	"properties": [
		{
			"name": "bDrawDebug",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "Should LightDetection component show debug about this light source actor.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
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
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "bEnableLightSense",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "This actor can be sensed by light sense component",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "bIsMemorizable",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "This actor can be memorized by memory  component",
			"comments": [],
			"defaultValue": "",
			"metas": [
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
				"CPF_BlueprintReadOnly",
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
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "DetectedActors",
			"dataType": "class",
			"containerType": "TArray",
			"object": "TObjectPtr<AActor>",
			"description": "List of Detected actors.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic",
				"CPF_ExperimentalOverridableLogic"
			]
		},
		{
			"name": "IgnoreVisibilityActors",
			"dataType": "class",
			"containerType": "TArray",
			"object": "TObjectPtr<AActor>",
			"description": "List of actors to ignore when checking visibility.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic",
				"CPF_ExperimentalOverridableLogic"
			]
		},
		{
			"name": "MyLightComponents",
			"dataType": "class",
			"containerType": "TArray",
			"object": "TObjectPtr<ULightComponent>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_BlueprintReadOnly",
				"CPF_Protected",
				"CPF_ExperimentalOverridableLogic"
			]
		},
		{
			"name": "MyOverlappingActors",
			"dataType": "class",
			"containerType": "TArray",
			"object": "TObjectPtr<AActor>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Protected",
				"CPF_ExperimentalOverridableLogic"
			]
		},
		{
			"name": "MethodObject",
			"dataType": "class",
			"containerType": "single",
			"object": "TObjectPtr<ULXRMethodObject>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_Protected",
				"CPF_ExperimentalOverridableLogic"
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
				"CPF_Protected"
			]
		},
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
				"CPF_Protected"
			]
		}
	]
},
{
	"className": "LXRFluxLightDetectorComponent",
	"properties": [
		{
			"name": "bCaptureIndirect",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "bCaptureDirect",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "bUseLuminanceThreshold",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "LuminanceThreshold",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "SmoothMethod",
			"dataType": "TEnumAsByte<ESmoothMethod>",
			"containerType": "single",
			"object": "TEnumAsByte<ESmoothMethod>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "TargetValueSmoothSpeed",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "HistoryCount",
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
			"name": "RequiredStableFrames",
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
			"name": "DeltaThreshold",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "bWhitelistAllStaticMeshActors",
			"dataType": "bool",
			"containerType": "single",
			"object": "bool",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "WhiteListTag",
			"dataType": "FString",
			"containerType": "single",
			"object": "FString",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "CaptureMeshScale",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "TopCaptureWeight",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "BotCaptureWeight",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "CaptureRate",
			"dataType": "int",
			"containerType": "single",
			"object": "int",
			"description": "How frequently to perform lighting captures (in frames). 1 = every frame, 2 = every second frame, etc.",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "AutoExposureBias",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "Logarithmic adjustment for the exposure.",
			"comments": [
				"0: no adjustment, -1:2x darker, -2:4x darker, 1:2x brighter, 2:4x brighter, ..."
			],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
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
				"CPF_BlueprintVisible",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "TopRT",
			"dataType": "class",
			"containerType": "single",
			"object": "TObjectPtr<UTextureRenderTarget2D>",
			"description": "Override default Top Render Texture",
			"comments": [
				"Default RTF_RGBA8 RenderTextureSize*RenderTextureSize"
			],
			"defaultValue": "",
			"metas": [
				"CPF_BlueprintVisible",
				"CPF_BlueprintReadOnly",
				"CPF_NativeAccessSpecifierPublic",
				"CPF_ExperimentalOverridableLogic"
			]
		},
		{
			"name": "BotRT",
			"dataType": "class",
			"containerType": "single",
			"object": "TObjectPtr<UTextureRenderTarget2D>",
			"description": "Override default Bot Render Texture",
			"comments": [
				"Default RTF_RGBA8 RenderTextureSize*RenderTextureSize"
			],
			"defaultValue": "",
			"metas": [
				"CPF_BlueprintVisible",
				"CPF_BlueprintReadOnly",
				"CPF_NativeAccessSpecifierPublic",
				"CPF_ExperimentalOverridableLogic"
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
			"name": "TopLuminance",
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
			"name": "BotLuminance",
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
			"name": "Color",
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
			"name": "TopColor",
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
			"name": "BotColor",
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
			"object": "TObjectPtr<USceneCaptureComponent2D>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPrivate",
				"CPF_ExperimentalOverridableLogic"
			]
		},
		{
			"name": "BotSceneCaptureComponent",
			"dataType": "class",
			"containerType": "single",
			"object": "TObjectPtr<USceneCaptureComponent2D>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPrivate",
				"CPF_ExperimentalOverridableLogic"
			]
		},
		{
			"name": "ChildActorComponent",
			"dataType": "class",
			"containerType": "single",
			"object": "TObjectPtr<UChildActorComponent>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPrivate",
				"CPF_ExperimentalOverridableLogic"
			]
		},
		{
			"name": "IndirectMeshComponent",
			"dataType": "class",
			"containerType": "single",
			"object": "TObjectPtr<UStaticMeshComponent>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPrivate",
				"CPF_ExperimentalOverridableLogic"
			]
		},
		{
			"name": "SceneCaptures",
			"dataType": "class",
			"containerType": "TArray",
			"object": "TObjectPtr<USceneCaptureComponent2D>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPrivate",
				"CPF_ExperimentalOverridableLogic"
			]
		},
		{
			"name": "IndirectMatInst",
			"dataType": "class",
			"containerType": "single",
			"object": "TObjectPtr<UMaterialInstanceDynamic>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPrivate",
				"CPF_ExperimentalOverridableLogic"
			]
		}
	]
},
{
	"className": "LXRSubsystem",
	"properties": [
		{
			"name": "LightSources",
			"dataType": "TWeakObjectPtr<AActor>",
			"containerType": "TArray",
			"object": "TWeakObjectPtr<AActor>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "DetectionOwners",
			"dataType": "TWeakObjectPtr<AActor>",
			"containerType": "TArray",
			"object": "TWeakObjectPtr<AActor>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "LXRActorsNotInOctreeYetBuffer",
			"dataType": "TWeakObjectPtr<AActor>",
			"containerType": "TArray",
			"object": "TWeakObjectPtr<AActor>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		},
		{
			"name": "DetectionDebugWidget",
			"dataType": "TWeakObjectPtr<UUserWidget>",
			"containerType": "single",
			"object": "TWeakObjectPtr<UUserWidget>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": []
		}
	]
},
{
	"className": "LXRDebugSubsystem",
	"properties": [
		{
			"name": "CanvasWidget",
			"dataType": "class",
			"containerType": "single",
			"object": "TObjectPtr<UULXRDebugCanvasWidget>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_ExperimentalOverridableLogic"
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
				"CPF_Edit",
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
				"CPF_NativeAccessSpecifierPublic"
			]
		},
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
				"CPF_NativeAccessSpecifierPublic"
			]
		}
	]
},
{
	"className": "LXRLightSenseComponent",
	"properties": [
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
				"CPF_NativeAccessSpecifierPublic"
			]
		},
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
			"name": "CombinedLXRColor",
			"dataType": "struct",
			"containerType": "single",
			"object": "FLinearColor",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "CombinedLXRIntensity",
			"dataType": "float",
			"containerType": "single",
			"object": "float",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
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
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "MethodObject",
			"dataType": "class",
			"containerType": "single",
			"object": "TObjectPtr<ULXRMethodObject>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_ExperimentalOverridableLogic"
			]
		}
	]
},
{
	"className": "LXRSilhouetteDetectionComponent",
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
		},
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
			"name": "LXRSubsystem",
			"dataType": "class",
			"containerType": "single",
			"object": "TObjectPtr<ULXRSubsystem>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_ExperimentalOverridableLogic"
			]
		},
		{
			"name": "MethodObject",
			"dataType": "class",
			"containerType": "single",
			"object": "TObjectPtr<ULXRMethodObject>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_ExperimentalOverridableLogic"
			]
		}
	]
},
{
	"className": "QueryLXRTask",
	"properties": [
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
			"object": "TObjectPtr<UObject>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_ExperimentalOverridableLogic"
			]
		},
		{
			"name": "Lights",
			"dataType": "class",
			"containerType": "TArray",
			"object": "TObjectPtr<AActor>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_ExperimentalOverridableLogic"
			]
		}
	]
},
{
	"className": "EnvQueryTest_LXR",
	"properties": [
		{
			"name": "DebugOptions",
			"dataType": "struct",
			"containerType": "single",
			"object": "FQueryLXRDebugOptions",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
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
				"CPF_AdvancedDisplay",
				"CPF_NativeAccessSpecifierPrivate"
			]
		},
		{
			"name": "Context",
			"dataType": "class",
			"containerType": "single",
			"object": "TSubclassOf<UEnvQueryContext>",
			"description": "",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_NativeAccessSpecifierPrivate"
			]
		},
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
			"name": "TestPurpose",
			"dataType": "TEnumAsByte<EEnvTestPurpose",
			"containerType": "single",
			"object": ":Type>:TEnumAsByte<EEnvTestPurpose::Type>",
			"description": "The purpose of this test.  Should it be used for filtering possible results, scoring them, or both?",
			"comments": [],
			"defaultValue": "",
			"metas": [
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
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "MultipleContextFilterOp",
			"dataType": "TEnumAsByte<EEnvTestFilterOperator",
			"containerType": "single",
			"object": ":Type>:TEnumAsByte<EEnvTestFilterOperator::Type>",
			"description": "Determines filtering operator when context returns multiple items",
			"comments": [],
			"defaultValue": "",
			"metas": [
				"CPF_AdvancedDisplay",
				"CPF_NativeAccessSpecifierPublic"
			]
		},
		{
			"name": "MultipleContextScoreOp",
			"dataType": "TEnumAsByte<EEnvTestScoreOperator",
			"containerType": "single",
			"object": ":Type>:TEnumAsByte<EEnvTestScoreOperator::Type>",
			"description": "Determines scoring operator when context returns multiple items",
			"comments": [],
			"defaultValue": "",
			"metas": [
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
] 
export default { 
	Properties, 
	}
