import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
  //  if(props.isAuth===true){return <Navigate to='/profile'/>}
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"email"} name={"email"} component={Input} type={"text"}  validate={[required]}/>
      </div>
      <div>
        <Field placeholder={"password"} name={"password"} component={Input} type={"password"} validate={[required]}/>
      </div>
      <div>
        <Field component={Input} name={"rememberMe"}  type={"checkbox"}/> remember me
      </div>
      <div>
        <button type={"submit"}>login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
   const onSubmit = (formData) => { //object(formData) with all input values
       props.login(formData.email, formData.password,formData.rememberMe)
  }

  if(props.isAuth){
  return <Navigate to="/profile"/> 
}

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      isAuth: state.auth.isAuth,
  }
}


// export default connect(mapStateToProps,{})(Login);
export default connect(mapStateToProps, {login})(Login);