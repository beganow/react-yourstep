import { useEffect } from "react";
import { useState } from "react";

const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Эмейл не может быть пустым");
  const [boolButton, setBoolButton] = useState(false);
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );

  const emailHandler = (e) => {
    setEmail(e.target.value);
    var re =
      /^(([^<>()[]\\.,;:\s@\"]+(\.[^<>()[]\\.,;:\s@\"]+)*)|(\".+\"))@(([[0-9]{1,3}\‌​.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный емейл");
    } else {
      setEmailError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.value) {
      case "email":
        setEmailDirty(true);
        break;
      case "pass":
        setPasswordDirty(true);
        break;
    }
  };
  useEffect(() => {
    if (email.trim() && pass.trim()) {
      const RegEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      if (!RegEmail.test(email)) {
        setEmailError("Некорректный емейл");
      } else if (pass.length < 6) {
        setEmailError("Пароль должен быть больше 6 символов");
      } else {
        setBoolButton(false);
        setEmailError("");
      }
    } else {
      setBoolButton(true);
      setEmailError("Одно из полей не может быть пустым");
    }
  }, [email, pass]);
  return (
    <div>
      <div className="field">
        <input
          onBlur={(e) => blurHandler(email)}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
      </div>
      <div className="field">
        {emailError && <div style={{ color: "red" }}>{emailError}</div>}
        <input
          onBlur={(e) => blurHandler(e)}
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value) && emailHandler(e)}
          placeholder="password"
        />
      </div>
      <button disabled={boolButton} onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </div>
  );
};
export { Form };
