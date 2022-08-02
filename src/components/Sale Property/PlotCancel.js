import React from 'react';
import PropTypes from 'prop-types';

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";

const PlotCancel = () => (

    <div className="PlotCancel">
        <div id="main">

            <div className="col-md-12 mt-5">

                <h5>Plot Cancel</h5>
                <div id="inline-form" className="card card card-default scrollspy">
                    <div className="card-content">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>SR.No</th>
                                        <th>Propetry List.	</th>
                                        <th>Action</th>


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

PlotCancel.propTypes = {};

PlotCancel.defaultProps = {};

export default PlotCancel;
