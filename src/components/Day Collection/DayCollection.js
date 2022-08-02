import React from 'react';
import PropTypes from 'prop-types';
import './DayCollection.css';

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";

const DayCollection = () => (

  <div className="DayCollection">
    <div id="main">

      <div className="col s12 m12 l12">
        <h5 className="card-title mt-5">Day Collection </h5>
        <div id="Form-advance" className="card card card-default scrollspy">
          <div className="card-content">

            <form>
              <div className="row ">
                <div className="input-field col-md-4">
                  <label htmlFor="first_name01"> From Date </label>
                  <input className='form-control s1' id="first_name01" type="date" />
                </div>


                <div className="input-field col-md-4">
                  <label htmlFor="first_name01"> From Date </label>
                  <input className='form-control s1' id="first_name01" type="date" />
                </div>


                <div className="input-field col-md-4">
                  <label>Propetry Name</label>
                  <select>
                    <option value="" disabled="" selected="">
                      Select Property
                    </option>
                    <option value={1}>Ambedker nagar - 2</option>
                    <option value={2}>Shree ram nagar extention _A</option>
                    <option value={3}>shree ram nagar</option>
                    <option value={4}> vardhman nagar</option>
                    <option value={5}> ambedker nagar</option>
                    <option value={6}> shree ram nagar 1st</option>
                  </select>

                </div>
              </div>

              <div className="input-field col-md-12 mt-2">
                <div className="input-field col s12">
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

DayCollection.propTypes = {};

DayCollection.defaultProps = {};

export default DayCollection;
