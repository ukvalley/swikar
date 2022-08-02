import React from 'react';
import PropTypes from 'prop-types';
import './CancelPlotList.css';

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";

const CancelPlotList = () => (
 
  <div className="CancelPlotList">
   <div id="main">

<div className="col-md-12 mt-5">

<h5>Property List</h5>
<div id="inline-form" className="card card card-default scrollspy">
<div className="card-content">
  <div className="table-responsive">
      <table className="table">
          <thead>
              <tr>
                  <th>SR.No</th>
                  <th>Client Name	</th>
                  <th>Project Name	</th>
                  <th>Plot Number	</th>
                  <th>Sale Date	</th>
                  <th>Cancle Date</th>
                  <th>Total Amount</th>
                  <th>Paid Amount</th>
                 

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

CancelPlotList.propTypes = {};

CancelPlotList.defaultProps = {};

export default CancelPlotList;
