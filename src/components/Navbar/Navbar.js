//import useState hook to create menu collapse state
import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart, FaHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog, BiArch } from "react-icons/bi";
import { AiOutlineShop } from "react-icons/ai";
import { BsHddNetwork, BsPip, BsSticky, BsJournalArrowUp, BsPeople, BsStar, BsMenuUp, BsBank } from "react-icons/bs";


import logo from '../../project_images/logo.jpg';


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Navbar.css";


const Navbar = ({
  menuIconClick, menuCollapse
}) => {

  //create initial menuCollapse state using useState hook




  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}

            </div>

          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">


              <MenuItem active={true} icon={<FiHome />}><Link to="/"> </Link> Home </MenuItem>
              <SubMenu title=" Branch " icon={<BiArch />}>
                <MenuItem><Link to="/Addbranch"> </Link>  Add Branch    </MenuItem>
                <MenuItem><Link to="/Viewbranch"> </Link>   View Branch  </MenuItem>
                <MenuItem><Link to="/Dailybalance"> </Link>  Daily Balance  </MenuItem>
              </SubMenu>



              <SubMenu title=" Manage Property " icon={<AiOutlineShop />}>
                <MenuItem> <Link to="/add_property_details"> </Link> Add Property Detail   </MenuItem>
                <MenuItem> <Link to="/view_property_detail"> </Link>  View Property Detail  </MenuItem>
                <MenuItem> <Link to="/Add_plot_details"></Link>  Add Plot Detail  </MenuItem>
                <MenuItem> <Link to="/View_plot_details"></Link> View Plot Detail  </MenuItem>
              </SubMenu>


              <SubMenu title=" Sale Property " icon={<BsHddNetwork />}>
                <MenuItem><Link to="/JoinClient"></Link> Join Client  </MenuItem>
                <MenuItem><Link to="/Clientdetails"></Link>  Client Detail  </MenuItem>
                <MenuItem><Link to="/SaleProperty"></Link> Sale Property  </MenuItem>
                <MenuItem><Link to="/ViewSaleProperty"></Link> View Sale Property  </MenuItem>
                <MenuItem><Link to="/UpdateSaleProperty"></Link> Update Sale Property  </MenuItem>
                <MenuItem><Link to="/ClientPayDetails"></Link>  Client Pay Detail  </MenuItem>
                <MenuItem><Link to="/PlotCancel"></Link>Plot Cancel   </MenuItem>
                <MenuItem><Link to="/CancelPlotList"></Link>Cancel Plot List  </MenuItem>
                <MenuItem><Link to="/DueInstallment"></Link> Due Installment</MenuItem>
              </SubMenu>

              <MenuItem icon={<BsPip />}><Link to="/DayCollection"></Link> Day Collection </MenuItem>


              <SubMenu title=" Expenditure " icon={<BsSticky />}>
                <MenuItem><Link to="/AddExpenditure"></Link>  Add Property exp   </MenuItem>
                <MenuItem><Link to="/ViewExpenditure"></Link> view Property exp  </MenuItem>
                <MenuItem><Link to="/AddOfficeExpenditure"></Link>  add office expenditure  </MenuItem>
                <MenuItem><Link to="/ViewOfficeExpenditure"></Link> view office expenditure  </MenuItem>
              </SubMenu>

              <SubMenu title=" Received " icon={<BsJournalArrowUp />}>
                <MenuItem><Link to="/AddReceivedHead"></Link>  add received head   </MenuItem>
                <MenuItem><Link to="/ViewReceivedHead"></Link>  view received head  </MenuItem>
                <MenuItem><Link to="/AddOfficeExpenditureDetail"></Link>  add received  </MenuItem>
                <MenuItem><Link to="/ViewReceived"></Link> view received </MenuItem>
              </SubMenu>

              <SubMenu title=" Team " icon={<BsPeople />}>
                <MenuItem><Link to="/Team"></Link>  Tree   </MenuItem>
                <MenuItem> <Link to="/Direct_member"></Link> Direct Members  </MenuItem>
              </SubMenu>


              <SubMenu title=" Commission " icon={<BsStar />}>
                <MenuItem> <Link to="/Commission"></Link>MLY Commission   </MenuItem>
                <MenuItem><Link to="/Commission_History"></Link>   Commission History    </MenuItem>
                <MenuItem> <Link to="/Lapsed_History"></Link>  Lapsed  History   </MenuItem>
                <MenuItem><Link to="/Print_Commission"></Link> Print Commission    </MenuItem>
                <MenuItem> <Link to="/Agent_Business_History"></Link>Agent Business History    </MenuItem>
                <MenuItem> <Link to="/Withdraw_Commission"></Link>  Withdraw Commission    </MenuItem>

                <MenuItem> <Link to="/Commission_dt"></Link>  Due TDS      </MenuItem>
                <MenuItem> <Link to="/Statment_of_tds"></Link>TDS Statement </MenuItem>
                <MenuItem> <Link to="/Commission_of_d"></Link> Due Commission  </MenuItem>
              </SubMenu>

              <SubMenu title=" Receipt " icon={<BsMenuUp />}>
                <MenuItem><Link to="/Receipt"></Link>  Receipt   </MenuItem>
                <MenuItem> <Link to="/Cancel_receipt"></Link>  Cancel Plot Receipt </MenuItem>
              </SubMenu>

              <MenuItem icon={<FaList />}><Link to="/Promotion"></Link> Promotion </MenuItem>

              <SubMenu title=" Bank Account " icon={<BsBank />}>
                <MenuItem> <Link to="/Add_Bank_account"></Link>  Add Bank Account   </MenuItem>
                <MenuItem> <Link to="/View_bank_details"></Link>  View Bank Account  </MenuItem>
                <MenuItem>  <Link to="/View_bank_transactions"></Link>Transactions   </MenuItem>
              </SubMenu>


            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Navbar;