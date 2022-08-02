import React from 'react';
import PropTypes from 'prop-types';
import './JoinClient.css';

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";

const JoinClient = () => (

  <div className="JoinClient">

    <div id="main">

      <div className="col-md-12">
        <h5 className="card-title mt-5">Join Client</h5>
        <div id="inline-form" className="card card card-default scrollspy">
          <div className="card-content">


            <form action="" method="get">

              <div className="row">
                <div className="input-field col-md-6">

                  <div className="form-group">
                    <label>Client Name</label>
                    <input type="text" className="form-control" placeholder="Enter Client Name"></input>
                  </div>
                </div>
                <div className="input-field col-md-6">

                  <div className="form-group">
                    <label>Father / Husband Name</label>
                    <input type="text" className="form-control" placeholder="Enter Father / Husband Name
            "></input>
                  </div>
                </div>

                <div className="input-field col-md-6 s12 ">
                  <label htmlFor="first_name01"> From Date </label>
                  <input id="first_name01" className="form-control" type="date" />

                </div>



                <div className="input-field col-md-6 ">

                  <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" placeholder="Enter Age"></input>
                  </div>
                </div>

                <div className="input-field col-md-6">
                  <div className="form-group">
                    <label>Cast</label>
                    <input type="text" className="form-control" placeholder="Enter Cast"></input>
                  </div>
                </div>

                <div className="input-field col-md-6">
                  <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Enter Address"></input>
                  </div>
                </div>

                <div className="col-md-12 ">

                  <label htmlFor="last_name">
                    <b>Business</b>{" "}
                  </label>

                  <label className="p ">
                    <input name="business" id="business" type="radio" defaultValue="job" />
                    <span> job</span>
                  </label>

                  <label className="p">
                    <input
                      name="business"
                      id="business"
                      type="radio"
                      defaultValue="Student"
                    />
                    <span> Student</span>
                  </label>

                  <label className="p">
                    <input
                      name="business"
                      id="business"
                      type="radio"
                      defaultValue="Self Business"
                    />
                    <span> Self Business</span>
                  </label>

                  <label className="p">
                    <input
                      name="business"
                      id="business"
                      type="radio"
                      defaultValue="House Wife"
                    />
                    <span> House Wife</span>
                  </label>

                  <label className="p mt-4">
                    <input name="business" id="business" type="radio" defaultValue="Farmer" />
                    <span> Farmer</span>
                  </label>
                </div>

                <div className="input-field col-md-6 mt-5">
                  <div className="form-group">
                    <label> Taluka</label>
                    <input type="text" className="form-control" placeholder="Enter Taluka"></input>
                  </div>
                </div>
                <div className="input-field col-md-6 mt-5">
                  <div className="form-group">
                    <label> District</label>
                    <input type="text" className="form-control" placeholder="Enter District"></input>
                  </div>
                </div>
                <div className="input-field col-md-6">
                  <div className="form-group">
                    <label> State</label>
                    <input type="text" className="form-control" placeholder="Enter State"></input>
                  </div>
                </div>
                <div className="input-field col-md-6">
                  <div className="form-group">
                    <label>Pincode</label>
                    <input type="text" className="form-control" placeholder="Enter Pincode"></input>
                  </div>
                </div>

                <div className="input-field col-md-6">
                  <div className="form-group">
                    <label>Nominee Name</label>
                    <input type="text" className="form-control" placeholder="Enter Nominee Name"></input>
                  </div>
                </div>

                <div className="input-field col-md-6 s12">
                  <label>Nominee Relation</label>
                  <select id="nominee_relation" name="nominee_relation">
                    <option value="" disabled="" selected="">
                      Relation
                    </option>
                    <option value="Husband">Husband</option>
                    <option value="Wife">Wife</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Sister">Sister</option>
                    <option value="Brother">Brother</option>
                    <option value="Son">Son</option>
                    <option value="Daughter">Daughter</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="input-field col-md-6">
                  <div className="form-group">
                    <label>Nominee Age</label>
                    <input type="text" className="form-control" placeholder="Enter nominee_age"></input>
                  </div>
                </div>
                <div className="input-field col-md-6">
                  <div className="form-group">
                    <label>Client E-Mail Id</label>
                    <input type="text" className="form-control" placeholder="Enter Client E-Mail Id
            "></input>
                  </div>
                </div>

                <div className="input-field col-md-6">
                  <div className="form-group">
                    <label>Mobile Number 1</label>
                    <input type="text" className="form-control" placeholder="EnterMobile Number 1

            "></input>
                  </div>
                </div>
                <div className="input-field col-md-6">
                  <div className="form-group">
                    <label>Mobile Number 2</label>
                    <input type="text" className="form-control" placeholder="Mobile Number 2
            "></input>
                  </div>
                </div>

                <div className="input-field col-md-6">
                  <div className="form-group">
                    <label>Client Mobile Number</label>
                    <input type="text" className="form-control" placeholder="Client Number 
            "></input>
                  </div>
                </div> <div className="input-field col-md-6">
                  <div className="form-group">
                    <label>Client E-Mail Id</label>
                    <input type="text" className="form-control" placeholder="Client E-Mail Id
            "></input>
                  </div>
                </div>


                <div className="input-field col-md-6">
                  <div className="form-group">
                    <label>Client E-Mail Id</label>
                    <input type="text" className="form-control" placeholder="Client E-Mail Id
            "></input>
                  </div>
                </div>
              </div>

              <div className='col-md-12'>
                <h6>KYC DETAILS</h6>
                <div className="input-field col-md-6">
                  <div className="form-group">
                    <label>Bank Account Number</label>
                    <input type="text" className="form-control" placeholder="Bank Account Number
            "></input>
                  </div>
                </div>
                <div className="input-field col-md-6">
                  <div className="form-group">
                    <label>Bank Name</label>
                    <input type="text" className="form-control" placeholder="Bank Name
            "></input>
                  </div>
                </div>

                <div className="input-field col-md-6">
                  <div className="form-group">
                    <label>Bank Account Name</label>
                    <input type="text" className="form-control" placeholder="Bank Account Name
            "></input>
                  </div>
                </div>
                <div className="input-field col-md-6">
                  <div className="form-group">
                    <label>Bank IFSC</label>
                    <input type="text" className="form-control" placeholder="Bank IFSC
            "></input>
                  </div>
                </div>
                <div className="input-field col-md-8">
                  <div className="form-group">
                    <label>PAN</label>
                    <input type="text" className="form-control" placeholder="PAN
            "></input>
                  </div>
                </div>

                <div className="col-md-8">
                  <button className="btn btn-primary" type="submit">
                    Search</button>
                </div>



              </div>


            </form>
          </div>
        </div>
      </div>

    </div>
  </div>

);

JoinClient.propTypes = {};

JoinClient.defaultProps = {};

export default JoinClient;
