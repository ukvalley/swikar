import React from 'react';
import PropTypes from 'prop-types';
import './Receipt.css';

const Receipt = () => (
  <div className="Receipt">
    <div id="main">
      <div className="col-md-12 mt-5">
        <h5>Receipt Detail</h5>
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

Receipt.propTypes = {};

Receipt.defaultProps = {};

export default Receipt;
