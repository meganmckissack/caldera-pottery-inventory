import React from "react";
import PropTypes from "prop-types";

function ResuableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
            type='text'
            name='name'
            placeholder='Name' />
        <input
            type='text'
            name='type'
            placeholder='Type' />
        <textarea
            name='description'
            placeholder='Description' />
        <input
            type='number'
            name='price'
            placeholder='Price' />
        <input
            type='number'
            name='quantity'
            placeholder='Quantity' />
        <button type='submit'>Submit New Pottery</button>
      </form>
    </React.Fragment>
  )
}

ResuableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ResuableForm;