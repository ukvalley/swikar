import React, { useState, useEffect, handleNavigation } from "react";
import PropTypes from 'prop-types';
import './Dashboard.css';
import './dash.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//import icons from react icons

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";


const Dashboard = () => {



  return (


    <main>
      <div className="Dashboard">



        <div id="main">

          <div className="col s12">
            <div className="container">
              <div className="section">


                <div className='col-md-12'>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="card padding-4 animate fadeLeft card_1">
                        <div className="row">
                          <div className="col s5 m5">
                            <h5 className="mb-0">1885</h5>
                            <p className="no-margin"></p>
                            <p className="mb-0 pt-8">Total Project</p>
                          </div>
                          <div className="col s7 m7 right-align">
                            <i
                              className="material-icons background-round mt-5 mb-5  white-text">  <BiAbacus /></i>
                            <p className="mb-0"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card padding-4 animate fadeLeft card_2">
                        <div className="row">
                          <div className="col s5 m5">
                            <h5 className="mb-0">1885</h5>
                            <p className="no-margin"></p>
                            <p className="mb-0 pt-8">Total Project</p>
                          </div>
                          <div className="col s7 m7 right-align">
                            <i
                              className="material-icons background-round mt-5 mb-5  white-text">  <BiCalendarStar /></i>
                            <p className="mb-0"></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="card padding-4 animate fadeLeft card_3">
                        <div className="row">
                          <div className="col s5 m5">
                            <h5 className="mb-0">1885</h5>
                            <p className="no-margin"></p>
                            <p className="mb-0 pt-8">Total Project</p>
                          </div>
                          <div className="col s7 m7 right-align">
                            <i
                              className="material-icons background-round mt-5 mb-5  white-text"><BiShapePolygon /></i>
                            <p className="mb-0"></p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="card padding-4 animate fadeLeft card_4">
                        <div className="row">
                          <div className="col s5 m5">
                            <h5 className="mb-0">1885</h5>
                            <p className="no-margin"></p>
                            <p className="mb-0 pt-8">Total Project</p>
                          </div>
                          <div className="col s7 m7 right-align">
                            <i
                              className="material-icons background-round mt-5 mb-5  white-text"><BiStar /></i>
                            <p className="mb-0"></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="col-md-12">
            <div className="col-md-6 mt-3 dash_table">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"> <i className="material-icons"><BiCalendarStar /></i></th>
                    <th scope="col">Total Property Expenditure</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td>ALL</td>
                    <td></td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>Monthly</td>
                    <td></td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>Today</td>
                    <td></td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-6 mt-3 dash_table">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"><i className="material-icons"><BiCalendarStar /></i></th>
                    <th scope="col">Total Office Expenditure</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td>ALL</td>
                    <td></td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>Monthly</td>
                    <td></td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row"></th>
                    <td>Today</td>
                    <td></td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className='col-md-12'>
            <div className="row">
              <div className="col-md-6">
                <div className="card padding-4 animate fadeLeft">
                  <div className="row">
                    <div className="col s5 m5">
                      <h5 className="mb-0">1885</h5>
                      <p className="no-margin"></p>
                      <p className="mb-0 pt-8">Total Client</p>
                    </div>
                    <div className="col s7 m7 right-align">
                      <i
                        className="material-icons background-round mt-5 mb-5 gradient-45deg-purple-amber gradient-shadow white-text">  <BiUserPlus /></i>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-4">
                <div className="card padding-4 animate fadeLeft">
                  <div className="row">
                    <div className="col s5 m5">
                      <h5 className="mb-0">1885</h5>
                      <p className="no-margin"></p>
                      <p className="mb-0 pt-8">Total Branch</p>
                    </div>
                    <div className="col s7 m7 right-align">
                      <i
                        className="material-icons background-round mt-5 mb-5 gradient-45deg-purple-amber gradient-shadow white-text"><BiShapePolygon /></i>
                      <p className="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div id="inline-form" className="card card card-default scrollspy">
              <div className="card-content">
                <h4 className="card-title mb-3">Search Client</h4>

                <form action="" method="get">

                  <div className="row">
                    <div className="input-field col-md-4">

                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Enter Client Name"></input>
                      </div>
                    </div>
                    <div className="input-field col-md-4">

                      <div className="form-group">
                        <label>Father's Name.</label>
                        <input type="text" className="form-control" placeholder="Enter Father's Name"></input>
                      </div>
                    </div>
                    <div className="input-field col-md-4">

                      <div className="form-group">
                        <label>Mobile No.</label>
                        <input type="text" className="form-control" placeholder="Enter Mobile Number"></input>
                      </div>
                    </div>



                    <div className="input-field col-md-4">
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





      </div >
    </main>
  )


};

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
