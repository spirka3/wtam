import React from "react";
import { Form, Input, Submit, Error } from "./MyForm";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email(
    "Emailova adresa je pravdepodobne neplatna, skus inu"
  ),
  password: Yup.string().min(4, "Pouzi aspon 4 pismena alebo cisla"),
});

const RegisterForm = ({ handleSubmit, authError }) => {
  return (
    <Form onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Input
        name="name"
        label="Zadaj prihlasovacie meno *"
        placeholder="Sem napis meno, ktorym sa budes prihlasovat"
        required
      />
      <Input
        name="email"
        label="Zadaj svoj email"
        placeholder="Ak mas emailovu adresu, mozes ju sem napisat"
      />
      <Input
        name="age"
        type="number"
        label="Zadaj svoj vek"
        placeholder="Sem napis cislom kolko mas rokov"
      />
      <Input
        name="password"
        label="Zadaj svoje heslo *"
        type="password"
        placeholder="Sem napis heslo a dobre si ho zapamataj"
        required
      />
      <Error error={authError} />
      <Submit className="btn-block">Zaregistrovat sa</Submit>
    </Form>
  );
};

export default RegisterForm;
