import { Link } from "react-router-dom";
import styled from "styled-components";

export const ToolbarWrapper = styled.div`
  background-color: #fff;
`;

export const ContentWrapper = styled.div`
  padding: 10px 40px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const ItemText = styled.div`
  color: black;

  &:hover, &:active {
    color: white;
  }
`;