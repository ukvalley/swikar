import React from 'react';
import PropTypes from 'prop-types';
import './ClientDetails.css';

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";

const Clientdetails = () => (
 
  <div className="Clientdetails">
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
                        <th>Client name	</th>
                        <th>Father /Husband Name</th>
                        <th>Nominee Name	</th>
                        <th>Mobile Number	</th>
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

Clientdetails.propTypes = {};

Clientdetails.defaultProps = {};

export default Clientdetails;
