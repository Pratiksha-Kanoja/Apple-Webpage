import React, { useState } from 'react'
import './Button.css'

const Button = () => {
  const [imageClicked, setImageClicked] = useState({
    first: false,
    second: false,
    ground: false
  });
  const onClickHandler = (order) => {
    setImageClicked({[order]: !imageClicked[order]});
  };
  return (
    <div>
      <div className="Ccontainer">
        <button onClick={() => onClickHandler("ground")} className="ground">
          Ground Floor
        </button>
        <button onClick={() => onClickHandler("first")} className="ground">
          First Floor
        </button>
        <button onClick={() => onClickHandler("second")} className="ground">
          Second Floor
        </button>
      </div>
      <div className="image">
        {imageClicked.ground && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbCDZZfnTfo6P6OVAR4PEbLGDBPs3hkIocmS18c9Y6MA&s" alt="ground" />}
        {imageClicked.first && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLCssoOV6-yMdij-74nk0njlnxCbKgxtUW_ZAN1VRQpw&s" alt="first" />}
        {imageClicked.second && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMv1pwwe9oVALyh_uxZgHCUrZVwCd1jlp0SLaE4DGjvQ&s" alt="second" />}
      </div>
    </div>
    )
}

export default Button