import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import {
  Sidebar,
  Segment,
  Button,
  Menu,
  Image,
  Icon,
  Header
} from "semantic-ui-react";

class SidebarNav extends Component {

  render() {
    return <div>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation="push" width="thin" visible={this.props.isVisible} icon="labeled" vertical inverted>
            <NavLink to="/">
              <Menu.Item name="dashboard">
                <Icon name="dashboard" />
                Dashboard
              </Menu.Item>
            </NavLink>
            <NavLink to="/file-share">
              <Menu.Item name="file">
                <Icon name="file" />
                File Share
              </Menu.Item>
            </NavLink>
            <NavLink to="/ticketing">
              <Menu.Item name="ticket">
                <Icon name="ticket" />
                Ticketing
              </Menu.Item>
            </NavLink>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>{this.props.children}</Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>;
  }
}

export default SidebarNav;
