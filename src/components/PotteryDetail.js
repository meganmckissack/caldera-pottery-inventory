import React from "react";
import Proptypes from 'prop-types';

function PotteryDetail(props) {
  const { pottery } = props;

  return ( 
    <React.Fragment>
      <h3>Pottery Detail</h3>
      <p>{pottery.name}</p>
      <p>{pottery.type}</p>
      <p>{pottery.description}</p>
      <p>{pottery.price}</p>
      <p>{pottery.quantity}</p>
    </React.Fragment>
  )
}

PotteryDetail.propTypes = {
  potter: Proptypes.object,
}

export default PotteryDetail;