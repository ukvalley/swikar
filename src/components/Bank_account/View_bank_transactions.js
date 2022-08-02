import React from 'react';
import PropTypes from 'prop-types';



import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";


const View_bank_transactions = () => {
    return (

        <div className="View_bank_transactions">
            <div id="main">
                <div className="col-md-12 mt-5">

                    <h5>Bank Transaction</h5>


                    <div id="inline-form" className="card card card-default scrollspy">
                        <div className="card-content">


                            <form action="" method="get">

                                <div className="row">
                                    <div className="input-field col-md-12 mt-4 mb-3">
                                        <label> Bank Name</label>
                                        <select>
                                            <option value="" disabled="" selected="">
                                                Select
                                            </option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                        </select>

                                    </div>
                                    <div className="input-field col-md-6">
                                        <div className="form-group">
                                            <label>From Date</label>
                                            <input type="date" className="form-control" placeholder="Enter Opening Balance"></input>
                                        </div>
                                    </div>
                                    <div className="input-field col-md-6">
                                        <div className="form-group">
                                            <label>To Date</label>
                                            <input type="date" className="form-control" placeholder="Enter Opening Balance"></input>
                                        </div>
                                    </div>
                                    <div className="input-field col-md-12">
                                        <div className="input-field col s12">
                                            <button className="btn btn-primary" type="submit">
                                                Search</button>
                                        </div>
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
                                            <th>Bank Name</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Anna</td>


                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Anna</td>


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

View_bank_transactions.propTypes = {};

View_bank_transactions.defaultProps = {};

export default View_bank_transactions;
