import React from 'react';
import PropTypes from 'prop-types';



import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";


const View_property_detail = () => {
    return (

        <div className="View_property_detail">
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
                                            <th>Property Name</th>
                                            <th>Property Location</th>
                                            <th>Property Branch</th>
                                            <th>Property Images</th>

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

    )






};

View_property_detail.propTypes = {};

View_property_detail.defaultProps = {};

export default View_property_detail;
