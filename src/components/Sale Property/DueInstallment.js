import React from 'react';
import PropTypes from 'prop-types';
import './DueInstallment.css';

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";

const DueInstallment = () => (
 
  <div className="DueInstallment">

<div id="main">

<div className="col-md-12 mt-5">

<h5>Client Details</h5>
<div id="inline-form" className="card card card-default scrollspy">
<div className="card-content">
  <div className="table-responsive">
      <table className="table">
          <thead>
              <tr>
                  <th>SR.No</th>
                  <th>Client Name</th>
                  <th>Registration Number</th>
                 <th>Praposal Number</th>
                 <th>Total Amount</th>
                 <th>Paid Amount</th>
                <th>Installment Amount</th>
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

DueInstallment.propTypes = {};

DueInstallment.defaultProps = {};

export default DueInstallment;
