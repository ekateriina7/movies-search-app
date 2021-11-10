import React from "react";
import { useFormik } from "formik";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { loginUser } from "../actions";
import Button from "../components/ui/Button/Button";


function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const schema = Yup.object({
    password: Yup.string().required("Password is required"),
    email: Yup.string().required("Email is a required field"),
  });
  const { handleSubmit, handleChange, handleBlur, touched, values, errors } =
    useFormik({
      initialValues: {email:'', password:''},
      validationSchema: schema,
      onSubmit: (values) => {
        localStorage.setItem('user','is logged in')
        dispatch(loginUser(values));
        history.push("/movies");
      },
    });
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
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
            {touched.email && errors.email ? (
              <div>{errors.email}</div>
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
          <Link to='/signup'><p>Don't have account? Sign up</p></Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
