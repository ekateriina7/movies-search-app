import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../components/ui/Button/Button";


function Login() {
 
  const schema = Yup.object({
    password: Yup.string().required("Password is required"),
    username: Yup.string().required("Username is a required field"),
  });
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {username:'', password:''},
      validationSchema: schema,
      onSubmit: (values) => {
       //dispatch(registerUser('0303gavkat@gmail.com', '7777777'))
      },
    });
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
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
          <Button>Register</Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
