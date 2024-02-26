import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Header(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="header">
      <Navbar color="faded" light expand="md">
        <NavbarBrand  href="/" className="me-auto  brand">
         <img src="assets/logoAi.png" alt="" className='logo'/>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar  className='navbar navbararea'>
          <div className="header-items">
          <NavItem  className='staking'>
              <NavLink href="">
                Staking
              </NavLink>
            </NavItem>
      
            <NavItem  className='staking'>
              <NavLink href="https://poocoin.app/tokens/0x5851ca8d980ecb041cf4202cf43a7cbfa593dcd0">
              Buy MLT
              </NavLink>
            </NavItem>
            <NavItem  className='staking'>
              <NavLink href="">
              AI News
              </NavLink>
            </NavItem>
          </div>

          
            <NavItem  className='stakingdiv'>
              <NavLink href="">
                <button className="stake-btn">AIShop</button>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      
   
    </div>
  );
}

export default Header;
