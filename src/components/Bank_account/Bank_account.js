import React from 'react';
import PropTypes from 'prop-types';
import './Bank_account.css';

const Bank_account = () => (
  <div className="Bank_account">
    <div id="main">
      <div className="col-md-12 mt-5">
        <h5>Add Bank Account Detail</h5>
        <div id="inline-form" className="card card card-default scrollspy">
          <div className="card-content">


            <form action="" method="get">

              <div className="row">
                <div className="input-field col-md-6">

                  <div className="form-group">
                    <label>Bank Name</label>
                    <input type="text" className="form-control" placeholder="Enter Bank Name"></input>
                  </div>
                </div>
                <div className="input-field col-md-6">

                  <div className="form-group">
                    <label>Account Number</label>
                    <input type="text" className="form-control" placeholder="Enter Account Number"></input>
                  </div>
                </div>
                <div className="input-field col-md-6">

                  <div className="form-group">
                    <label>Opening Balance</label>
                    <input type="text" className="form-control" placeholder="Enter Opening Balance"></input>
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

Bank_account.propTypes = {};

Bank_account.defaultProps = {};

export default Bank_account;
