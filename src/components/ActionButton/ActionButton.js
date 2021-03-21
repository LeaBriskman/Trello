import React, { Component } from 'react';
import './ActionButton.css';
import Card from '@material-ui/core/Card';
import Icon from '@material-ui/core/Icon';
import TextareaAutosize from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addList, addCard } from '../../actions';

class ActionButton extends Component {
  state = {
    isFormOpen: false,
    text: ''
  }

  openForm = () => {
    this.setState({
      isFormOpen: true
    })
  };

  closeForm = e => {
    this.setState({
      isFormOpen: false
    })
  };

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    })
  };

  handleAddList = () => {
    const { dispatch } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ''
      });
      dispatch(addList(text))
    }
    return;
  }

  handleAddCard = () => {
    const { dispatch, listId } = this.props;
    const { text } = this.state;

    if (text) {
      this.setState({
        text: ''
      });
      dispatch(addCard(text, listId))
    }
    return;
  }

  renderAddButton = () => {
    const {list} = this.props;
    const buttonText = list ? 'list' : 'card';
    const BtnClass = list ? 'BtnForList' : 'BtnForCard';

    return (
      <div className={`BtnContainer ${BtnClass}`} onClick={this.openForm}>
        <Icon>add</Icon>
        <p>Add another {buttonText}</p>
      </div>
    )
  };

  renderAddForm = () => {
    const {list} = this.props;
    const placeholder = list ? 'Enter a list title...' : 'Enter a title for this card...';
    const buttonTitle = list ? 'Add List' : 'Add Card';

    return (
      <div>
        <Card className="textAreaContainer">
          <TextareaAutosize 
            placeholder={placeholder}
            autoFocus
            onBlur={this.closeForm}
            value={this.state.text}
            onChange={this.handleInputChange}
            className="textArea"
          />
        </Card>
        <div className="btnGroup">
          <Button 
            style={{color: "white", backgroundColor:"#5aac44"}} 
            variant="contained"
            onMouseDown={list ? this.handleAddList : this.handleAddCard} 
          >
            {buttonTitle}
          </Button>
          <Icon style={{marginLeft: 8, cursor: "pointer"}}>close</Icon>
        </div>
      </div>
    )
  }

  render() {
    return this.state.isFormOpen ? this.renderAddForm() : this.renderAddButton();
  };
};

export default connect()(ActionButton);