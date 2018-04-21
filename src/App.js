import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import SidebarNav from "./components/SidebarNav/SidebarNav";
import Main from "./layout/Main/Main";


class App extends Component {
  state = {
    users: [],
    reportData: [],
    organization: [],
    currentUser: {},
    googleAnalytics: {},
    sidebarDrawerOpen: true
  };

  toggleDrawer = () =>
    this.setState({ sidebarDrawerOpen: !this.state.sidebarDrawerOpen });


  componentDidMount() {
    // call 321 organization API and set state
    fetch("http://localhost:8003/api/organizations/3.json")
      .then(response => response.json())
      .then(data => this.setState({ organization: data }));
    // call users API and set state
    fetch("http://localhost:8003/api/users.json")
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
      // call current User API and set state
    fetch("http://localhost:8003/api/users/5.json")
      .then(response => response.json())
      .then(data => this.setState({ currentUser: data }));
    // call report API and set state
    fetch("http://localhost:8003/api/ga/3.json")
      .then(response => response.json())
      .then(data => this.setState({ reportData: data }));
        // call current User API and set state
    fetch("http://localhost:8003/api/ga/3.json")
      .then(response => response.json())
      .then(data => this.setState({ googleAnalytics: data[0] }));
  }

  render() {
    let userCards = Object.keys(this.state.users).map(key => {
      return <div className="user" style={{color: 'black'}} key={key}>
          {this.state.users[key].username}
        </div>;
    });

    return <BrowserRouter>
        <div className="App">
          <SidebarNav isVisible={this.state.sidebarDrawerOpen} toggleDrawer={this.toggleDrawer}>
            <Main users={this.state.users} />
          </SidebarNav>
        </div>
      </BrowserRouter>;
  }
}

export default App;
