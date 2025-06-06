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
    image: "https://your-image-url.com/beehero.png",
    link: "https://github.com/roketrig/GameAppJam",
    demo: "https://roketrig.itch.io/beehero"
  },
  {
    title: "Time Traveler",
    description: `Created by two developers and one designer in a 48-hour AI-themed game jam. 
Players travel through time to explore different versions of a war-torn planet, before and after events like civil wars or environmental collapse. 
Each state is unlocked via quests and stones found throughout the journey. 
Developed with Unity, Cinemachine, and DOTween.`,
    image: "https://your-image-url.com/beehero.png",
    link: "https://github.com/yourusername/time-traveler",
  },
  {
    title: "Car-Toon (In Progress)",
    image: "https://your-image-url.com/beehero.png",
    description: `One of my earliest game prototypes, currently being adapted for mobile platforms. 
The player controls a yellow car with the left finger and targets enemies with the right. 
The car automatically crashes into selected enemies, mixing racing and idle mechanics.`,
  },
  {
    title: "Asteroid Miner",
    description: `An idle-defense game set in space. A robotic arm collects materials (e.g., diamond, ruby, silver), which are processed into bullets for turret defense. 
Players can upgrade their turrets and character stats (speed, loot, capacity), and optionally control a drone to join battles against waves of UFOs. 
Includes progression mechanics and production systems.`,
    image: "https://your-image-url.com/beehero.png",
    link: "https://drive.google.com/drive/folders/1nZlzRyzhcFkuw4yDefvGZ7_SpUsNM4G5?usp=drive_link",
  }
  ];

return (
  <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
    <h1 style={{ textAlign: "center" }}>Projects</h1>
    {projects.map((proj, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          gap: "1rem",
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "1rem",
          marginBottom: "1rem",
          alignItems: "center"
        }}
      >
        {/* Sol: Açıklamalar */}
        <div style={{ flex: 2 }}>
          <h2>{proj.title}</h2>
          <p>{proj.description}</p>
          <p>
            {proj.link && (
              <a href={proj.link} target="_blank" rel="noreferrer">GitHub</a>
            )}
            {proj.demo && proj.link && " | "}
            {proj.demo && (
              <a href={proj.demo} target="_blank" rel="noreferrer">Demo</a>
            )}
            {proj.video && (!proj.link && !proj.demo) && (
              <a href={proj.video} target="_blank" rel="noreferrer">Video</a>
            )}
          </p>
        </div>

        {/* Sağ: Görsel */}
        {proj.image && (
          <div style={{ flex: 1 }}>
            <img
              src={proj.image}
              alt={`${proj.title} Screenshot`}
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
        )}
      </div>
    ))}
  </div>
);

}
export default App;
