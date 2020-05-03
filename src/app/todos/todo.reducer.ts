import { createReducer, on } from '@ngrx/store';
import { create } from './todo.actions';
import { Todo } from './components/models/todo.model';

export const initialState: Todo[] = [
  new Todo('Salvar al mundo'),
  new Todo('Vencer a thanos'),
  new Todo('Comprar traje de ironman'),
  new Todo('Robar escudo del capitan america'),
];


const _todoReducer = createReducer(initialState,
  on(create, (state, {text}) => [...state, new Todo(text)]),
);

export const todoReducer = (state, action) => {
  return _todoReducer(state, action);
};
