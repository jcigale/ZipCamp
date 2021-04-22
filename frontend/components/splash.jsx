import React from 'react';
import {Link} from 'react-router-dom';

export default function splash() {
    return (
        <div className='splash'>
            <div className='heading'>
                <h1>Find yourself outside.</h1>
                <h2>Discover and book tent camping, RV</h2>
                <h2>parks, cabins, treehouses, and glamping.</h2>  
            </div>

            <div className='splash-search'>  
                <div className='where'>
                    <label>WHERE TO?</label>
                    <input type="text" placeholder="Try..."></input>
                </div> 
                <div className='date'>
                    <label>DATES</label>
                    <input type="date" placeholder="Enter dates"/>
                </div>
                <div className='accomodations'>
                    <label>ACCOMODATIONS</label>
                    <select className="type" >
                        <option value="All listing"></option>
                        <option value="Campsites"></option>
                        <option value="RVs"></option>
                        <option value="Lodging"></option>
                    </select>
                </div>
                <button className='search-button'></button>
            </div>
        </div>

    )
}