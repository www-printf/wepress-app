import { useAuth } from "../../../hooks/useAuth";

export default function Login() {
  const { login, isLoggingIn, loginError } = useAuth();

  const loginHandler = (e) => {
    e.preventDefault();
    login({
      username: e.target.username.value,
      password: e.target.password.value,
    });
  };

  return (
    <>
      <div>
        <div className="container center flex flex-col">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <form onSubmit={loginHandler}>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
              <button type="submit">aaaa</button>
            </form>
          </div>
          <div>
            <button></button>
          </div>
        </div>
      </div>
    </>
  );
}
