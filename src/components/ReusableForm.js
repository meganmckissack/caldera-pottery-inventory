import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
            type='text'
            name='name'
            placeholder='Name' />
            <br />
        <input
            type='text'
            name='type'
            placeholder='Type' />
            <br />
        <textarea
            name='description'
            placeholder='Description' />
            <br />
        <input
            type='number'
            name='price'
            placeholder='Price' />
            <br />
        <input
            type='number'
            name='quantity'
            placeholder='Quantity' />
            <br />
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded" type='submit'>Submit New Pottery</button>
        <br />
      </form>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;