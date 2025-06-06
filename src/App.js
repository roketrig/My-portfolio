function App() {
const projects = [
  {
    title: "Bee Hero",
    description: `A game developed by two developers and three designers during a two-day game jam. 
The game consists of three stages: collecting pollen and playing mini-games; protecting the pollen from threats like acid rain, rocks, and wood; and placing the pollen into the hive. 
Built using Unity, Cinemachine, and DOTween.`,
    link: "https://github.com/yourusername/bee-hero",
    demo: "https://your-itch-io-link.itch.io/bee-hero"
  },
  {
    title: "Time Traveler",
    description: `Created by two developers and one designer in a 48-hour AI-themed game jam. 
Players travel through time to explore different versions of a war-torn planet, before and after events like civil wars or environmental collapse. 
Each state is unlocked via quests and stones found throughout the journey. 
Developed with Unity, Cinemachine, and DOTween.`,
    link: "https://github.com/yourusername/time-traveler",
    demo: ""
  },
  {
    title: "Car-Toon (In Progress)",
    description: `One of my earliest game prototypes, currently being adapted for mobile platforms. 
The player controls a yellow car with the left finger and targets enemies with the right. 
The car automatically crashes into selected enemies, mixing racing and idle mechanics.`,
    link: "",
    demo: ""
  },
  {
    title: "Idle Space Defense",
    description: `An idle-defense game set in space. A robotic arm collects materials (e.g., diamond, ruby, silver), which are processed into bullets for turret defense. 
Players can upgrade their turrets and character stats (speed, loot, capacity), and optionally control a drone to join battles against waves of UFOs. 
Includes progression mechanics and production systems.`,
    link: "",
    demo: ""
  }
];


  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Projelerim</h1>
      {projects.map((proj, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "1rem",
            marginBottom: "1rem"
          }}
        >
          <h2>{proj.title}</h2>
          <p>{proj.description}</p>
          <p>
            <a href={proj.link} target="_blank" rel="noreferrer">GitHub Kodu</a> |{" "}
            <a href={proj.demo} target="_blank" rel="noreferrer">Canlı Demo</a>
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
