import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <header style={{ background: 'linear-gradient(90deg, red, rgb(210, 97, 97))', height: '50px', width: '100vw', position: 'fixed', top: 0, left: 0, display: 'flex', alignItems: 'center', zIndex: 1000, padding: '0 16px' }}>
          <h1 style={{ margin: 0, fontSize: '1.1rem', color: '#fff', textAlign: 'center', flex: '1' }}>My webpage</h1>
          <nav className="nav-menu" style={{ position: 'relative' }}>
            <input type="checkbox" id="menu-toggle" style={{ display: 'none' }} />
<label htmlFor="menu-toggle" className="menu-icon" style={{ cursor: 'pointer', fontSize: '1.5rem', color: '#fff', display: 'block' }}>&#9776;</label>
            <ul className="menu-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </nav>
        </header>
        <main style={{ textAlign: 'center', marginTop: '60px' }}>
          <h1>Welcome to My Webpage</h1>
        </main>
        <footer style={{ backgroundColor: 'rgb(155, 60, 60)', height: '50px', width: '100vw', position: 'fixed', left: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <p style={{ margin: 0, fontSize: '1.1rem' }}>Thank you for visiting!</p>
        </footer>
        <style>{`
          .nav-menu {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .menu-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
          }
          .menu-list li {
            padding: 10px 0;
            border-bottom: 1px solid #eee;
          }
          .menu-list li:last-child {
            border-bottom: none;
          }
          .menu-list a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            padding: 0 10px;
          }
@media (max-width: 600px) {
            .menu-icon {
              display: block;
              margin-left: auto;
              margin-right: 0;
            }
            .menu-list {
              display: none !important;
              position: absolute;
              top: 50px;
              right: 0;
              background: #fff;
              width: 150px;
              box-shadow: 0 2px 8px rgba(0,0,0,0.15);
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
            }
            #menu-toggle:checked + .menu-icon + .menu-list {
              display: flex !important;
            }
          }
          @media (min-width: 601px) {
            .menu-icon {
              display: none !important;
            }
            .menu-list {
              display: flex !important;
              position: static;
              background: none;
              box-shadow: none;
              width: auto;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              height: 50px;
            }
            .menu-list li {
              border: none;
              padding: 0 10px;
            }
            .menu-list a {
              color: #fff;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default App;
