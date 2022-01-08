import React from "react";
import { Form, Error, Input, Submit } from "../components/MyForm";

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
    </div>
  );
};

export default LoginForm;
