import React, { Component } from "react";
import dashboardRoutes from "../../routes/dashboardroutes";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        {dashboardRoutes.map((prop,key) => {
          return (
            <React.Fragment>
              {prop.name ? (
                <li key={key}>
                  <Link to={prop.path}>{prop.name}</Link>
                </li>
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

export default Sidebar;
