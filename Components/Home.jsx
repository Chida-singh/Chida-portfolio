import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Home.css';

const Home = ({ mode = 'overworld' }) => {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);
  
  const greetings = [
    "Hello", "こんにちは", "Bonjour", "Hola", "Ciao", 
    "Namaste", "你好", "안녕하세요", "Olá", "Привет"
  ];

  const roles = [
    "Full-Stack Developer 👨‍💻",
    "UI/UX Designer 🎨",
    "Coffee Addict ☕",
    "Bug Creator 🐛",
    "Stack Overflow Copy-Paster 📋",
    "Professional Googler 🔍",
    "Code Wizard 🧙‍♂️",
    "Console.log() Enthusiast 📟"
  ];

  // Cycle through greetings
  useEffect(() => {
    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2500);

    return () => clearInterval(greetingInterval);
  }, []);

  // Cycle through roles
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(roleInterval);
  }, []);

  return (
    <div className={`home-container ${mode}`}>
      {/* Greeting */}
      <motion.div 
        className="greeting-box"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGreeting}
            className="greeting-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {greetings[currentGreeting]}! 👋
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Main Title */}
      <motion.h1 
        className="minecraft-title"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I'M CHIDA
      </motion.h1>
      
      {/* Rotating Role */}
      <motion.div
        className="role-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <AnimatePresence mode="wait">
          <motion.h2
            key={currentRole}
            className="minecraft-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {roles[currentRole]}
          </motion.h2>
        </AnimatePresence>
      </motion.div>

      {/* Fun Stats */}
      <motion.div
        className="stats-bar"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <div className="stat-item">
          <span className="stat-icon">☕</span>
          <span className="stat-value">∞</span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">🐛</span>
          <span className="stat-value">404</span>
        </div>
        <div className="stat-item">
          <span className="stat-icon">💻</span>
          <span className="stat-value">24/7</span>
        </div>
      </motion.div>

      {/* Quote */}
      <motion.div
        className="quote-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <p className="quote-text">
          "It's not a bug, it's a feature!"
        </p>
      </motion.div>
    </div>
  );
};

export default Home;