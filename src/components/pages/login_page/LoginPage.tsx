import { useEffect, useState } from "react";
import { IUser } from "../../../utils/types";
import { useNavigate } from "react-router";
import "./loginPage.css";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      const response: IUser[] = await (
        await fetch(`https://6428388446fd35eb7c4e2663.mockapi.io/wild/pr/users`)
      ).json();
      setUsers(() => {
        return response;
      });
    })();
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const foundUser = users.find(
      (item) => item.email === login && item.password === password
    );

    if (foundUser) {
      navigate("/home");
    } else {
      setError("Неправильный логин или пароль");
    }
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Authorization</h1>
        <input
          className="form-input login"
          type="email"
          required
          name="email"
          placeholder="login"
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
            setError("");
          }}
        />
        <input
          className="form-input password"
          type="password"
          required
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />
        {error && <p className="form-error">{error}</p>}
        <button className="form-btn" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};
