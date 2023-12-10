import React from "react";
import { reduxForm, Field } from "redux-form";

const LoginForm = (props) => {
  //  if(props.isAuth===true){return <Navigate to='/profile'/>}
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"login"} name={"login"} component={"input"} type={"text"} />
      </div>
      <div>
        <Field placeholder={"password"} name={"password"} component={"input"} type={"text"}/>
      </div>
      <div>
        <Field component={"input"} name={"rememberMe"}  type={"checkbox"}/> remember me
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