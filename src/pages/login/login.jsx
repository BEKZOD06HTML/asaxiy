
import { useNavigate } from "react-router-dom";
import "./login.css"

const login = () => {
    const navigate = useNavigate()
  return (
      <div className="login">
        <button className="Login_btn1" onClick={() => navigate("/")}>ГЛАВНАЯ</button>
        <button className="Login_btn2" onClick={() => navigate(-1)}>НАЗАД</button>
      </div>
  )
}

export default login
