import React from 'react';
import PropTypes from 'prop-types';
import './UpdateSaleProperty.css';

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";

const UpdateSaleProperty = () => (
 
  <div className="UpdateSaleProperty">

    <div id="main">
   
<div className="col-md-12">
<h5 className="card-title mt-5">Update Sale Property Form</h5>
<div id="inline-form" className="card card card-default scrollspy">
  <div className="card-content">
    

    <form action="" method="get">

      <div className="row">
       
     <div className="input-field col-md-6 s12">
         <label>Propetry Name</label>
         <select id="nominee_relation" name="nominee_relation">
         <option value="" disabled="" selected="">
          Choose Property
         </option>
         <option value="Husband">Husband</option>
       
         </select>
     </div>    
      
     <div className="col-md-8 mt-5 ml-5">
        <button className="btn btn-primary" type="submit">
         Search</button>
        </div>
       
     
      </div>

  
      
    </form>
  </div>
</div>
</div>

</div>
</div>

);

UpdateSaleProperty.propTypes = {};

UpdateSaleProperty.defaultProps = {};

export default UpdateSaleProperty;
