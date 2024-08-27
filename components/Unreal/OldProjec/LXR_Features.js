const FeatureList = [
  {
    title: 'Multi-threaded Optimization',
    url: "",
    icon: "/lxr/icons/detection.png",
    videos: ["/lxr/mt/mt2.mp4"],
    bulletPoints: [
      "Leverages multi-threading techniques for lightning-fast performance.",
      "Dynamically optimizes check intervals based on distance, maximizing efficiency without sacrificing accuracy."
    ],
  },
  {
    title: 'Physically-based Illuminance Calculation',
    url: "",
    icon: "/lxr/icons/detection.png",
    videos: ["/lxr/logo-anim.gif"
    ],
    bulletPoints: [
      "Calculates illuminance (lux) based on physically-based lighting principles.",
    ],
  },
  {
    title: ' Environmental Query System (EQS) Integration',
    url: "/docs/LXR/Classes/EQS/LXR",
    icon: "/lxr/icons/detection.png",
    videos: [
      "/lxr/mt/mt3.mp4"
    ],
    bulletPoints: [
      "Seamlessly integrates with Unreal Engine's Environmental Query System (EQS).",
      "Allows querying of environmental data such as illuminated intensity and color at any location within the game world."
    ],
  },
  {
    title: 'Octree Support',
    url: "/docs/LXR/Classes/Octree",
    icon: "/lxr/icons/detection.png",
    videos: [
      "/lxr/mt/mt1.mp4"
    ],
    bulletPoints: [
      "Enables extremely fast queries for nearby light sources and other LXR actors.",
      "Enhances performance and efficiency in large-scale environments."
    ],
  },
  {
    title: 'Lumen Support',
    url: "/docs/LXR/Classes/Indirect Detection",
    icon: "/lxr/icons/detection.png",
    videos: [
      "/lxr/indirect/indirect.mp4"
    ],
    bulletPoints: [
      "Seamlessly integrates with Lumen, Unreal Engine 5's real-time global illumination system.",
      "Enables detection of indirect light intensity and color, enhancing realism in lighting effects."
    ],
  },
  {
    title: "Easy to Debug",
    url: "",
    icon: "",
    videos: ["/lxr/logo-anim.gif"],
    bulletPoints: [
      "Clear Log Messages: LXR provides clear and informative log messages, making it easy to understand what is happening within the plugin and aiding in identifying potential issues.",
      "Visual Debugging Tools: The LXR offers visual debugging tools, debug visualization of light sources and their interactions with actors, allowing developers to quickly identify and diagnose problems.",
      "Built-in Debugging Commands: LXR includes built-in console commands that developers can use to troubleshooting and experimentation.",
      "Comprehensive Documentation: LXR comes with comprehensive documentation that explains plugin functionality, usage, and troubleshooting tips."
    ]

  }


];

export default {
  FeatureList,
};

