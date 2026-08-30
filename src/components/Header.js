import { Moon, Sun } from 'lucide-react';

function Header({ darkMode, onToggleDarkMode }) {
  return (
    <header className="App-header">
      <div className="header-container">
        <div className="logo">
          <a href="#hero" className="logo-link" aria-label="Le Nhu Huynh home">
            <span className="logo-mark">LH</span>
            <span className="logo-text">Le Nhu Huynh</span>
          </a>
        </div>
        <nav className="nav-wrapper">
          <ul className="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button 
            className="theme-toggle" 
            onClick={onToggleDarkMode}
            title={darkMode ? 'Light Mode' : 'Dark Mode'}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={18} strokeWidth={1.8} /> : <Moon size={18} strokeWidth={1.8} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
