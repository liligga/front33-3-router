import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault()
    console.log("Login");
    // запрос на бекенд
    // переход на другую страницу
    navigate("/posts");
  };

  return (
    <div>
      <h1>LoginPage</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Логин" />
        <input type="password" placeholder="Пароль" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
export default LoginPage;
