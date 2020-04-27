import React from "react";
import styled from "styled-components";

import RegistrationForm from "./components/RegistrationForm";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px 0;
`;

function App() {
  return (
    <Container>
      <RegistrationForm />
    </Container>
  );
}

export default App;
