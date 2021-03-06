import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.action";
import { useDispatch } from "react-redux";
import "./sign-up.styles.scss";

const SignUp = () => {
  const dispatch = useDispatch();
  const signUpStartHandler = (userCredentials) =>
    dispatch(signUpStart(userCredentials));

  const [userCredentials, setUsercredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passsword don't match");
      return;
    }
    signUpStartHandler({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUsercredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title"> I do not have a account</h2>
      <span>Sign up</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="DisplayName"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;

// const mapDispatchToProps = (dispatch) => ({
//   signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
// });

// export default connect(null, mapDispatchToProps)(SignUp);
