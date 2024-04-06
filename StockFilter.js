// StockFilter.js
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//import StockDetail from './StockDetail';
import './StockFilter.css';
import { Redirect } from 'react-router-dom';


// Define sectors 
// this we need to read from API
const sectors = ['Agriculture', 'Banking','Medical','Logistics','Raw Material','Tele Communications', 'Others'];
const Indexes = ['Nifty Bank', 'Nifty 50','Nifty 100']
const risks = ['Low Risk', 'Moderate Risk','High Risk']
const p_e_ratio = ['1-10', '10-20','20-30']
function StockFilter({ onFilter }) {
    const [filterCriteria, setFilterCriteria] = useState({
        price: '',
        selectedSectors: [] // Maintain selected sectors in state
    });
    const [searchQuery, setSearchQuery] = useState('');
    const [redirectToStockDetail, setRedirectToStockDetail] = useState(false);
    //const [sectors, setSectors] = useState([]);ß



    // useEffect(() => {
    //     // Fetch sectors from API
    //     fetch('https://api.example.com/sectors')
    //         .then(response => response.json())
    //         .then(data => {
    //             setSectors(data.sectors); // Assuming the API response contains a key 'sectors' with the list of sectors
    //         })
    //         .catch(error => {
    //             console.error('Error fetching sectors:', error);
    //         });
    // }, []); //

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'selectedSectors') {
            // Handle checkbox change separately
            const isChecked = e.target.checked;
            const sector = e.target.value;

            setFilterCriteria(prevState => ({
                ...prevState,
                selectedSectors: isChecked
                    ? [...prevState.selectedSectors, sector] // Add sector to selectedSectors
                    : prevState.selectedSectors.filter(s => s !== sector) // Remove sector from selectedSectors
            }));

            if (isChecked) {
                {console.log("is checked")}
               
                
                
            
                
            }
        } else if (name === 'search') {
            // For search input, update searchQuery state
            setSearchQuery(value);
        } else {
            // For other inputs, update filterCriteria normally
            setFilterCriteria(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFilter(filterCriteria);
    };

    // Filter sectors based on search query
    const filteredSectors = sectors.filter(sector =>
        sector.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div className="stock-filter">
              
           
            {/* <h2>Stock Filter</h2> */}

            <div className='left-filters'>
                <div className='abc'>
                    <p><b>Sectors</b></p>
                    {/* Search input */}
                    <div className='search-section'>
                        <input
                            type="text"
                            name="search"
                            value={searchQuery}
                            onChange={handleChange}
                            placeholder="Search Sectors"
                        />
                        <br></br>
                    </div>
                    {/* Iterate over filtered sectors and render checkboxes */}
                    <div className='sectors'>
                        {filteredSectors.map((sector, index) => (
                            <div key={index} className='checkbox-container'>
                                <label className="container">{sector}
                                    <input
                                        type="checkbox"
                                        id={`sector-${index}`}
                                        name="selectedSectors"
                                        value={sector}
                                        checked={filterCriteria.selectedSectors.includes(sector)}
                                        onChange={handleChange}
                                    />
                                    <span className="checkmark"></span>
                                </label>

                            </div>
                        ))}
                    </div>

                </div>
                <br></br>
                <div className='index'>
                    <p><b>Index</b></p>

                    {/* Iterate over filtered sectors and render checkboxes */}
                    <div>
                        {Indexes.map((sector, index) => (
                            <div key={index} className='checkbox-container'>
                                <label className="container">{sector}
                                    <input
                                        type="checkbox"
                                        id={`sector-${index}`}
                                        name="selectedSectors"
                                        value={sector}
                                        checked={filterCriteria.selectedSectors.includes(sector)}
                                        onChange={handleChange}
                                    />
                                    <span className="checkmark"></span>
                                </label>

                            </div>
                        ))}
                    </div>
                </div>
                <br></br>
                <div>
                    <p><b>Risk Factors</b></p>
                    <div className='risk'>
                        {risks.map((sector, index) => (
                            <div key={index} className='checkbox-container'>
                                <label className="container">{sector}
                                    <input
                                        type="checkbox"
                                        id={`sector-${index}`}
                                        name="selectedSectors"
                                        value={sector}
                                    />
                                    <span className="checkmark"></span>
                                </label>

                            </div>
                        ))}
                    </div>
                </div>
                <br></br>
                <div>
                    <p><b>P/E Ratio</b></p>
                    <div className='sectors'>
                        {p_e_ratio.map((sector, index) => (
                            <div key={index} className='checkbox-container'>
                                <label className="container">{sector}
                                    <input
                                        type="checkbox"
                                        id={`sector-${index}`}
                                        name="selectedSectors"
                                        value={sector}
                                    />
                                    <span className="checkmark"></span>
                                </label>

                            </div>
                        ))}
                    </div>
                </div>
                <br></br>
                <div className='closeprice'>
                    <p><b>Close Price</b></p>

                    {/* Iterate over filtered sectors and render checkboxes */}
                    <div className='inputclose' style={{ position: 'relatvie' }}>
                        <input
                            type="text"
                            name="selectedcloseprice"
                            placeholder='From'
                            onChange={handleChange}
                        />
                        <input
                            style={{ marginLeft: '20px' }}
                            type="text"
                            name="selectedcloseprice"
                            placeholder='To'
                            onChange={handleChange}
                        />
                                  
                    </div>
                </div>
            </div>

            {/* { <StockDetail selectedSectors={filterCriteria.selectedSectors} />} */}
        </div>
    );
}

export default StockFilter