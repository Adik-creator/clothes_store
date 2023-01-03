import React from "react";
import {useNavigate} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "../Form";
import {addUser} from "../../redux/slices/userSlice";
import {useAppDispatch} from "../../hooks/react-redux-hook";

export const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const handleSignUp = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((item) => {
          const user = item.user
          dispatch(addUser({
              email: user.email,
              token: user.refreshToken,
              id: user.uid,
          }))
          navigate("/")
      })
      .catch(console.error);
  };
  return (
      <div>
        register
        <Form title="register" handleClick={handleSignUp} />;
      </div>
  )
};
