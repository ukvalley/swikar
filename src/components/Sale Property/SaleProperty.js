import React from 'react';
import PropTypes from 'prop-types';
import './SaleProperty.css';

import { BiAbacus, BiBrightness, BiStar, BiHive, BiUserPlus, BiShapePolygon, BiCalendarStar, BiSearchAlt2 } from "react-icons/bi";

const SaleProperty = () => (
 
  <div className="SaleProperty">

    <div id="main">
<div className="col-md-12">
<h5 className="card-title mt-5">Sale Property Information</h5>

<div id="inline-form" className="card card card-default scrollspy">
  <div className="card-content">
   

    <form action="" method="get">

      <div className="row">
        <div className="input-field col-md-6">

          <div className="form-group">
            <label>Registration Year</label>
            <input type="text" className="form-control" placeholder="Enter Registration Year"></input>
          </div>
        </div>
        <div className="input-field col-md-6 ">

          <div className="form-group">
            <label>Registration No.</label>
            <input type="text" className="form-control" placeholder="Enter Registration No.
            "></input>
          </div>
        </div>
      
        <div className="input-field col-md-6 s12 mt-3">
        <label htmlFor="first_name01"> Proposal Date </label>
          <input id="first_name01" className="form-control" type="date" />          
          </div>
       
       

        <div className="input-field col-md-6 mt-3">

          <div className="form-group">
            <label>Proposal Form No</label>
            <input type="text" className="form-control" placeholder="Enter Proposal Form No "></input>
          </div>
        </div>

        <div className="input-field col-md-6 s12 mt-3">
        <label>Client Id</label>
         <select id="nominee_relation" name="nominee_relation">
         <option value="" disabled="" selected="">
          select client id
        </option>
        <option value="Husband">Husband</option>
       
         </select>
     </div>

        <div className="input-field col-md-6 mt-3">
            <div className="form-group">
            <label>Client Name</label>
            <input type="text" className="form-control" placeholder="Enter Client Name
            "></input>
            </div>
        </div>

        <div className="input-field col-md-6 mt-3">
        <label>Propetry Name</label>
         <select id="nominee_relation" name="nominee_relation">
         <option value="" disabled="" selected="">
          Choose Property
        </option>
        <option value="Husband">Husband</option>
       
         </select>
     </div>
      

        <div className="col-md-12 ">      
        <div className="input-field col-md-6 mt-5">
            <div className="form-group">
            <label>Total Plot</label>
            <input type="text" className="form-control" placeholder="Enter Total Plot"></input>
            </div>
        </div>
        </div>

        <div className="input-field col-md-6 mt-5">
            <div className="form-group">
            <label>Plot Number</label>
            <input type="text" className="form-control" placeholder="Enter Plot Number"></input>
            </div>
        </div>
        <div className="input-field col-md-6 mt-5">
            <div className="form-group">
            <label>Total Area (Sq. Yd.)</label>
            <input type="text" className="form-control" placeholder="Enter Total Area (Sq. Yd.)"></input>
            </div>
        </div>
        <div className="input-field col-md-6">
            <div className="form-group">
            <label>Total Amount</label>
            <input type="text" className="form-control" placeholder="Enter Total Amount"></input>
            </div>
        </div>
        <div className="input-field col-md-6">
            <div className="form-group">
            <label>Agreement Fees</label>
            <input type="text" className="form-control" placeholder="Enter Agreement Fees
            "></input>
            </div>
        </div>

        <div className="col-md-12 ">
       
             <label htmlFor="last_name">
              <b>Business</b>{" "}
             </label>

             <label className="p ">
             <input name="business" id="business" type="radio" defaultValue="job" />
             <span>job</span>
             </label>

             <label className="p">
            <input
              name="business"
              id="business"
              type="radio"
              defaultValue="Student"
             />
              <span>Student</span>
            </label>

            <label className="p">
              <input
               name="business"
               id="business"
              type="radio"
             defaultValue="Self Business"
             />
             <span>Self Business</span>
             </label>

           
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

SaleProperty.propTypes = {};

SaleProperty.defaultProps = {};

export default SaleProperty;
