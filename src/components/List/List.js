import React from 'react';
import './List.css';
import TrelloCard from '../TrelloCard/TrelloCard';
import ActionButton from '../ActionButton/ActionButton';
import { Droppable } from 'react-beautiful-dnd';

const List = ({title, cards, listId}) => {
  return (
    <Droppable droppableId={String(listId)}>
      {provided => (
        <div {...provided.droppableProps} ref={provided.innerRef} className="List">
          <h4>{title}</h4>
          {cards.map((card, index) => (
            <TrelloCard 
              text={card.text} 
              key={card.id} 
              id={card.id}
              index={index} 
            />)
          )}
          <ActionButton listId={listId} />
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default List;