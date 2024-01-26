import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import styles from "../common/FormsControls/FormsControls.module.css"
import { createField } from "../common/FormsControls/FormsControls";

const LoginForm = ({handleSubmit, error}) => {
  //  if(props.isAuth===true){return <Navigate to='/profile'/>}
  return (
    <form onSubmit={handleSubmit}>
      
        {createField("Email", "email", [required], Input)}
        {createField("Password", "password", [required], Input, {type: "password"})}
        {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
      {error && <div className={styles.formSummaryError}>
        {error}
      </div>}
      <div>
        <button type={"submit"}>login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => { //object(formData) with all input values
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Navigate to="/profile" />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
      <h3>Test account:</h3>
    <ul>
        <li><b>Email: free@samuraijs.com</b></li>
        <li><b>Password: free</b></li>
    </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}


// export default connect(mapStateToProps,{})(Login);
export default connect(mapStateToProps, { login })(Login);