import React from "react";
import NewPotteryForm from "./NewPotteryForm";
import PotteryList from "./PotteryList";
import PotteryDetail from "./PotteryDetail";

class PotteryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      formVisible: false,
      mainPotteryList: [],
      selectedPottery: null,
    }
  }

  handleClick = () => {
    if (this.state.selectedPottery != null) {
      this.setState({
        formVisible: false,
        selectedPottery: null,
      });
    } else {
      this.setState(prevState => ({
        formVisible: !prevState.formVisible,
      }));
    }
  }

  handleAddingNewPotteryToList = (newPottery) => {
    const newMainPotteryList = this.state.mainPotteryList.concat(newPottery);
    this.setState({mainPotteryList: newMainPotteryList});
    this.setState({formVisible: false});
  }

  handleChanginSelectedPottery = (id) => {
    const selectedPottery = this.state.mainPotteryList.filter(pottery => pottery.id === id)[0];
    this.setState({selectedPottery: selectedPottery});
  }


  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.selectedPottery !== null) {
      currentlyVisibleState= <PotteryDetail
      pottery = {this.state.selectedPottery} />
      buttonText="Return to Pottery List";
    } else if(this.state.formVisible) {
      currentlyVisibleState = <NewPotteryForm onNewPotteryCreation={this.handleAddingNewPotteryToList} />
      buttonText= "Return to Pottery List";
    } else {
      currentlyVisibleState = <PotteryList potteryList={this.state.mainPotteryList} />
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