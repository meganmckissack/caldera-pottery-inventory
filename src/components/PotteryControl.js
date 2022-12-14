import React from "react";
import NewPotteryForm from "./NewPotteryForm";
import PotteryList from "./PotteryList";
import PotteryDetail from "./PotteryDetail";
import EditPotteryForm from "./EditPotteryForm";


class PotteryControl extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      formVisible: false,
      mainPotteryList: [
        {
          id: 1,
          name: "Blue dream",
          type: "mug",
          description: "ceramic mug with blue glaze",
          price: 20,
          quantity: 20 
        }, 
        {
          id: 2,
          name: "Dark descent",
          type: "plate",
          description: 'ceramic 10" plate with black glaze',
          price: 30,
          quantity: 20 
        }, 
        {
          id: 3,
          name: "Tangerine dream",
          type: "bowl",
          description: "cereamic bowl with orange glaze",
          price: 25,
          quantity: 20 
        }, 
      ],
      selectedPottery: null,
      editing: false,
    };
  }

  handleClick = () => {
    if(this.state.selectedPottery !== null) {
      this.setState({
        formVisible: false,
        selectedPottery: null, 
        editing: false, 
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

  handleChangingSelectedPottery = (id) => {
    const selectedPottery = this.state.mainPotteryList.filter(pottery => pottery.id === id)[0];
    this.setState({selectedPottery: selectedPottery});
  }

  handleDeletingPottery = (id) => {
    const newMainPotteryList = this.state.mainPotteryList.filter(pottery => pottery.id !== id);
    this.setState({
      mainPotteryList: newMainPotteryList,
      selectedPottery: null
    })
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingPotteryInList = (potteryToEdit) => {
    const editedmainPotteryList = this.state.mainPotteryList
      .filter(pottery => pottery.id !== this.state.selectedPottery.id)
      .concat(potteryToEdit);
    this.setState({
      mainPotteryList: editedmainPotteryList,
      editing: false,
      selectedPottery: null
    });
  }

  handlePotterySale = (id) => {
    const selectedPottery = this.state.mainPotteryList.filter(pottery => pottery.id === id)[0];
    if(selectedPottery.quantity >= 1) {
      const potterySold = {...selectedPottery, quantity: selectedPottery.quantity - 1};
      const newMainPotteryList = this.state.mainPotteryList.filter(pottery => pottery.id !==id).concat(potterySold);
    this.setState({
      mainPotteryList: newMainPotteryList
    });
  };
}



  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditPotteryForm pottery={this.state.selectedPottery} onEditPottery={this.handleEditingPotteryInList} />
      buttonText="Return to Pottery List";
    } else if (this.state.selectedPottery != null) {
      currentlyVisibleState = <PotteryDetail 
      pottery = {this.state.selectedPottery} 
      onClickingDelete = {this.handleDeletingPottery} 
      onClickingEdit = {this.handleEditClick} />
      buttonText="Return to Pottery List";
    } else if (this.state.formVisible) {
        currentlyVisibleState = <NewPotteryForm onNewPotteryCreation={this.handleAddingNewPotteryToList} />;
        buttonText = "Return to Pottery List";
    } else {
      currentlyVisibleState = <PotteryList onPotterySelection={this.handleChangingSelectedPottery} 
                                           potteryList={this.state.mainPotteryList}
                                           onClickingSale={this.handlePotterySale} />;
        buttonText = "Add Pottery";
    }
  
    
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default PotteryControl;