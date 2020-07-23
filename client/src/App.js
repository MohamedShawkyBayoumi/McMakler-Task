import React from 'react';
import './App.css';
import Header from './components/Header';
import { ReactComponent as BackIcon } from './assets/images/ic/arrow/back.svg';
import { ReactComponent as SearchIcon } from './assets/images/ic/search.svg';

function App() {
  return (
    <div>
      <Header />
      
      <div className="container">
        <main>
          <section className="main-top">
            <div className="is-flex">
              <img src={require('./assets/images/ic/arrow/back.png')} alt="back" />
              <h1 className="section-head-text">Applicants</h1>
            </div>
            <div>
              <ul className="main-top-list">
                <li>
                  <h3>25</h3>
                  <h4>Total</h4>
                </li>
                <li>
                  <h3>10</h3>
                  <h4>New</h4>
                </li>
                <li>
                  <h3>5</h3>
                  <h4>Viewed</h4>
                </li>
                <li>
                  <h3>3</h3>
                  <h4>Appointment</h4>
                </li>
                <li>
                  <h3>6</h3>
                  <h4>Others</h4>
                </li>
              </ul>
            </div>
          </section>
          <section className="filters">
            <div className="columns">
              <div className="column is-3">
                <div className="input-container">
                  <SearchIcon className="search-icon" />
                  <input type="text" placeholder="Search for applicant" />
                </div>
              </div>
              <div className="column is-3">
                <div className="is-flex">
                  <div className="dropdown-container">
                    <select>
                      <option>Bids</option>
                    </select>
                  </div>
                  <div className="dropdown-container">
                    <select>
                      <option>Status</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="column is-6"></div>
            </div>
            
          </section>
          <h1 className="head-section-text">Appointment set (3)</h1>
          <section className="appointment-section">
            <div className="columns">
              <div className="column is-3">
                <div className="card">
                  <div className="avatar">
                    <div>FH</div>
                  </div>
                  <h3>Friedrich Heinrich</h3>
                  <h4>+49 146 344 23811</h4>
                  <h4>Friedrich.heinrich@gmail.com</h4>
                  <div className="appointment-date">
                    <span>APPOINTMENT 22 JULY 14:00</span>
                  </div>
                  <div className="bid">
                    <span>BID 250.000€</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <h1 className="head-section-text">Property viewed (5)</h1>
          <section className="appointment-section">
            <div className="columns">
              <div className="column is-3">
                <div className="card">
                  <div className="avatar">
                    <div>FH</div>
                  </div>
                  <h3>Friedrich Heinrich</h3>
                  <h4>+49 146 344 23811</h4>
                  <h4>Friedrich.heinrich@gmail.com</h4>
                  <div className="appointment-date">
                    <span>APPOINTMENT 22 JULY 14:00</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <h1>AGB • Datenschutz • Impressum</h1>
        </footer>
      </div>
    </div>
  );
}

export default App;