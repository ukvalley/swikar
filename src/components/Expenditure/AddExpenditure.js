import React from 'react';
import PropTypes from 'prop-types';
import './AddExpenditure.css';

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";

const AddExpenditure = () => (
 
  <div className="AddExpenditure">

    <div id="main">
    
<div className="col-md-12">
<h5 className="card-title mt-5">Add Expenditure</h5>
<div id="inline-form" className="card card card-default scrollspy">
  <div className="card-content">
    

    <form action="" method="get">

      <div className="row">
        <div className="input-field col-md-6">

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
     
        <div className="input-field col-md-6">

          <div className="form-group">
            <label>Expenditure Type</label>
            <input type="text" className="form-control" placeholder="Enter Expenditure Type
            "></input>
          </div>
        </div>
      
        <div className="input-field col-md-6 mt-3">
          <div className="form-group">
            <label>Amount Paying</label>
            <input type="text" className="form-control" placeholder="Enter Amount Paying"></input>
          </div>
        </div>

        <div className="input-field col-md-6 mt-3">
            <div className="form-group">
            <label>Payable To</label>
            <input type="text" className="form-control" placeholder="Payable To"></input>
            </div>
        </div>

        <div className="input-field col-md-6 mt-3">
            <div className="form-group">
            <label>Contact Number</label>
            <input type="text" className="form-control" placeholder="Contact Number"></input>
            </div>
        </div>

        <div className="input-field col-md-6 s12 mt-3">
        <label htmlFor="first_name01"> From Date </label>
            <input id="first_name01" className='form-control' type="date" />           
          </div>       
        
          <div className="col-md-8 mt-2">
            <button className="btn btn-primary" type="submit">
              Submit</button>
         </div>
      </div>
       
       
    </form>
  </div>
</div>
</div>

</div>
</div>

);

AddExpenditure.propTypes = {};

AddExpenditure.defaultProps = {};

export default AddExpenditure;
