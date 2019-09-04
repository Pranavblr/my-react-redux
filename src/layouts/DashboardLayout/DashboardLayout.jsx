import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import dashboardRoutes from "../../routes/dashboardroutes";
import { Route } from "react-router-dom";

class DashboardLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12">
                <Header />
              </div>
              <div className="col-md-12">
                {dashboardRoutes.map((prop,key) => {
                  return (
                    <Route
                      path={prop.path}
                      component={prop.component}
                      key={key}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DashboardLayout;
