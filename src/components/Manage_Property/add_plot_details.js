import React from 'react';
import PropTypes from 'prop-types';
import './Manage_Property.css';


const Add_plot_details = () => (
    <div className="Add_plot_details">
        <div id="main">
            <div className="col-md-12 mt-5">
                <h5>Plot Information</h5>
                <div id="inline-form" className="card card card-default scrollspy">
                    <div className="card-content">


                        <form action="" method="get">

                            <div className="row">
                                <div className="input-field col-md-6">

                                    <div className="form-group">
                                        <label>Property Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Property Name"></input>
                                    </div>
                                </div>
                                <div className="input-field col-md-6">

                                    <div className="form-group">
                                        <label>Plot From</label>
                                        <input type="text" className="form-control" placeholder="Enter plot From"></input>
                                    </div>
                                </div>
                                <div className="input-field col-md-6">

                                    <div className="form-group">
                                        <label>Plot To</label>
                                        <input type="text" className="form-control" placeholder="Enter plot To"></input>
                                    </div>
                                </div>

                                <div className="input-field col-md-6">

                                    <div className="form-group">
                                        <label>Plot Lenght</label>
                                        <input type="text" className="form-control" placeholder="Enter Plot Lenght"></input>
                                    </div>
                                </div>

                                <div className="input-field col-md-6">

                                    <div className="form-group">
                                        <label>Plot Width</label>
                                        <input type="text" className="form-control" placeholder="Enter Plot Width"></input>
                                    </div>
                                </div>

                                <div className="input-field col-md-6">

                                    <div className="form-group">
                                        <label>Plot Area (Sq. Yd.) </label>
                                        <input type="text" className="form-control" placeholder="Enter Plot Area"></input>
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
            </div>

        </div>

    </div>
);

Add_plot_details.propTypes = {};

Add_plot_details.defaultProps = {};

export default Add_plot_details;
