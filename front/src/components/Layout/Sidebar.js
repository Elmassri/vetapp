import logo200Image from 'assets/img/logo/logo_200.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import React from 'react';
import {
  MdDashboard,
  MdRadioButtonChecked,

  MdAdd,
  MdSend,
  MdStar,
  MdTextFields,
  MdViewCarousel,
  MdViewDay,
  MdViewList,
  MdWeb,
  MdWidgets,

} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
  // UncontrolledTooltip,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};



const navItems = [
  { to: '/', name: 'dashboard', exact: true, Icon: MdDashboard },

  { to: '/ViewDetails', name: 'ViewDetails', exact: false, Icon: MdRadioButtonChecked },

  /* { to: '/cards', name: 'cards', exact: false, Icon: MdWeb },
  { to: '/charts', name: 'charts', exact: false, Icon: MdInsertChart },
  { to: '/widgets', name: 'widgets', exact: false, Icon: MdWidgets }, */

  { to: '/addUser', name: 'adduser', exact: false, Icon: MdAdd },
  
 
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
  state = {
    isOpenComponents: true,
    isOpenContents: true,
    isOpenPages: true,
  };
  
  handleClick = name => () => {
    this.setState(prevState => {
      const isOpen = prevState[`isOpen${name}`];

      return {
        [`isOpen${name}`]: !isOpen,
      };
    });
  };

  render() {
    return (
      <aside className={bem.b()} data-image={sidebarBgImage}>
        <div className={bem.e('background')} style={sidebarBackground} />
        <div className={bem.e('content')}>
          <Navbar>

            <img
              src={logo200Image}
              width="110"
              height="90"
              className="pr-2"
              alt=""
            />
            <span className="text-white" >
              VetApp
              </span>

          </Navbar>
          <Nav vertical>
            {navItems.map(({ to, name, exact, Icon }, index) => (
              <NavItem key={index} className={bem.e('nav-item')}>
                <BSNavLink
                  id={`navItem-${name}-${index}`}
                  className="text-uppercase"
                  tag={NavLink}
                  to={to}
                  activeClassName="active"
                  exact={exact}
                >
                  <Icon className={bem.e('nav-item-icon')} />
                  <span className="">{name}</span>
                </BSNavLink>
              </NavItem>
              
            ))}
              <NavItem onClick={this.props.logout}>logout</NavItem>

          </Nav>
        </div>
      </aside>

    );
  }
}

export default Sidebar;
