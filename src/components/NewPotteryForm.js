import React from "react";
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewPotteryForm(props) {

  function handleNewPotteryFormSubmission(event) {
    event.preventDefault();
    props.onNewPotteryCreation({
      name: event.target.name.value,
      type: event.target.type.value,
      description: event.target.description.value, 
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      id: v4()
    })
  }


  return (
    <React.Fragment>
      <h3>Add Pottery to Inventory</h3>
      <ReusableForm 
      formSubmissionHandler={handleNewPotteryFormSubmission}
      buttonText="Submit New Pottery" />
    </React.Fragment>
  ); 
}

NewPotteryForm.propTypes = {
  onNewPotteryCreation: PropTypes.func
}

export default NewPotteryForm;