function App() {
  const projects = [
    {
      title: "Todo List App",
      description: "Basit bir yapılacaklar listesi. React Hooks kullandım.",
      link: "https://github.com/kullaniciAdin/todo-app",
      demo: "https://todo-app.vercel.app"
    },
    {
      title: "Hava Durumu Uygulaması",
      description: "OpenWeather API ile çalışan bir hava durumu uygulaması.",
      link: "https://github.com/kullaniciAdin/weather-app",
      demo: "https://weather-app.vercel.app"
    },
    // İstediğin kadar proje ekleyebilirsin
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
