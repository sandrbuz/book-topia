import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validators";

const LoginForm = (props) => {
  //  if(props.isAuth===true){return <Navigate to='/profile'/>}
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"login"} name={"login"} component={Input} type={"text"}  validate={[required]}/>
      </div>
      <div>
        <Field placeholder={"password"} name={"password"} component={Input} type={"text"} validate={[required]}/>
      </div>
      <div>
        <Field component={Input} name={"rememberMe"}  type={"checkbox"} validate={[required]}/> remember me
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
      console.log(formData)
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//       isAuth: state.auth.isAuth,
//   }
// }

// export default connect(mapStateToProps,{})(Login);
export default Login;