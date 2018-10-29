import React from "react";
import styled from "styled-components";

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #aaaaaa;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default () => <Spinner />;
