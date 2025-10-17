import './index.css'

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Welcome to My Free Portfolio</h1>
          <p>This is a beautiful portfolio website on the FREE plan</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>About My Work</h2>
          <p>I am a creative professional showcasing my work</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>My Services</h2>
          <p>I offer web design, development, and consulting</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>Email me at hello@myportfolio.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2025 My Portfolio</p>
        </div>
      </footer>
    </div>
  )
}

export default App