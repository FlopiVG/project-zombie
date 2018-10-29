import React from "react";
import styled from "styled-components";
import Spinner from "./Spinner";

const Button = styled.button`
  display: flex;
  font-weight: bold;
  align-items: center;
  span {
    padding: 0.5em;
  }
`;

export default ({ children, isLoading }) => (
  <Button>
    {isLoading && <Spinner />}
    <span>{children}</span>
  </Button>
);
