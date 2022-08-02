import React from 'react';
import PropTypes from 'prop-types';
import './Manage_Property.css';


const add_property_detail = () => (
    <div className="add_property_detail">
        <div id="main">
            <div className="col-md-12 mt-5">
                <h5>Add Property Detail</h5>
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
                                        <label>Property Location</label>
                                        <input type="text" className="form-control" placeholder="Enter Property Location"></input>
                                    </div>
                                </div>
                                <div className="input-field col-md-6">

                                    <div className="form-group">
                                        <label>Branch</label>
                                        <input type="text" className="form-control" placeholder="Enter Branch"></input>
                                    </div>
                                </div>

                                <div className="input-field col-md-6">

                                    <div className="form-group">
                                        <label>Property Image</label>
                                        <input type="text" className="form-control" placeholder="Add Image"></input>
                                    </div>
                                </div>

                                <div className="input-field col-md-6">

                                    <div className="form-group">
                                        <label>Property Address</label>
                                        <input type="text" className="form-control" placeholder="Enter Property Address"></input>
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

add_property_detail.propTypes = {};

add_property_detail.defaultProps = {};

export default add_property_detail;



