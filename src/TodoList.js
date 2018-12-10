import React from 'react';

import { connect } from 'react-redux';

const TodoList = props => (
  <ul>
    {props.todos.map(todo => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);

TERMINAR O VIDEO DE LISTA DE TODOS ( NA PARTE DA INSTALAÇÃO DO PROPS TYPE)

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
