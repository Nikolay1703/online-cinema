import React from "react";
import { List } from "devextreme-react";
import { NAVIGATION_LIST } from "./consts";
import { ItemText, StyledLink } from "./styled";
import { useSelector } from "react-redux";
import { valuesSelector } from "../selectors";

export const NavigationList: React.FC = () => {

  const renderItem = (data: any) => {
    return (
      <StyledLink to={'/' + data.path}>
        <ItemText>{data.text}</ItemText>
      </StyledLink>
    )
  };

  return (
    <List
      items={NAVIGATION_LIST}
      width={200}
      selectionMode="single"
      itemRender={renderItem}
      className="panel-list dx-theme-accent-as-background-color" />
  )
};
