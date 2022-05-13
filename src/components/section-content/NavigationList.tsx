import React from "react";
import { List } from "devextreme-react";
import { NAVIGATION_LIST } from "./consts";

export const NavigationList: React.FC = () => (
  <div className="list" style={{ width: '200px' }}>
    <List
      dataSource={NAVIGATION_LIST}
      hoverStateEnabled={true}
      activeStateEnabled={true}
      focusStateEnabled={true}
      className="panel-list dx-theme-accent-as-background-color" />
  </div>
);