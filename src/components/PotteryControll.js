import React from "react";
import NewPotteryForm from "./NewPotteryForm";
import PotteryList from "./PotteryList";

class PotteryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      formVisable: false,
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisable: !prevState.formVisable
    }));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.formVisable) {
      currentlyVisibleState = <NewPotteryForm />
      buttonText= "Return to Pottery List";
    } else {
      currentlyVisibleState = <PotteryList />
      buttonText= "Add Pottery";

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
    }
  }
}

export default PotteryControl;