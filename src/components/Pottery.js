import React from "react";
import PropTypes from "prop-types";

function Pottery(props) {
  return (
    <React.Fragment>
      {/* <img src={props.img} width="15%" height="15%" alt="ceramic cup" /> */}
      <h3>{props.name}</h3>
      <p>{props.type}</p>
      <p>{props.description}</p>
      <p>{props.price}</p>
      <p>{props.quantity}</p>
    </React.Fragment>
  )
}

Pottery.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number
}

export default Pottery;