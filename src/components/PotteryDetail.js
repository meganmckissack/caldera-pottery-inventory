import React from "react";
import Proptypes from 'prop-types';

function PotteryDetail(props) {
  const { pottery, onClickingDelete, onClickingEdit } = props;

  return ( 
    <React.Fragment>
      <h3>Pottery Detail</h3>
      <p>{pottery.name}</p>
      <p>Type: {pottery.type}</p>
      <p>{pottery.description}</p>
      <p>${pottery.price}</p>
      <p>In stock: {pottery.quantity}</p>
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded" onClick={ onClickingEdit }>Update Pottery</button>
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded" onClick={() => onClickingDelete(pottery.id) }>Delete Pottery</button>
      <hr />
    </React.Fragment>
  )
}

PotteryDetail.propTypes = {
  potter: Proptypes.object,
}

export default PotteryDetail;