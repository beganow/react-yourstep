import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";
import { setUser } from "../store/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const push = useNavigate();
  const handleLogin = (email, password) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        push("/");
      })

      .catch(console.error);
  };
  return <Form title="Sign in" handleClick={handleLogin} />;
};

export { Login };
