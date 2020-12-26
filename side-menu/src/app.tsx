import React from "react";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";

import "./app.scss";

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
            <div className="sub-title">Place your primary content here.</div>
          </SidebarComponent>
          <div>
            <div className="title default">Main content</div>
          </div>
        </div>
      </div>
      // <SidebarComponent id="default-sidebar" ref={(Sidebar:SidebarComponent) => this.sidebarobj = Sidebar} >
      //     <div className="title-header">
      //         <div style={{ display: 'inline-block' }}> Sidebar </div>
      //     </div>
      //     <div className="sub-title">
      //         Place your primary content here.
      //     </div>
      // </SidebarComponent>
    );
  }
}
export default App;
