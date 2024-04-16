const Components = [
    {
      className: 'Detection Component',
      url: "/docs/LXR/Classes/Detection",
      icon: "/lxr/icons/detection.png",
      videos: [
        "/lxr/floaters.mp4",
        "/lxr/disco.mp4",
        "/lxr/spot.mp4"
      ],
      bulletPoints: [
        "Provides precise and efficient detection of actors' visibility to light sources." ,
        "Accurately determines the degree of illumination and specific color received by each actor."
    ],
    },
    {
      className: 'Silhouette Component',
      url: "/docs/LXR/Classes/Silhouette",
      icon: "/lxr/icons/detection.png",
      videos: [
        "/lxr/silhouette/silhouette.mp4",
      ],
      bulletPoints: [
        "Offers advanced capabilities for detecting and responding to character silhouettes against light backgrounds.",
        "Enhances stealth-based gameplay mechanics and AI behavior."
    ],
    },
    {
      className: 'Sense Component',
      url: "/docs/LXR/Classes/Sensing",
      icon: "/lxr/icons/Sense.png",
      videos: [
        "/lxr/sense/newSense.mp4",
      ],
      bulletPoints: [
        "Enables actors to perceive and react to light sources within their environment.",
        "Adds depth and immersion to gameplay interactions."
    ],
    },
    {
      className: 'Memory Component',
      url: "/docs/LXR/Classes/Memory",
      icon: "/lxr/icons/Memory.png",
      videos: [
        "/lxr/memory/memory-sense.mp4",
      ],
      bulletPoints: [
        "Enhances AI intelligence by enabling retention and recall of environmental element states, particularly lights.",
        "AI entities can remember light statuses in specific locations, even after leaving and returning to the area."
    ],
    },
    
  ];

  export default {
    Components,
  };

    