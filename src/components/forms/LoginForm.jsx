import React from "react";
import { Form, Error, Input, Submit } from "./MyForm";
import { Button } from "react-bootstrap";

const LoginForm = ({ handleSubmit, authError, switchForm }) => {
  return (
    <div>
      <Form onSubmit={handleSubmit} className="my-form">
        <Input name="name" label="Zadaj prihlasovacie meno *" required />
        <Input
          name="password"
          type="password"
          label="Zadaj svoje heslo *"
          required
        />
        <Error error={authError} />
        <Submit className="btn-block">Prihlasit sa</Submit>
      </Form>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <Button variant="link" onClick={switchForm}>
          <span style={{ color: "black" }}>Nemas ucet?</span> Zaregistruj sa
        </Button>
        <Button variant="link">Zabudol som heslo</Button>
      </div>
    </div>
  );
};

export default LoginForm;
