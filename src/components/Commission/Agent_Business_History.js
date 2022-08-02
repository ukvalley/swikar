import React from 'react';
import PropTypes from 'prop-types';
import './Commission.css';

const Agent_Business_History = () => {
    return (

        <div className="Agent_Business_History">
            <div id="main">
                <div className="col-md-12 mt-5">

                    <h5>Agent Business History</h5>


                    <div id="inline-form" className="card card card-default scrollspy">
                        <div className="card-content">


                            <form action="" method="get">

                                <div className="row">

                                    <div className="input-field col-md-4">
                                        <div className="form-group">
                                            <label>From Date</label>
                                            <input type="date" className="form-control" placeholder="Enter Opening Balance"></input>
                                        </div>
                                    </div>
                                    <div className="input-field col-md-4">
                                        <div className="form-group">
                                            <label>To Date</label>
                                            <input type="date" className="form-control" placeholder="Enter Opening Balance"></input>
                                        </div>
                                    </div>
                                    <div className="input-field col-md-4 mt-2">
                                        <div className="input-field">
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

Agent_Business_History.propTypes = {};

Agent_Business_History.defaultProps = {};

export default Agent_Business_History;