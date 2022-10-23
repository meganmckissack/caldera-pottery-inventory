import React from "react";
import Pottery from "./Pottery";
import PropTypes from "prop-types";


function PotteryList(props) {
  return (
    <React.Fragment>
      {props.potteryList.map((pottery) => 
        <Pottery
          whenSaleClicked={props.onClickingSale}
          whenPotteryClicked={ props.onPotterySelection }
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
  onPotterySelection: PropTypes.func,
  onClickingSale: PropTypes.func
}

export default PotteryList;