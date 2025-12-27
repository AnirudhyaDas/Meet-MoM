import "./App.css";
import logo from "./assets/logo.svg";
import waveImg from "./assets/waves.svg";  


function App() {
  return (
    <div className="container">

     
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-img" />
          <span>MoM - Minutes of Meeting</span>
        </div>

        <div className="nav-btns">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      
      <section className="hero">
        <h1>MoM is an AI-powered Meeting Summariser</h1>
        <button className="get-started">Get Started</button>
      </section>

    
      <div className="wave-box">
        <img src={waveImg} alt="wave" className="wave-image" />
      </div>

      <div className="line-section">
        <div className="line"></div>
        <div className="play-btn">▶</div>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default App;
