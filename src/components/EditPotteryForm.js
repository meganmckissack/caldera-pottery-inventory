import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";


function EditPotteryForm (props) {
  const { pottery } = props;

  function handleEditPotteryFormSubmission(event) {
    event.preventDefault();
    props.onEditPottery({
      name: event.target.name.value,
      type: event.target.type.value,
      description: event.target.description.value, 
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      id: pottery.id
    });

  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditPotteryFormSubmission}
        buttonText="Update Pottery" />
    </React.Fragment>
  );
}

EditPotteryForm.propTypes = {
  onEditPottery: PropTypes.func,
  pottery: PropTypes.object
};

export default EditPotteryForm;