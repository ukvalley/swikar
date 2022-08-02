import React from 'react';
import PropTypes from 'prop-types';
import './ClientPayDetails.css';

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";

const ClientPayDetails = () => (
 
  <div className="ClientPayDetails">
      <div id="main">

      <div className="col-md-12 mt-5">

      <h5>Sale Property Details</h5>
      <div id="inline-form" className="card card card-default scrollspy">
     <div className="card-content">
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>SR.No</th>
                        <th>Client name	</th>
                        <th>Propetry Name	</th>
                        <th>Plot No	</th>
                        <th>Plot Amount	</th>
                        <th>Due Amount</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Anna</td>
                        <td>Pitt</td>
                        <td>35</td>
                        <td>New York</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Anna</td>
                        <td>Pitt</td>
                        <td>35</td>
                        <td>New York</td>

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

ClientPayDetails.propTypes = {};

ClientPayDetails.defaultProps = {};

export default ClientPayDetails;
