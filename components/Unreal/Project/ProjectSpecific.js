const RelatedProperties = [
	{
		// Detection Component
		// ------------------
		name: "RelevancyCheckType",
		dataType: "enum",
		object: "ERelevancyCheckRate",
		info: [
			{
				infoName: "Smart",
				description: ["Light sources gets categorized by distance in either Far, Mid or Near categories.", "Categorizing uses ULXRDetectionComponent properties RelevancySmartDistanceMin and RelevancySmartDistanceMax."],
				infoType: "property",
				relevantProperties: [
					"RelevancySmartDistanceMin",
					"RelevancySmartDistanceMax",
					"RelevancySmartCheckRateDivider",
				]
			},
			{
				infoName: "Fixed",
				description: "Check all lights known lights for relevancy defined by RelevancyCheckRate property.",
				infoType: "property",
				relevantProperties: [
					"RelevancyCheckRate"
				]
			},
			{
				infoName: "Octree",
				description: "Use octree to iterate nearby lights for relevancy defined by RelevancyCheckRate property.",
				infoType: "property",
				relevantProperties: [
					"RelevancyCheckRate",
					"RelevancyOctreeCheckBoundsSize"
				]
			}
		]
	},
	{
		// Detection Component
		// ------------------
		name: "SocketPreset",
		dataType: "enum",
		object: "ESocketPreset",
		info: [
			{
				infoName: "Custom",
				description: [],
				infoType: "property",
				relevantProperties: [
					"TargetSockets",
				]
			}
		]
	},
];

const CategoryPriorities = [
	{
		category: "LXR|Detection",
		priority: "0"
	},
	{
		category: "LXR|Detection|Relevancy",
		priority: "4"
	},
	{
		category: "LXR|Detection|Relevancy|Quality",
		priority: "5"
	},
	{
		category: "LXR|Detection|Relevant",
		priority: "8"
	},
	{
		category: "LXR|Detection|Relevant|Quality",
		priority: "9"
	},
	{
		category: "LXR|Detection|Debug",
		priority: "100"
	},
	{
		category: "LXR|Detection|Directional Light",
		priority: "40"
	},

];

const NodeExamples = [
	{
		name: "Get Combined LXR Intensity",
		comments: ["Combined LXR Intensity is light intensity from all targets combined to one value."],
		example:
		{
			url: "https://blueprintue.com/render/k1n8dpyc/",
			comments: ["Example Comment", "Multi-Line", "Comment"],
		},
	}
];

export default {
	RelatedProperties, CategoryPriorities, NodeExamples
}
