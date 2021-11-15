import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import Select from "react-select";
import DatePicker from "react-date-picker";
import Button from "../../components/ui/Button/Button";
import { registerUser } from "../../actions";
import "./SignUp.scss";

function SignUp() {
  const [value, onChange] = useState(new Date());
  const [selected, setSelected] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const schema = Yup.object({
    firstName: Yup.string()
      .matches(/^([^0-9]*)$/, "First name should not contain numbers")
      .required("First name is a required field"),
    lastName: Yup.string()
      .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
      .required("Last name is a required field"),
    //dateOfBirth: Yup.string().required("Date of birth is a required field"),
    //gender: Yup.string().required("Gender is a required field"),
    email: Yup.string()
      .email("Email should have correct format")
      .required("Email is a required field"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    username: Yup.string()
      .matches(
        /^([a-z]+[._0-9A-Za-z]*)$/g,
        "Username should begin from lowercase, contain just letters or numbers and symbols . or _"
      )
      .required("Username is a required field"),
  });
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
        email: "",
        username: "",
      },
      validationSchema: schema,
      onSubmit: (values) => {
        dispatch(registerUser(values, value.getTime(), selected));
        history.push("/movies");
      },
    });
  const handleGender = (selected) => {
    setSelected(selected);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
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
            <DatePicker onChange={onChange} value={value} />
            {touched.dateOfBirth && errors.dateOfBirth ? (
              <div>{errors.dateOfBirth}</div>
            ) : null}
          </div>
          <div className="input-field">
            <Select
              id="gender"
              name="gender"
              value={selected}
              onChange={handleGender}
              options={genders}
              placeholder="Select the gender"
            />
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
          <Link to="/login">
            <p>Already have account? Log in</p>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;