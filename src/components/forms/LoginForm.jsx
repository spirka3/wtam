import React from "react";
import { Form, Error, Input, Submit } from "./MyForm";

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
        <p onClick={switchForm} className="form-btn">
          <span style={{ color: "black" }}>Nemas ucet?</span> Zaregistruj sa
        </p>
        <p className="form-btn">Zabudol som heslo</p>
      </div>
    </div>
  );
};

export default LoginForm;
