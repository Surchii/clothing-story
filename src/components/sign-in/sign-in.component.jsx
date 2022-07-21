import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";
import "./sign-in.styles.scss";

const SignIn = () => {
  const dispatch = useDispatch();
  const googleSignInUser = () => dispatch(googleSignInStart());
  const emailSignInUser = (email, password) =>
    dispatch(emailSignInStart({ email, password }));

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInUser(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2> I have already a account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          handleChange={handleChange}
          value={password}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> SIGN IN </CustomButton>
          <CustomButton type="button" onClick={googleSignInUser} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
//   --------- Detta är viktigt för framtida projekt där man vet hur man använda mapDispatchToProps--------------
// const mapDispatchToProps = (dispatch) => ({
//   googleSignInStart: () => dispatch(googleSignInStart()),
//   emailSignInStart: (email, password) =>
//     dispatch(emailSignInStart({ email, password })),
// });
// export default connect(null, mapDispatchToProps)(SignIn);
