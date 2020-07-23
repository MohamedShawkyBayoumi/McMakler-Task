import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import { ReactComponent as BackIcon } from './assets/images/ic/arrow/back.svg';
import { ReactComponent as SearchIcon } from './assets/images/ic/search.svg';
import Card from './components/Card';

function App() {

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: 'Friedrich Heinrich',
      phone: '+49 146 344 23811',
      email: 'Friedrich.heinrich@gmail.com',
      date: '22 JULY 14:00'
    },
    {
      id: 2,
      name: 'Hans-Ulrich',
      phone: '+49 146 344 23811',
      email: 'Hans-Ulrichh@gmail.com',
      date: '22 JULY 14:00'
    },
    {
      id: 3,
      name: 'Karlheinz Brandenburg',
      phone: '+49 146 344 23811',
      email: 'karlheinzbrandenburg@gmail.com',
      date: '22 JULY 14:00'
    },
  ]),
      [properties, setProperties] = useState([
        {
          id: 1,
          name: 'Maxmillian Von Mustermann',
          phone: '+49 146 344 23811',
          email: 'max.mustermann@gmail.com',
          date: 'Viewed 11 JunE 19:00',
          bid: '250.000€'
        },
        {
          id: 2,
          name: 'Bernhard Weiß',
          phone: '+49 146 344 23811',
          email: 'bernhard.weiß@gmail.com',
          date: 'Viewed 11 JunE 19:00',
          bid: '250.000€'
        },
        {
          id: 3,
          name: 'Hansjörg Felmy',
          phone: '+49 146 344 23811',
          email: 'Hansjörg.felmy@gmail.com',
          date: 'Viewed 11 JunE 19:00',
          bid: '250.000€'
        },
        {
          id: 4,
          name: 'Gottschalk Godeslack',
          phone: '+49 146 344 23811',
          email: 'gottschalk.godeslack@gmail.com',
          date: 'Viewed 11 JunE 19:00',
          bid: '250.000€'
        },
        {
          id: 5,
          name: 'Ekkehard Hardy',
          phone: '+49 146 344 23811',
          email: 'ekkehard.hardy@gmail.com',
          date: 'Viewed 11 JunE 19:00',
          bid: '250.000€'
        },
      ]),
        [colors, setColors] = useState([
          {
            id: 1,
            color: '#405493',
            backgroundColor: '#E3E7F9'
          },
          {
            id: 2,
            color: '#20ADC5',
            backgroundColor: '#CEF0F4'
          },
          {
            id: 3,
            color: '#ACAF36',
            backgroundColor: '#F0F4E1'
          },
          {
            id: 4,
            color: '#E97428',
            backgroundColor: '#FEE8D3'
          },
          {
            id: 5,
            color: '#E52A50',
            backgroundColor: '#FCD6DE'
          },
        ]);

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
            <div className="is-hidden-mobile">
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
            <div className="columns is-mobile is-multiline">
              <div className="column is-3-desktop is-5-tablet is-12-mobile">
                <div className="input-container">
                  <SearchIcon className="search-icon" />
                  <input type="text" placeholder="Search for applicant" />
                </div>
              </div>
              <div className="column is-3-desktop is-5-tablet is-10-mobile">
                <div className="is-flex">
                  <div className="dropdown-container">
                    <select>
                      <option>Bids</option>
                    </select>
                  </div>
                  <div className="dropdown-container">
                    <select>
                      <option value="">Status</option>
                      <option value="Appointment_Set">Appointment_Set</option>
                      <option value="Property_Viewed">Property_Viewed</option>
                      <option value="Interested">Interested</option>
                      <option value="Offer_Accepted">Offer_Accepted</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="column is-6"></div>
            </div>
            
          </section>
          <h1 className="head-section-text">Appointment set ({appointments.length})</h1>
          <section className="appointment-section">
            <div className="columns is-mobile card-columns-mobile">
              {appointments.length > 0 && appointments.map((data, i) => (
                <div className="column is-3-desktop is-4-tablet is-three-quarters-mobile" key={i}>
                  <Card data={data} colors={colors} date_placeholder="APPOINTMENT" />
                </div>
              ))}
            </div>
          </section>
          <h1 className="head-section-text">Property viewed ({properties.length})</h1>
          <section className="appointment-section">
            <div className="columns is-mobile card-columns-mobile">
              {properties.length > 0 && properties.map((data, i) => (
                <div className="column is-3-desktop is-4-tablet is-three-quarters-mobile" key={i}>
                  <Card data={data} colors={colors} date_placeholder="VIEWED" />
                </div>
              ))}
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