import React from 'react';
import PropTypes from 'prop-types';



import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";


const View_plot_details = () => {
    return (

        <div className="View_plot_details">
            <div id="main">
                <div className="col-md-12 mt-5">

                    <h5>Property List</h5>


                    <div id="inline-form" className="card card card-default scrollspy">
                        <div className="card-content">


                            <form action="" method="get">

                                <div className="row">
                                    <div className="input-field col-md-6 mt-4">
                                        <label> Select Property</label>
                                        <select>
                                            <option value="" disabled="" selected="">
                                                Select
                                            </option>
                                            <option value={1}>Ambedker nagar - 2</option>
                                            <option value={2}>Shree ram nagar extention _A</option>
                                            <option value={3}>shree ram nagar</option>
                                            <option value={4}> vardhman nagar</option>
                                            <option value={5}> ambedker nagar</option>
                                            <option value={6}> shree ram nagar 1st</option>
                                        </select>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>



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

View_plot_details.propTypes = {};

View_plot_details.defaultProps = {};

export default View_plot_details;
