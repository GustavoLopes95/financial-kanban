import React from "react";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import myPacel  from '../../main-container/src/gl-main-container';
import Parcel from 'single-spa-react/parcel';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import "./app.scss";
import SingleSpaReact from "single-spa-react";

class App extends React.Component {
  public sidebarobj: SidebarComponent | null = null;

  //close the sidebar
  closeClick(): void {
    this.sidebarobj?.hide();
  }

  //open the sidebar
  openClick(): void {
    this.sidebarobj?.show();
  }

  render() {
    return (
      <div id="wrapper">
        <div className="col-lg-12 col-sm-12 col-md-12" id="sidebar-section">
          <span
            id="hamburger"
            className="e-icons menu default"
            onClick={this.openClick.bind(this)}
          ></span>
          <SidebarComponent
            id="default-sidebar"
            ref={(Sidebar: SidebarComponent) => (this.sidebarobj = Sidebar)}
          >
            <div className="title-header">
              <div style={{ display: "inline-block" }}> Sidebar </div>
              <span
                id="close"
                className="e-icons"
                onClick={this.closeClick.bind(this)}
              ></span>
            </div>
            <div className="sub-title flex flex-col">
              <Router>
                <Link to="/">Dashboard</Link>
                <Link to="/products">Products</Link>
              </Router>
            </div>
          </SidebarComponent>
          <Parcel config={myPacel} wrapWith="div" />
        </div>
      </div>
    );
  }
}
export default App;
