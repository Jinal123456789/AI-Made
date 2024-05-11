import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Colorful Website</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="Section">
        <h2>Home Section</h2>
        <p>Welcome to my colorful website. This is the home section.</p>
        <div className="ImageGrid">
          <div className="ImageItem">
            <img src="https://via.placeholder.com/400" alt="Image 1" />
            <p>Description of Image 1</p>
          </div>
          <div className="ImageItem">
            <img src="https://via.placeholder.com/400" alt="Image 2" />
            <p>Description of Image 2</p>
          </div>
          <div className="ImageItem">
            <img src="https://via.placeholder.com/400" alt="Image 3" />
            <p>Description of Image 3</p>
          </div>
        </div>
      </section>

      <section id="about" className="Section">
        <h2>About Section</h2>
        <p>Learn more about me and my mission.</p>
        <div className="AboutContent">
          <img src="https://via.placeholder.com/200" alt="About Image" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis est euismod, fringilla est non, aliquet leo. Integer non neque tempus, faucibus enim a, cursus orci. In ac velit nec dolor vehicula viverra.</p>
        </div>
      </section>

      <section id="portfolio" className="Section">
        <h2>Portfolio Section</h2>
        <p>View my stunning portfolio of work.</p>
        <div className="PortfolioGrid">
          <div className="PortfolioItem">
            <img src="https://via.placeholder.com/400" alt="Portfolio Image 1" />
            <p>Description of Portfolio Image 1</p>
          </div>
          <div className="PortfolioItem">
            <img src="https://via.placeholder.com/400" alt="Portfolio Image 2" />
            <p>Description of Portfolio Image 2</p>
          </div>
          <div className="PortfolioItem">
            <img src="https://via.placeholder.com/400" alt="Portfolio Image 3" />
            <p>Description of Portfolio Image 3</p>
          </div>
        </div>
      </section>

      <section id="contact" className="Section">
        <h2>Contact Section</h2>
        <p>Get in touch with me to start your project.</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} My Colorful Website</p>
      </footer>
    </div>
  );
}

export default App;
