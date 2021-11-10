import React from "react";
import {
  Form,
  Input,
  Error,
  Submit,
} from "../../../../components/forms/MyForm";
import * as Yup from "yup";

const validationSchema = Yup.object({
  newPassword: Yup.string().min(4, "Pouzi aspon 4 pismena alebo cisla"),
});

const UserPassForm = ({ onSubmit, defaultValues, error }) => {
  return (
    <Form
      onSubmit={onSubmit}
      defaultValues={defaultValues}
      validationSchema={validationSchema}
    >
      <Input
        name="oldPassword"
        label="Stare heslo *"
        placeholder="..."
        required
      />
      <Input
        name="newPassword"
        label="Nove heslo *"
        placeholder="..."
        required
      />
      <Error error={error} />
      <Submit className="btn-block">Zmen heslo</Submit>
    </Form>
  );
};

export default UserPassForm;
