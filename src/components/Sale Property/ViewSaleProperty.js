import React from 'react';
import PropTypes from 'prop-types';

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";

const ViewSaleProperty = () => (
 
  <div className="ViewSaleProperty">
   <div id="main">

<div className="col-md-12 mt-5">

<h5>Sold Plot List</h5>
<div id="inline-form" className="card card card-default scrollspy">
<div className="card-content">
  <div className="table-responsive">
      <table className="table">
          <thead>
              <tr>
                  <th>SR.No</th>
                  <th>Expenditure Type	</th>
                  <th>Amount Paying</th>
                  <th>Payable To</th>
                  <th>Contact Number</th>
                  <th>Date</th>
                 

              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>1</td>
                  <td>Anna</td>
                  <td>Pitt</td>
                 

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

ViewSaleProperty.propTypes = {};

ViewSaleProperty.defaultProps = {};

export default ViewSaleProperty;
