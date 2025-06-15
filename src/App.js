import img1 from './images/1.jpg';
import img4 from './images/4.jpg';
import img9 from './images/9.jpg';
import img11 from './images/11.jpg';
import img15 from './images/15.png';
import img14 from './images/14.png';
import img16 from './images/16.png';
import img17 from './images/17.png';
import React from 'react';
function App() {
  const projects = [
    {
      title: "Deadly Jokes",
      description: "A puzzle / parkour type game which I worked as product owner, developer and 3d artist at Bootcamp. We participated in the final qualifiers by entereing the top 14 among 300+ teams.",
      link: "https://github.com/damlaalim/bootcamp-12",
      image: "https://img.youtube.com/vi/kv4C_Ic69SM/0.jpg",
      video: "https://www.youtube.com/watch?v=kv4C_Ic69SM"
    },
      {
    title: "Bee Hero",
    description: `A game developed by two developers and three designers during a two-day game jam. 
The game consists of three stages: collecting pollen and playing mini-games; protecting the pollen from threats like acid rain, rocks, and wood; and placing the pollen into the hive. 
Built using Unity, Cinemachine, and DOTween.`,
    image: img4,
    link: "https://github.com/roketrig/GameAppJam",
    demo: "https://roketrig.itch.io/beehero"
  },
  {
    title: "Time Traveler",
    description: `Created by two developers and one designer in a 48-hour AI-themed game jam. 
Players travel through time to explore different versions of a war-torn planet, before and after events like civil wars or environmental collapse. 
Each state is unlocked via quests and stones found throughout the journey. 
Developed with Unity, Cinemachine, and DOTween.`,
    image: img1,
    link: "https://github.com/yourusername/time-traveler",
  },
  {
    title: "Car-Toon (In Progress)",
    image: img9,
    description: `One of my earliest game prototypes, currently being adapted for mobile platforms. 
The player controls a yellow car with the left finger and targets enemies with the right. 
The car automatically crashes into selected enemies, mixing racing and idle mechanics.`,
  },
  {
    title: "Asteroid Miner",
    description: `An idle-defense game set in space. A robotic arm collects materials (e.g., diamond, ruby, silver), which are processed into bullets for turret defense. 
Players can upgrade their turrets and character stats (speed, loot, capacity), and optionally control a drone to join battles against waves of UFOs. 
Includes progression mechanics and production systems.`,
    image: img11,
    link: "https://drive.google.com/drive/folders/1nZlzRyzhcFkuw4yDefvGZ7_SpUsNM4G5?usp=drive_link",
  },
  {
    title: "React-Basics",
    description: "I learned the basic react structures",
    image: img15,
    link:"https://github.com/roketrig/React-Basics"
  },
  {
    title: "Web Development",
    description: "My first html and css site/s",
    image: img14,
    link:"https://github.com/roketrig/Frontend-Web-Development"
  },
    {
    title: "cinartekne.com",
    description: "My first html and css site/s",
    image: img17,
    link:"https://github.com/roketrig/Frontend-Web-Development"
  },
    {
    title: "ecedemirci.com",
    description: "My first html and css site/s",
    image: img16,
    link:"https://github.com/roketrig/Frontend-Web-Development"
  }
  ];

return (
  <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif", maxWidth: "900px", margin: "auto" }}>
    <h1 style={{ textAlign: "center" }}>Projects</h1>
    {projects.map((proj, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          alignItems: "flex-start",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "1rem",
          marginBottom: "1rem",
          gap: "1rem"
        }}
      >
        <div style={{ flex: 1 }}>
          <h2>{proj.title}</h2>
          <p style={{ whiteSpace: "pre-line" }}>{proj.description}</p>
          {proj.link && (
            <p>
              <a href={proj.link} target="_blank" rel="noreferrer">GitHub</a>
              {proj.demo && <> | <a href={proj.demo} target="_blank" rel="noreferrer">Demo</a></>}
            </p>
          )}
        </div>
        <img
          src={proj.image}
          alt={proj.title}
          style={{
            width: "250px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
          }}
        />
      </div>
    ))}
  </div>
);
}

export default App;