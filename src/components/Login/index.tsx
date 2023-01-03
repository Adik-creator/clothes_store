import React from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "../Form";
import {useNavigate} from "react-router-dom";
import {addUser} from "../../redux/slices/userSlice";
import {useAppDispatch} from "../../hooks/react-redux-hook";

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()
  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(item => {
        const user = item.user
        dispatch(addUser({
          email: user.email,
          token: user.refreshToken,
          id: user.uid,
        }))
        navigate("/")
      })
      .catch(() => alert("Invalid user!"));
    console.log(email, password, "login")
  };
  return (
    <div>
      <Form title="sign in" handleClick={handleLogin} />
    </div>
  );
};
