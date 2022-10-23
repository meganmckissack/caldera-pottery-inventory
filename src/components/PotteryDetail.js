import React from "react";
import Proptypes from 'prop-types';

function PotteryDetail(props) {
  const { pottery, onClickingDelete, onClickingEdit } = props;

  return ( 
    <React.Fragment>
      <h3>Pottery Detail</h3>
      <p>{pottery.name}</p>
      <p>{pottery.type}</p>
      <p>{pottery.description}</p>
      <p>{pottery.price}</p>
      <p>{pottery.quantity}</p>
      <button onClick={ onClickingEdit }>Update Pottery</button>
      <button onClick={() => onClickingDelete(pottery.id) }>Delete Pottery</button>
      <hr />
    </React.Fragment>
  )
}

PotteryDetail.propTypes = {
  potter: Proptypes.object,
}

export default PotteryDetail;