import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

// Project data structure
const projectsData = [
  {
    id: 1,
    title: "SYMBIONT",
    description: "Virtual Pet Health & Wellness Platform with gamified capybara pet, real-time animations, and XP progression. Nutrition tracking via text, barcode & OCR with Nutritionix API. AI health assistant using Google Gemini.",
    icon: "/src/assets/minecraft_potion.png",
    techStack: "React • Express.js • Firebase • Socket.IO • Google Gemini AI",
    github: "https://github.com/cupnoodles7/symbiont",
    demo: null
  },
  {
    id: 2,
    title: "Family Tree Visualizer",
    description: "Interactive family tree generator handling 50+ nodes with drag-and-drop. Dynamic node operations (add, edit, delete) reducing setup effort by 70%. 4-directional edge connections for complex family networks.",
    icon: "/src/assets/minecraft_oak_sapling.png",
    techStack: "React • React Flow",
    github: "https://github.com/Chida-singh/Family-tree-visualizer",
    demo: null
  },
  {
    id: 3,
    title: "Talk Tuah Therapist",
    description: "Mental health web platform with AI-powered chatbots and therapy modules. Real-time interactive support using Google Generative AI and speech recognition. Interactive UI with data visualization.",
    icon: "/src/assets/minecraft_enchanted_book.png",
    techStack: "Streamlit • Google Generative AI • Speech Recognition",
    github: "https://github.com/cupnoodles7/talk_tuah_therapist",
    demo: null
  },
  {
    id: 4,
    title: "English-to-Gloss Translator",
    description: "Custom training pipeline to fine-tune MarianMT on English-to-Gloss translation. Data preprocessing, dynamic tokenization with PyTorch GlossDataset. Logging, evaluation & checkpoint saving for model management.",
    icon: "/src/assets/minecraft_writable_book.png",
    techStack: "Python • PyTorch • Transformers • HuggingFace • MarianMT",
    github: "https://github.com/Chida-singh/gloss_translator",
    demo: null
  },
  {
    id: 5,
    title: "Telegram Placement Tracker",
    description: "Desktop tool monitoring placement updates, events & deadlines from Telegram in real-time. Regex-based classification and JSON storage. Multi-tab UI with filters and auto-refresh.",
    icon: "/src/assets/minecraft_observer.png",
    techStack: "Python • Tkinter • Telethon • JSON • Regex",
    github: "https://github.com/Chida-singh/Placement_summary",
    demo: null
  },
  {
    id: 6,
    title: "Multiplayer Tic Tac Toe",
    description: "Real-time two-player game with Socket.IO and Express. Client-server communication with game state sync and win/draw detection. Responsive UI with reset/rematch logic and cross-device support.",
    icon: "/src/assets/minecraft_crossbow.png",
    techStack: "Node.js • Express • Socket.IO • HTML/CSS",
    github: "https://github.com/Chida-singh/Multiplayer-Tic-Tac-Toe",
    demo: null
  },
  {
    id: 7,
    title: "Atmosphere Weather App",
    description: "Responsive weather web application with real-time data using WeatherAPI. Adaptive background gradients and debounce-based API calls. Dynamic front-end with Tailwind CSS.",
    icon: "/src/assets/minecraft_snowball.png",
    techStack: "HTML5 • Tailwind CSS • JavaScript • WeatherAPI",
    github: "https://github.com/Chida-singh/Weather_site",
    demo: null
  },
  {
    id: 8,
    title: "AR Ball Shooter Game",
    description: "AR game with plane detection and object interaction using AR Foundation. XR origins and session management for stable AR experiences. Reusable 3D prefabs and UI controls.",
    icon: "/src/assets/minecraft_target.png",
    techStack: "Unity • AR Foundation • C#",
    github: "https://github.com/Chida-singh/Ball_shooter_game",
    demo: null
  },
  {
    id: 9,
    title: "Traffic Management System",
    description: "Automated traffic signal controller based on real-time traffic density. AI techniques integrated with sensor data to optimize signal timing and improve efficiency.",
    icon: "/src/assets/minecraft_redstone_lamp.png",
    techStack: "Arduino • AI • Sensors",
    github: "https://github.com/Chida-singh/Density-Based-Traffic-Management",
    demo: null
  },
  {
    id: 10,
    title: "2D Mario Game",
    description: "Side-scrolling platformer with character controls and collectibles. Collision detection, enemy AI, and level progression. Game assets and animations following Unity best practices.",
    icon: "/src/assets/minecraft_red_mushroom.png",
    techStack: "Unity • C#",
    github: "https://github.com/Chida-singh/Mario",
    demo: null
  },
  {
    id: 11,
    title: "Word-to-Sign Animation",
    description: "Python pipeline animating sign language using SMPL-X 3D human model. Pose smoothing, blending, and real-time validation with PyTorch. Streamlit interface for rendering and concatenating animations.",
    icon: "/src/assets/minecraft_armor_stand.png",
    techStack: "Python • Streamlit • SMPL-X • PyTorch",
    github: "https://github.com/Chida-singh/asl_streaming_media",
    demo: null
  }
];

