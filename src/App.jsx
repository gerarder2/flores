import { useNavigate } from "react-router-dom";

import './css/style.css'

export const App = () => {

const navigate = useNavigate();

const onClick = (event) => {
  event.preventDefault();
  navigate("/flores")
}

  return (
    <div className="cuerpo">
      <div className="greetings">
        <span>H</span>
        <span>o</span>
        <span>l</span>
        <span>a</span>
        <span>!</span>
      </div>
      <div className="description">
        <span>ESTE DETALLE ES PARA TI :)</span>
      </div>
      <div className="button">
        <button className="botones" onClick={onClick}>
         <p>CLICK AQUÍ</p>
        </button>
      </div>
    </div>
  )

}
