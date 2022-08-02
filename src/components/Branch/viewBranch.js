import React from 'react';
import PropTypes from 'prop-types';
import './viewBranch.css';

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";

const Viewbranch = () => (
 
  <div className="Viewbranch">
      <div id="main">

      <div className="col-md-12 mt-5">

<h5>Sold Plot List</h5>
<div id="inline-form" className="card card card-default scrollspy">
    <div className="card-content">
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Branch Name	</th>
                        <th>Branch Address	</th>
                        <th>Branch Username	</th>
                        <th>Branch Password	</th>
                        <th>Branch Date</th>

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

Viewbranch.propTypes = {};

Viewbranch.defaultProps = {};

export default Viewbranch;
