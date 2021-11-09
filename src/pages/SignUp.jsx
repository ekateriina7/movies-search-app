import React from "react";
import { useFormik } from "formik";
//import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import Button from "../components/ui/Button/Button";
import { registerUser } from "../actions";

function SignUp() {
  //const history = useHistory();
  const dispatch = useDispatch();
  const schema = Yup.object({
    firstName: Yup.string()
      .matches(/^([^0-9]*)$/, "First name should not contain numbers")
      .required("First name is a required field"),
    lastName: Yup.string()
      .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
      .required("Last name is a required field"),
    dateOfBirth: Yup.string().required("Date of birth is a required field"),
    sex: Yup.string().required("Sex is a required field"),
    email: Yup.string()
      .email("Email should have correct format")
      .required("Email is a required field"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    username: Yup.string().required("Username is a required field"),
  });
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        sex: "",
        password: "",
        confirmPassword: "",
        email: "",
        username: "",
      },
      validationSchema: schema,
      onSubmit: (values) => {
        console.log(values)
        dispatch(registerUser(values));
        //history.push("/movies");
      },
    });
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field">
            <input
              id="first_name"
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="First name"
              className="validate"
            />
            {touched.firstName && errors.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
          </div>
          <div className="input-field">
            <input
              id="last_name"
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              className="validate"
              onBlur={handleBlur}
              placeholder="Last name"
            />
            {touched.lastName && errors.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
          </div>
          <div className="input-field">
            <input
              id="date_of_birth"
              type="text"
              name="dateOfBirth"
              value={values.dateOfBirth}
              onChange={handleChange}
              className="validate"
              onBlur={handleBlur}
              placeholder="Date of birth"
            />
            {touched.dateOfBirth && errors.dateOfBirth ? (
              <div>{errors.dateOfBirth}</div>
            ) : null}
          </div>
          <div className="input-field">
            <input
              id="sex"
              type="text"
              name="sex"
              value={values.sex}
              onChange={handleChange}
              className="validate"
              onBlur={handleBlur}
              placeholder="Sex"
            />
            {touched.sex && errors.sex ? <div>{errors.sex}</div> : null}
          </div>
          <div className="input-field">
            <input
              id="email"
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              className="validate"
              onBlur={handleBlur}
              placeholder="Email"
            />
            {touched.email && errors.email ? <div>{errors.email}</div> : null}
          </div>
          <div className="input-field">
            <input
              id="password"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Password"
              className="validate"
            />
            {touched.password && errors.password ? (
              <div>{errors.password}</div>
            ) : null}
          </div>
          <div className="input-field">
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              className="validate"
              onBlur={handleBlur}
              placeholder="Confirm password"
            />
            {touched.confirmPassword && errors.confirmPassword ? (
              <div>{errors.confirmPassword}</div>
            ) : null}
          </div>
          <div className="input-field">
            <input
              id="username"
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              className="validate"
              onBlur={handleBlur}
              placeholder="Username"
            />
            {touched.username && errors.username ? (
              <div>{errors.username}</div>
            ) : null}
          </div>
          <Button>Register</Button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
