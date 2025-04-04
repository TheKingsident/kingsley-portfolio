import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <span className="hello">👋 HELLO!</span>
        <h1>I'm <span className="highlight">Kingsley</span>.</h1>
        <p>
          I am a web developer with experience in building modern websites and applications.  
          I specialize in React, TypeScript, and UI/UX design.
        </p>
        <div className="buttons">
          <a href="#contact" className="btn primary">Hire Me</a>
          <a href="#works" className="btn secondary">View Works →</a>
        </div>
      </div>
      <div className="home-image">
        <img src="src/assets/profile-main2.png" alt="Profile" />
        <div className="circle-bg"></div>
      </div>
    </section>
  );
};

export default Home;
