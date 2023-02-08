import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";
import { setUser } from "../store/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const dispatch = useDispatch();
  const push = useNavigate();
  const handleRegister = (email, password) => {
    if (!email || !password) {
      return;
    } else {
      try {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then(({ user }) => {
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
      } catch (error) {
        console.log(error);
      }
    }
  };

  return <Form title="register" handleClick={handleRegister} />;
};
export { SignUp };
