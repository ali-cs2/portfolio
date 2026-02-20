import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Photogrammetry-Based Digital Twin for Mar Mattai Monastery",
    shortDescription:
      "High-precision 3D reconstruction of a historic monastery using photogrammetry for cultural preservation.",
    fullDescription:
      "Developed a detailed digital twin of Mar Mattai Monastery using advanced photogrammetry techniques. The project focused on preserving cultural heritage through accurate 3D reconstruction and spatial modeling. It involved capturing real-world data, processing it into high-resolution 3D models, and optimizing it for visualization and research purposes.",
    tech: ["Photogrammetry", "3D Reconstruction", "RealityCapture / Metashape"],
    image: "placeholder_3d_monastery.jpg"
  },
  {
    title: "Virtual Tour System – University Environment",
    shortDescription:
      "Interactive 360° virtual tour allowing users to explore university spaces remotely.",
    fullDescription:
      "Built an immersive virtual tour system using 360-degree imaging technology. Users can navigate through university facilities with smooth transitions and interactive hotspots. The system enhances accessibility and provides a realistic digital experience of physical spaces.",
    tech: ["Insta360", "Virtual Tour Systems", "Web Integration"],
    image: "placeholder_virtual_tour.jpg"
  },
  {
    title: "University Library Management System",
    shortDescription:
      "Full system for managing book borrowing, tracking, and fines with admin dashboard.",
    fullDescription:
      "Developed a complete library management system that handles book inventory, borrowing operations, due tracking, and fines. Includes an administrative dashboard for managing users and books efficiently, with a scalable database structure.",
    tech: ["PHP", "MySQL", "WampServer", "JavaScript"],
    image: "placeholder_library_system.jpg"
  },
  {
    title: "NFC-Based Smart Library Access",
    shortDescription:
      "Smart borrowing system using NFC-based student identification for faster access.",
    fullDescription:
      "Designed a system that integrates NFC technology to allow students to borrow books using their university ID or mobile devices. The system improves speed, security, and automation within the library environment.",
    tech: ["NFC", "Backend Systems", "Database Integration"],
    image: "placeholder_nfc.jpg"
  },
  {
    title: "Offline Mosul Tourist Guide Application",
    shortDescription:
      "Offline mobile app providing maps and essential locations across Mosul.",
    fullDescription:
      "Designed an offline-first mobile application that includes archaeological sites, hospitals, hotels, and essential services in Mosul. The app integrates maps, images, and structured data for accessibility without internet connection.",
    tech: ["Java", "Offline Database", "GPS"],
    image: "placeholder_mosul_app.jpg"
  },
  {
    title: "AI-Powered University Assistant",
    shortDescription:
      "Local AI assistant for students with secure login and multi-user support.",
    fullDescription:
      "Developing a local AI system that assists students and staff with academic and administrative queries. The system integrates with university emails for authentication and uses local large language models to ensure privacy and scalability.",
    tech: ["Ollama", "LLMs", "Web Development"],
    image: "placeholder_ai.jpg"
  },
  {
    title: "DIY Photogrammetry Scanning Rig",
    shortDescription:
      "Custom-built multi-axis rig for high-quality scanning of documents and objects.",
    fullDescription:
      "Designed and planned a mechanical scanning rig with XY movement and future Z-axis support. The system is intended for high-precision image capture and photogrammetry workflows.",
    tech: ["Mechanical Design", "CNC", "Camera Systems"],
    image: "placeholder_rig.jpg"
  }
];
