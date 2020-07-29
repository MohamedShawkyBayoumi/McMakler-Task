import React, { useState, useEffect } from 'react';
import { ReactComponent as BackIcon } from '../assets/images/ic/arrow/back.svg';
import { ReactComponent as SearchIcon } from '../assets/images/ic/search.svg';
import { ReactComponent as ArrowDownIcon } from '../assets/images/ic/arrow_drop_down.svg';
import MainStatistics from '../components/MainStatistics';
import axios from 'axios';
import Section from '../components/Section';
import { useDebounce } from '../utils/debounce';

function Home({ location, history }) {
    

  const [appointments, setAppointments] = useState([]),
        [appointmentsErrorMsg, setAppointmentsErrorMsg] = useState(''),
        [propertiesErrorMsg, setPropertiesErrorMsg] = useState(''),
        [searchTerm, setSearchTerm] = useState(''),
        [properties, setProperties] = useState([]),
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
        ]),
        API = 'http://localhost:5000';
        const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(
      () => {
        if (debouncedSearchTerm) {
            history.push(`/page/?search=${debouncedSearchTerm}`)
            getProperties(debouncedSearchTerm);
        } else {
            history.push('/');
        }
      },
      [debouncedSearchTerm]
    );

  const getAppointments = async () => {
    try {
      let res = await axios(`${API}/appointments`);
      setAppointments(res.data);
    } catch (error) {
      console.log(error);
      setAppointmentsErrorMsg(`Something went wrong in loading Appointments`);
    }
  }

  const getProperties = async (search = '') => {
    try {
      let res = await axios(`${API}/properties?search=${search}`);
      setProperties(res.data);
    } catch (error) {
      console.log(error);
      setPropertiesErrorMsg(`Something went wrong in loading Properties`);
    }
  }

  const handleChange = async e => {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    getAppointments();
    const params = new URLSearchParams(location.search);
    let searchKey = params.get('search');
    if(searchKey){
        setSearchTerm(searchKey);
        getProperties(searchKey);
    } else {
        getProperties();
    }
  }, []);

  return (
    <div>

      <div className="container">
        <main>
          <section className="main-top">
            <div className="is-flex">
              <img src={require('../assets/images/ic/arrow/back.png')} alt="back" />
              <h1 className="section-head-text">Applicants</h1>
            </div>
            <div className="is-hidden-mobile">
              <MainStatistics />
            </div>
          </section>
          <section className="filters">
            <div className="columns is-mobile is-multiline">
              <div className="column is-3-desktop is-5-tablet is-12-mobile">
                <div className="input-container">
                  <SearchIcon className="search-icon" />
                  <input type="text" placeholder="Search for applicant" value={searchTerm} onChange={e => handleChange(e)} />
                </div>
              </div>
              <div className="column is-3-desktop is-5-tablet is-10-mobile">
                <div className="is-flex">
                  <div className="dropdown-container">
                    <img src={require('../assets/images/arrow_drop_down.png')} alt="arrow_drop_down" className="arrow-down" />
                    <select>
                      <option>Bids</option>
                    </select>
                  </div>
                  <div className="dropdown-container">
                    <img src={require('../assets/images/arrow_drop_down.png')} alt="arrow_drop_down" className="arrow-down" />
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
              <div className="column is-6" />
            </div>
          </section>
          <Section 
            title={`Appointment set (${appointments.length})`}
            data={appointments}
            colors={colors}
            errorMsg={appointmentsErrorMsg}
          />
          <Section 
            title={`Property viewed (${properties.length})`}
            data={properties}
            colors={colors}
            errorMsg={propertiesErrorMsg}
          />
         
        </main>
        <footer>
          <h1>AGB • Datenschutz • Impressum</h1>
        </footer>
      </div>
    </div>
  );
}

export default Home;