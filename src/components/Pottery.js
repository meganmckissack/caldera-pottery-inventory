import React from "react";
import PropTypes from "prop-types";

function Pottery(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPotteryClicked(props.id)}>
        {/* <img src={props.img} width="15%" height="15%" alt="ceramic cup" /> */}
        <h3>{props.name}</h3>
        <p>{props.type}</p>
        <p>{props.description}</p>
        <p>{props.price}</p>
        <p>{props.quantity}</p>
      </div>
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded" onClick={() => props.whenSaleClicked(props.id)}>Buy Now</button>
      <br />
    </React.Fragment>
  )
}

Pottery.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number, 
  whenPotteryClicked: PropTypes.func
}

export default Pottery;