const MinecraftProjects = ({ mode = 'overworld' }) => {
  const [currentProject, setCurrentProject] = useState(0);
  const [hoveredSlot, setHoveredSlot] = useState(null);
  
  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
  };
  
  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
  };
  
  // Create inventory slots (5x5 grid = 25 slots)
  const renderInventorySlots = () => {
    const slots = [];
    
    for (let i = 0; i < 25; i++) {
      const project = projectsData[i];
      slots.push(
        <div 
          key={i} 
          className={`inventory-slot ${project ? 'has-item' : ''} ${currentProject === i ? 'selected' : ''}`}
          onClick={() => project && setCurrentProject(i)}
          onMouseEnter={() => setHoveredSlot(i)}
          onMouseLeave={() => setHoveredSlot(null)}
        >
          {project && (
            <>
              <div className="inventory-item">
                <img src={project.icon} alt={project.title} className="item-icon" />
              </div>
              {hoveredSlot === i && (
                <div className="item-tooltip">
                  {project.title}
                </div>
              )}
            </>
          )}
        </div>
      );
    }
    return slots;
  };
  const project = projectsData[currentProject];
  
  return (
    <div className={`minecraft-projects ${mode}`}>
      <h1 className="minecraft-section-title">MY PROJECTS</h1>
      
      <div className="minecraft-projects-container">
        {/* Left side - Inventory Grid */}
        <div className="minecraft-inventory">
          <div className="inventory-grid">
            {renderInventorySlots()}
          </div>
        </div>
        
        {/* Right side - Project Details */}
        <motion.div 
          className="minecraft-project-details"
          key={currentProject}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="project-display">
            <div className="project-icon-large">
              <img src={project.icon} alt={project.title} className="project-icon-img" />
            </div>
            <div className="project-title-section">
              <h2 className="project-name">{project.title}</h2>
              <p className="project-counter">
                Project {currentProject + 1} of {projectsData.length}
              </p>
            </div>
          </div>
          
          <div className="project-info-section">
            <div className="info-box">
              <div className="info-box-header">Description</div>
              <div className="info-box-content">
                {project.description}
              </div>
            </div>
            
            <div className="info-box">
              <div className="info-box-header">Tech Stack</div>
              <div className="info-box-content tech-stack">
                {project.techStack}
              </div>
            </div>
          </div>
          
          <div className="project-action-buttons">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="minecraft-action-button"
              >
                <span className="button-icon">⛏️</span>
                VIEW CODE
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="minecraft-action-button"
              >
                <span className="button-icon">🧭</span>
                LIVE DEMO
              </a>
            )}
          </div>
          
          <div className="pagination-controls">
            <button onClick={prevProject} className="nav-button">
              &lt; PREV
            </button>
            <span className="page-indicator">
              {currentProject + 1} / {projectsData.length}
            </span>
            <button onClick={nextProject} className="nav-button">
              NEXT &gt;
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MinecraftProjects;
