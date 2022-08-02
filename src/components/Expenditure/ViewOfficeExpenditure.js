import React from 'react';
import PropTypes from 'prop-types';
import './ViewOfficeExpenditure.css';

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";

const ViewOfficeExpenditure = () => (
 
  <div className="ViewOfficeExpenditure">

    <div id="main">
<div className="col-md-12">
<h5 className="card-title mt-3">View Office Expenditure</h5>

<div id="inline-form" className="card card card-default scrollspy">
  <div className="card-content">
   

    <form action="" method="get">

      <div className="row">
        
      <div className="input-field col-md-6">
          <div className="form-group">
             <label>From Date</label>
               <input type="date" className="form-control" placeholder="Enter Opening Balance"></input>
           </div>
     </div>

     <div className="input-field col-md-6">
          <div className="form-group">
             <label>To Date</label>
               <input type="date" className="form-control" placeholder="Enter Opening Balance"></input>
           </div>
     </div> 

    <div className="input-field col-md-6 mt-4">
        <div className="form-group">
         <label>Name</label>
        <input type="text" className="form-control" placeholder="Enter Name"></input>
        </div>
    </div>

        <div className="input-field col-md-6 mt-4">
          <label>Type</label>
            <select>
              <option value="" disabled="" selected="">
                Select Type
              </option>
              <option value={1}>Ambedker nagar - 2</option>
              <option value={2}>Shree ram nagar extention _A</option>
              <option value={3}>shree ram nagar</option>
              <option value={4}> vardhman nagar</option>
              <option value={5}> ambedker nagar</option>
              <option value={6}> shree ram nagar 1st</option>
            </select>
            
          </div>
     
          <div className="input-field col-md-6 mt-4">
          <label>Branch</label>
            <select>
              <option value="" disabled="" selected="">
                Select Branch
              </option>
              <option value={1}>Ambedker nagar - 2</option>
              <option value={2}>Shree ram nagar extention _A</option>
              <option value={3}>shree ram nagar</option>
              <option value={4}> vardhman nagar</option>
              <option value={5}> ambedker nagar</option>
              <option value={6}> shree ram nagar 1st</option>
            </select>
            
          </div>               
          <div className="col-md-8 mt-5">
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

ViewOfficeExpenditure.propTypes = {};

ViewOfficeExpenditure.defaultProps = {};

export default ViewOfficeExpenditure;
