import React from "react";
import styled from "styled-components";

const ActionButton = styled.button`
  background: none;
  border: none;
  background-color: #a200d3;
  padding: 10px 0;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-bottom: 20px;
`;

export default function Button(props) {
  return (
    <ActionButton type="submit" id={props.type}>
      {props.name}
    </ActionButton>
  );
}
