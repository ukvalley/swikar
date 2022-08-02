import React from 'react';
import PropTypes from 'prop-types';
import './AddReceivedHead.css';

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";

const AddReceivedHead = () => {
  return(
 
  <div className="AddReceivedHead">

    <div id="main">
   
<div className="col-md-12">
<h5 className="card-title mt-5">Add Received Title</h5>
<div id="inline-form" className="card card card-default scrollspy">
  <div className="card-content">
   
 
    <div className="input-field col-md-6 mt-3">
            <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" placeholder="Title"></input>
            </div>
        </div>
       
        <div className="col-md-8 mt-2">
            <button className="btn btn-primary" type="submit">
              Submit</button>
         </div>
  </div>
</div>
</div>

</div>
</div>

)
};

AddReceivedHead.propTypes = {};

AddReceivedHead.defaultProps = {};

export default AddReceivedHead;
