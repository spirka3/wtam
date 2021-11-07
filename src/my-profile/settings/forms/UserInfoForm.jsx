import React from "react";
import {
  Form,
  Input,
  Error,
  Submit,
  Select,
} from "../../../components/forms/MyForm";

const UserInfoForm = ({ onSubmit, defaultValues, error }) => {
  return (
    <Form onSubmit={onSubmit} defaultValues={defaultValues}>
      <Input
        name="name"
        label="Prihlasovacie meno *"
        placeholder="..."
        required
      />
      <Input name="email" label="Email" placeholder="..." />
      <Input name="vek" label="Vek" placeholder="..." />
      <Select
        name="team"
        label="Vyber svoju druzinu"
        options={[1, 2, 3]}
        placeholder="..."
      />
      <Error error={error} />
      <Submit className="btn-block">Uloz zmeny</Submit>
    </Form>
  );
};

export default UserInfoForm;
