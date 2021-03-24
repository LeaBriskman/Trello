import React, { Component } from 'react';
import './App.css';
import List from '../List/List';
import { connect } from 'react-redux';
import ActionButton from '../ActionButton/ActionButton';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from '../../actions';

class App extends Component {
  onDragEnd = result => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
      )
    );
  }

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd} >
        <div>
          <h1>Trello clone</h1>
          <div className="cardsContainer">
            {lists.map(list => (
              <List 
                listId={list.id} 
                title={list.title} 
                cards={list.cards} 
                key={list.id} 
              />)
            )}
            <ActionButton list />
          </div>
        </div>
      </DragDropContext>
    );
  };
};

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);