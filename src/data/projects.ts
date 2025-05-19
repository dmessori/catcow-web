type Project = {
  title: string;
  year: string;
  description: string;
  video: string;
  thumbnail: string;
  images: string[];
  extraVideos: string[];
  nextProject: {
    slug: string;
    title: string;
  };
};

export const projects: { [key: string]: Project } = {
  vitalant: {
    title: "Vitalant – Every 2 Seconds",
    year: "2025",
    description: "We partnered with Vitalant to bring urgency...",
    video: "/videos/projects/vitalant/vitalant_part1.mp4",
    thumbnail: "/images/NBX_thumb.png",
    images: [
      "/images/projects/vitalant/Vitalant_storyboard-32.png",
      "/images/projects/vitalant/scene_01.png",
      "/images/projects/vitalant/scene_02.png",
      "/images/projects/vitalant/scene_04.png",
      "/images/projects/vitalant/scene_03.png",
      "/images/projects/vitalant/scene_06.png",
      "/images/projects/vitalant/styleframe_all.png",
      "/images/projects/vitalant/Vita_01.png",
      "/images/projects/vitalant/vita_02.png",
      "/images/projects/vitalant/Vita_04.png",
      "/images/projects/vitalant/Vita_05.png",
      "/images/projects/vitalant/transition_A.png",
      "/images/projects/vitalant/Vita_06.png",
    ],
    extraVideos: [
      "/videos/projects/vitalant/Vitalant_timming_story_v02.mp4",
      "/videos/projects/vitalant/vitalant-reel.mp4",
    ],
    nextProject: {
      slug: "fior-di-maso",
      title: "Fior di Maso"
    }
  },

  "fior-di-maso": {
    title: "Fior di Maso – Rebranding",
    year: "2025",
    description: "We helped Fior di Maso modernize their brand while preserving tradition. With warm pastels and rustic textures, this rebrand is a balance of charm and clarity.",
    thumbnail: "/images/fior_de_maso.png",
    video: "/videos/fior_teaser.mp4",
    extraVideos: [],
    
    images: [
      "/images/fior_1.png",
      "/images/fior_2.png",
      "/images/fior_3.png"
    ],
    nextProject: {
      slug: "vitalant",
      title: "Vitalant – Every 2 Seconds"
    }
  },

  "blueheart": {
    title: "Blueheart – Relationship Health",
    year: "2023",
    description: "We collaborated with Blueheart to visualize the emotional depth of modern relationships through calming motion, soft palettes, and thoughtful transitions.",
    thumbnail: "/images/blueheart-thumb.jpg",
    extraVideos: [],
    video: "/videos/blueheart_intro.mp4",
    images: [
      "/images/blueheart_01.png",
      "/images/blueheart_02.png"
    ],
    nextProject: {
      slug: "fubo",
      title: "Fubo.tv"
    }
  },

  "fubo": {
    title: "Fubo.tv – Sports Streaming Launch",
    year: "2023",
    description: "We helped Fubo create an immersive brand launch for their sports streaming platform, combining high-action visuals with intuitive UI animation.",
    thumbnail: "/images/fubo_thumb.jpg",
    extraVideos: [],
    video: "/videos/fubo_reel.mp4",
    images: [
      "/images/fubo_01.png",
      "/images/fubo_02.png"
    ],
    nextProject: {
      slug: "amfam",
      title: "American Family Insurance"
    }
  },

  "NBX": {
    title: "NBX",
    year: "2022",
    description: "A visual journey through the biotech ecosystem in Wisconsin, showcasing innovation, diversity, and future-forward initiatives.",
    thumbnail: "/images/NBX_thumb.png",
    extraVideos: [],
    video: "/videos/nbx_showreel.mp4",
    images: [
      "/images/nbx_01.jpg"
    ],
    nextProject: {
      slug: "bluetree",
      title: "Bluetree"
    }
  },

  "amfam": {
    title: "American Family Insurance – Animated PSA",
    year: "2023",
    description: "A heartwarming PSA campaign crafted in animation, promoting care and protection using smart home devices and heartfelt storytelling.",
    thumbnail: "/images/amfam_catcow.png",
    extraVideos: [],
    video: "/videos/amfam_main.mp4",
    images: [
      "/images/amfam_01.png"
    ],
    nextProject: {
      slug: "convey",
      title: "Convey"
    }
  },

  "convey": {
    title: "Convey – SaaS Explainer",
    year: "2023",
    description: "We broke down Convey’s complex software into a playful and clear animated explainer using character-driven narrative and UI-driven transitions.",
    thumbnail: "/images/convey-thumb.gif",
    extraVideos: [],
    video: "/videos/convey_demo.mp4",
    images: [
      "/images/convey_01.png",
      "/images/convey_02.png"
    ],
    nextProject: {
      slug: "sling-nfl",
      title: "Sling NFL"
    }
  },

  "BioForward": {
    title: "BioForward",
    year: "2022",
    description: "BioForward’s annual member conference got a bold refresh with our cinematic opener—showcasing breakthroughs in biotech, pharma, and digital health.",
    thumbnail: "/images/bio_1.jpg",
    extraVideos: [],
    video: "/videos/bioforward_intro.mp4",
    images: [
      "/images/bio_02.jpg"
    ],
    nextProject: {
      slug: "cologuard",
      title: "Cologuard"
    }
  }
};
