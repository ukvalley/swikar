import React from 'react';
import PropTypes from 'prop-types';
import './Promotion.css';

const Promotion = () => {

  return (

    <div className="Promotion">
      <div id="main">
        <div className="col-md-12 mt-5">

          <h5>Promotion</h5>

          <div id="inline-form" className="card card card-default scrollspy">
            <div className="card-content">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>SR.No</th>
                      <th>Clinet Name</th>


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

Promotion.propTypes = {};

Promotion.defaultProps = {};

export default Promotion;