import React from 'react';
import PropTypes from 'prop-types';



import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";


const View_bank_details = () => {
    return (

        <div className="View_bank_details">
            <div id="main">
                <div className="col-md-12 mt-5">

                    <h5>Bank Details</h5>
                    <div id="inline-form" className="card card card-default scrollspy">
                        <div className="card-content">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>SR.No</th>
                                            <th>Bank Name</th>
                                            <th>Account Number</th>
                                            <th>Opening Balance</th>
                                            <th>Current Balance</th>
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
                                            <td>New York</td>

                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Anna</td>
                                            <td>Pitt</td>
                                            <td>35</td>
                                            <td>New York</td>
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

View_bank_details.propTypes = {};

View_bank_details.defaultProps = {};

export default View_bank_details;
