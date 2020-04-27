import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  margin: 0 30px 0 10px;
`;

const Input = styled.input`
  width: 20px;
  height: 20px;
`;

export default function RadioButton(props) {
  return (
    <Wrapper>
      <Input
        onChange={(e) => {
          props.callBack(e.target.value);
        }}
        type="radio"
        id="male"
        name="gender"
        value={1}
      />
      <Label htmlFor="male">Male</Label>
      <Input
        onChange={(e) => {
          props.callBack(e.target.value);
        }}
        type="radio"
        id="female"
        name="gender"
        value={0}
      />
      <Label htmlFor="female">Female</Label>
    </Wrapper>
  );
}
