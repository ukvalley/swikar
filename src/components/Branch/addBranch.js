import React from 'react';
import PropTypes from 'prop-types';

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";

const Addbranch = () => (
 
    <div className="Branch">
    <div id="main">
<div className="col-md-12">
      <h5 className="card-title mt-5">Create New Branch</h5>

<div id="inline-form" className="card card card-default scrollspy">
  <div className="card-content">
   

    <form action="" method="get">

      <div className="row">
        <div className="input-field col-md-6">

          <div className="form-group">
            <label>Branch Name</label>
            <input type="text" className="form-control" placeholder="Enter Branch  Name"></input>
          </div>
        </div>
        <div className="input-field col-md-6">

          <div className="form-group">
            <label>Address</label>
            <input type="text" className="form-control" placeholder="Enter Address"></input>
          </div>
        </div>
        <div className="input-field col-md-6">

          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" placeholder="Enter Username"></input>
          </div>
        </div>

        <div className="input-field col-md-6">
            <div className="form-group">
            <label>Password</label>
            <input type="Password" className="form-control" placeholder="Enter Password"></input>
            </div>
            </div>


        <div className="input-field col-md-6 mt-5">
          <div className="input-field col s12">
            <button className="btn btn-primary" type="submit">
              Search</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
</div>

</div>
</div>

);

Addbranch.propTypes = {};

Addbranch.defaultProps = {};

export default Addbranch;
