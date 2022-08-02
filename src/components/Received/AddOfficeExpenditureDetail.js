import React from 'react';
import './AddOfficeExpenditureDetail.css';
import PropTypes from 'prop-types';

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";

const AddOfficeExpenditureDetail = () => {
    return(

        <div className="AddOfficeExpenditureDetail">
            
            <div id="main">
<div className="col-md-12">
<h5 className="card-title mt-5">Add Office Expenditure Detail   </h5>

<div id="inline-form" className="card card card-default scrollspy">
  <div className="card-content">
    

    <form action="" method="get">

      <div className="row">

      <div className="input-field col-md-6">
        <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Enter Name
            "></input>
        </div>
        </div>


      <div className="input-field col-md-6 s12 mt-3">
        <label htmlFor="first_name01"> From Date </label>
            <input id="first_name01" className='form-control' type="date" />           
     </div>

        <div className="input-field col-md-6">

          <label>Expenditure Name</label>
            <select>
              <option value="" disabled="" selected="">
                Select Expenditure Type
              </option>
              <option value={1}>Ambedker nagar - 2</option>
              <option value={2}>Shree ram nagar extention _A</option>
              <option value={3}>shree ram nagar</option>
              <option value={4}> vardhman nagar</option>
              <option value={5}> ambedker nagar</option>
              <option value={6}> shree ram nagar 1st</option>
            </select>            
          </div>
           
      
        <div className="input-field col-md-6 mt-3">
          <div className="form-group">
            <label>Amount Received</label>
            <input type="text" className="form-control" placeholder="Enter Amount Received"></input>
          </div>
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

    )
};
 
  



AddOfficeExpenditureDetail.propTypes = {};

AddOfficeExpenditureDetail.defaultProps = {};

export default AddOfficeExpenditureDetail;
