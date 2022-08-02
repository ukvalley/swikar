import React from 'react';
import PropTypes from 'prop-types';
import './dailyBalance.css';

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";

const Dailybalance = () => (
 
  <div className="Dailybalance">
   <div id="main">
   
   <div className="col s12 m12 l12">
   <h5 className="card-title mt-5"> Daily Balance</h5>
  <div id="Form-advance" className="card card card-default scrollspy">
    <div className="card-content">
    
      <form>
        <div className="row mt-5">
        <div className="input-field col-md-4">
           <div className="form-group">
            <label>From Date</label>
              <input type="date" className="form-control" placeholder="Enter Opening Balance"></input>
            </div>
         </div>

         <div className="input-field col-md-4">
           <div className="form-group">
            <label>To Date</label>
              <input type="date" className="form-control" placeholder="Enter Opening Balance"></input>
            </div>
         </div>
          <div className="input-field col m6 s12">
          <label>Propetry Name</label>
            <select>
              <option value="" disabled="" selected="">
                Select Property
              </option>
              <option value={1}>Ambedker nagar - 2</option>
              <option value={2}>Shree ram nagar extention _A</option>
              <option value={3}>shree ram nagar</option>
              <option value={4}> vardhman nagar</option>
              <option value={5}> ambedker nagar</option>
              <option value={6}> shree ram nagar 1st</option>
            </select>
           
          </div>
        </div>
        
        <div className="row mt-3">
          <div className="input-field col s12">
            <button
              className="btn btn btn-primary"
              type="submit"
              name="action">
             <i className="btn btn-primary">Search</i>
            </button>
          </div>
        </div>


       
      </form>
    </div>
  </div>
    </div>

    <div className="col-md-12 mt-5">

<div id="inline-form" className="card card card-default scrollspy">
    <div className="card-content">
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>                      
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>                     

                    </tr>
                   
                </tbody>
            </table>
        </div>

    </div>
</div>
        </div>

   </div>
  </div>

);

Dailybalance.propTypes = {};

Dailybalance.defaultProps = {};

export default Dailybalance;
