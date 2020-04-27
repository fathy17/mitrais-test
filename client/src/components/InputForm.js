import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  margin-bottom: 20px;
  height: 30px;
  width: 100%;
  padding: 10px;
`;

const Error = styled.div`
  position: absolute;
  padding: 10px 50px;
  background-color: red;
  color: white;
  left: 400px;
  bottom: 60px;
  font-size: 13px;
`;

const Triangle = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  background-color: red;
  bottom: -5px;
  right: 50%;
  transform: rotate(45deg);
  z-index: -1;
`;

export default function InputForm(props) {
  const onChange = (e) => {
    props.callBack(e.target.value);
  };

  return (
    <Wrapper>
      {props.error ? (
        <Error>
          {props.error}
          <Triangle />
        </Error>
      ) : null}
      <Input
        onChange={onChange}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      />
    </Wrapper>
  );
}
