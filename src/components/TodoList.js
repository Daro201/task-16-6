import React from 'react';
import style from './TodoList.css';

const TodoList = props => { 
  const list = props.itemList.map(element => 
  	<li key={element.id} className={style.TodoList} onClick={() => props.removeTodoItem(element.id)}
  	>{element.text}</li>);

  return (
    <ul className={style.TodoList}>{list}</ul>
  )
}

export default TodoList;