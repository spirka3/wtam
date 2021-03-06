import React from "react";
import { Form, Input, Submit, Error } from "../components/MyForm";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email(
    "Emailova adresa je pravdepodobne neplatna, skus inu"
  ),
  password: Yup.string().min(4, "Pouzi aspon 4 pismena alebo cisla"),
});

const RegisterForm = ({ handleSubmit, authError, switchForm }) => {
  return (
    <>
      <Form onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Input
          name="nick"
          label="Zadaj prihlasovacie meno *"
          placeholder="Sem napis meno, ktorym sa budes prihlasovat"
          required
        />
        <Input
          name="name"
          label="Zadaj svoje meno"
          placeholder="Sem napis svoje meno"
        />
        <Input
          name="surname"
          label="Zadaj svoje priezvisko"
          placeholder="Sem napis svoje priezvisko"
        />
        <Input
          name="age"
          type="number"
          label="Zadaj svoj vek *"
          placeholder="Sem napis cislom kolko mas rokov"
          required
        />
        <Input
          name="password"
          label="Zadaj svoje heslo *"
          type="password"
          placeholder="Sem napis heslo a dobre si ho zapamataj"
          required
        />
        <Error error={authError} />
        <Submit className="btn-block">Zaregistrovat sa?</Submit>
      </Form>
      <div
        style={{
          display: "flex",
          marginTop: "0.75rem",
        }}
      >
        <p onClick={switchForm} className="form-btn">
          <span style={{ color: "black" }}>Mas ucet?</span> Prihlas sa
        </p>
      </div>
    </>
  );
};

export default RegisterForm;
