import React, { useState } from "react";
import PropTypes from 'prop-types';
import './Main.css';

import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


import Manage_Property from "../Manage_Property/Manage_Property";

import Add_Property from "../Manage_Property/add_property_detail";
import View_property_detail from "../Manage_Property/view_property_detail";
import Add_plot_details from "../Manage_Property/add_plot_details";
import View_plot_details from "../Manage_Property/View_plot_details"


import Bank_account from "../Bank_account/Bank_account";
import View_bank_details from "../Bank_account/View_bank_details";
import View_bank_transactions from "../Bank_account/View_bank_transactions";


import Promotion from "../Promotion/Promotion";
import Receipt from "../Receipt/Receipt";
import Cancel_receipt from "../Receipt/Cancel_receipt";

import Team from "../Team/Team";
import Direct_member from "../Team/Direct_member";


import Commission from "../Commission/Commission";
import Commission_History from "../Commission/Commission_History";
import Lapsed_History from "../Commission/Lapsed_History";
import Print_Commission from "../Commission/Print_Commission";
import Agent_Business_History from "../Commission/Agent_Business_History";
import Withdraw_Commission from "../Commission/Withdraw_Commission";
import Statment_of_tds from "../Commission/Statment_of_tds";
import Commission_of_d from "../Commission/Commission_of_d";
import Commission_dt from "../Commission/Commission_dt";


import Branch from "../Branch/Branch";
import Addbranch from "../Branch/addBranch";
import Viewbranch from "../Branch/viewBranch";
import Dailybalance from "../Branch/dailyBalance";

import JoinClient from "../Sale Property/JoinClient";
import ClientDetails from "../Sale Property/ClientDetails";
import SaleProperty from "../Sale Property/SaleProperty";
import ViewSaleProperty from "../Sale Property/ViewSaleProperty";
import UpdateSaleProperty from "../Sale Property/UpdateSaleProperty";
import ClientPayDetails from "../Sale Property/ClientPayDetails";
import PlotCancel from "../Sale Property/PlotCancel";
import CancelPlotList from "../Sale Property/CancelPlotList";
import DueInstallment from "../Sale Property/DueInstallment";

import DayCollection from "../Day Collection/DayCollection";

import AddExpenditure from "../Expenditure/AddExpenditure";
import ViewExpenditure from "../Expenditure/ViewExpenditure";
import AddOfficeExpenditure from "../Expenditure/AddOfficeExpenditure";
import ViewOfficeExpenditure from "../Expenditure/ViewOfficeExpenditure";

import AddReceivedHead from "../Received/AddReceivedHead"
import ViewReceivedHead from "../Received/ViewReceivedHead";
import AddOfficeExpenditureDetail from "../Received/AddOfficeExpenditureDetail";
import ViewReceived from "../Received/ViewReceived";


const Main = () => {

  const [menuCollapse, setMenuCollapse] = useState(false)

  //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };


  return (

    <div className="Main">
      <Header

        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}
      />

      <Navbar

        menuCollapse={menuCollapse}
        menuIconClick={menuIconClick}



      />



      <Routes>

        <Route exact path='/' element={< Dashboard
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>



        <Route path='/dashboard' element={< Dashboard
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/add_property_details' element={< Add_Property
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/view_property_detail' element={< View_property_detail
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/Add_plot_details' element={< Add_plot_details
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/View_plot_details' element={< View_plot_details
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>




        <Route path='/Add_Bank_account' element={< Bank_account
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/View_bank_details' element={< View_bank_details
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/View_bank_transactions' element={< View_bank_transactions
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/Promotion' element={< Promotion
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/Receipt' element={< Receipt
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/Cancel_receipt' element={< Cancel_receipt
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/Team' element={< Team
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/Direct_member' element={< Direct_member
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/Commission' element={< Commission
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/Commission_History' element={< Commission_History
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/Lapsed_History' element={< Lapsed_History
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/Print_Commission' element={< Print_Commission
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/Agent_Business_History' element={< Agent_Business_History
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/Withdraw_Commission' element={< Withdraw_Commission
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/Commission_dt' element={< Commission_dt
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/Statment_of_tds' element={< Statment_of_tds
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/Commission_of_d' element={< Commission_of_d
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>


        <Route path='/addbranch' element={< Addbranch
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>
        <Route path='/Viewbranch' element={< Viewbranch
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>
        <Route path='/Dailybalance' element={< Dailybalance
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/JoinClient' element={< JoinClient
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>
        <Route path='/Clientdetails' element={< ClientDetails
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>
        <Route path='/SaleProperty' element={< SaleProperty
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>
        <Route path='/ViewSaleProperty' element={<ViewSaleProperty
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>
        <Route path='/UpdateSaleProperty' element={<UpdateSaleProperty
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>
        <Route path='/ClientPayDetails' element={<ClientPayDetails
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>
        <Route path='/PlotCancel' element={<PlotCancel
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>
        <Route path='/CancelPlotList' element={<CancelPlotList
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>
        <Route path='/DueInstallment' element={<DueInstallment
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/DayCollection' element={<DayCollection
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/AddExpenditure' element={<AddExpenditure
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>
        <Route path='/ViewExpenditure' element={<ViewExpenditure
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>
        <Route path='/AddOfficeExpenditure' element={<AddOfficeExpenditure
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />} ></Route>
        <Route path='/ViewOfficeExpenditure' element={<ViewOfficeExpenditure
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />} ></Route>

        <Route path='/AddReceivedHead' element={<AddReceivedHead
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>

        <Route path='/ViewReceivedHead' element={<ViewReceivedHead
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}>
        </Route>

        <Route path='/AddOfficeExpenditureDetail' element={<AddOfficeExpenditureDetail
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>


        <Route path='/ViewReceived' element={<ViewReceived
          menuCollapse={menuCollapse}
          menuIconClick={menuIconClick}
        />}></Route>







      </Routes>





    </div>
  )

};

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
