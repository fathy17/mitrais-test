import React from "react";
import styled from "styled-components";
import axios from "axios";

import InputForm from "./InputForm";
import Button from "./Button";
import RadioButton from "./RadioButton";
import BirthForm from "./BirthForm";

const Wrapper = styled.div`
  max-width: 800px;
  max-height: 800px;
  margin: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Footer = styled.div`
  width: 100%;
  text-align: center;
  padding: 40px 0;
  color: white;
  font-size: 25px;
  margin: auto;
  ${(props) =>
    !props.show
      ? `background-color:#a200d3; max-width: 900px`
      : `max-width: 800px;`};
`;

export default function RegistrationForm() {
  const [formInput, setFormInput] = React.useState({
    mobile: "",
    first_name: "",
    last_name: "",
    birth_date: "",
    email: "",
  });
  const show = true;

  const setEmail = (email) => {
    setFormInput({ ...formInput, email });
  };

  const setFirstName = (first_name) => {
    setFormInput({ ...formInput, first_name });
  };

  const setMobileNumber = (mobile) => {
    setFormInput({ ...formInput, mobile });
  };

  const setLastName = (last_name) => {
    setFormInput({ ...formInput, last_name });
  };

  const setGender = (gender) => {
    setFormInput({ ...formInput, gender });
  };

  const setBirth = (birth_date) => {
    setFormInput({ ...formInput, birth_date });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/user/signup", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formInput),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Wrapper>
        <Title>Registration</Title>
        <Form onSubmit={onSubmit} action="submit" id="registration-form">
          <InputForm
            error="Please enter valid Indonesian phone number"
            type="text"
            id="mobileNumber"
            placeholder="Mobile number"
            callBack={setMobileNumber}
          />
          <InputForm
            callBack={setFirstName}
            type="text"
            id="firstName"
            placeholder="First name"
          />
          <InputForm
            callBack={setLastName}
            type="text"
            id="lastName"
            placeholder="Last name"
          />
          <BirthForm callBack={setBirth} />
          <RadioButton callBack={setGender} />
          <InputForm
            callBack={setEmail}
            type="email"
            id="email"
            placeholder="Email"
          />
          <Button id="register" name="Register" />
        </Form>
      </Wrapper>
      <Footer show={show}>
        {show ? <Button id="login" name="Login" /> : "Footer"}
      </Footer>
    </>
  );
}
