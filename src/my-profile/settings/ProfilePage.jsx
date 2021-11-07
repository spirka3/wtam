import React, { useState } from "react";
import axios from "axios";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import UserPassForm from "./forms/UserPassForm";
import UserInfoForm from "./forms/UserInfoForm";
import { useAuthContext } from "../../providers/AuthProvider";
import { Button } from "react-bootstrap";

const ProfilePage = () => {
  const [form, setForm] = useState("profile");
  const [error, setError] = useState();

  const { auth, logIn } = useAuthContext();

  const changeForm = ({ target }) => {
    setError(null);
    setForm(target.id);
  };

  const onSubmit = (data) => {
    console.log(form, data);

    // const url = form === "profile" ? "/profile" : "/password";
    // return axios
    //   .patch(url, data)
    //   .then((res) => {
    //     if (form === "profile") {
    //       // update profile data
    //       logIn();
    //     }
    //   })
    //   .catch((err) => {});
  };

  const props = {
    defaultValues: auth.user,
    onSubmit: onSubmit,
    error,
  };

  const active = (id) => (form === id ? "active" : "");

  return (
    <div className="d-flex align-items-end justify-content-center mt-5">
      <div>
        <h1>Nastavenie profilu</h1>
        <ButtonGroup className="my-3 btn-block" onClick={changeForm}>
          <Button id="profile" variant="dark" className={active("profile")}>
            Upravit udaje
          </Button>
          <Button id="passwd" variant="dark" className={active("passwd")}>
            Zmenit heslo
          </Button>
        </ButtonGroup>
        {form === "profile" ? (
          <UserInfoForm {...props} />
        ) : (
          <UserPassForm {...props} />
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
