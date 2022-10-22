import React from "react";
import Pottery from "./Pottery";
import PropTypes from "prop-types";

// const potteryData = [
//   {
//     name: "Blue dream",
//     type: "mug",
//     description: "ceramic mug with blue glaze",
//     price: 20,
//     quantity: 20 
//   }, 
//   {
//     name: "Dark descent",
//     type: "plate",
//     description: 'ceramic 10" plate with black glaze',
//     price: 30,
//     quantity: 20 
//   }, 
//   {
//     name: "Tangerine dream",
//     type: "bowl",
//     description: "cereamic bowl with orange glaze",
//     price: 25,
//     quantity: 20 
//   }, 
// ]

function PotteryList(props) {
  return (
    <React.Fragment>
      {props.potteryList.map((pottery) => 
        <Pottery
          name={pottery.name}
          type={pottery.type}
          description={pottery.description}
          price={parseInt(pottery.price)}
          quantity={parseInt(pottery.quantity)}
          id={pottery.id}
          key={pottery.id}
        />
      )}
    </React.Fragment>
  )
}

PotteryList.propTypes = {
  potteryList: PropTypes.array,
}

export default PotteryList;