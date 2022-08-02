import React from 'react';
import PropTypes from 'prop-types';
import './Manage_Property.css';


const Manage_Property = () => (
  <div className="Manage_Property">
    <div id="main">
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

  </div>
);

Manage_Property.propTypes = {};

Manage_Property.defaultProps = {};

export default Manage_Property;
