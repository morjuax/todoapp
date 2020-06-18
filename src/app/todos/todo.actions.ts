import { createAction, props } from '@ngrx/store';


export const create = createAction(
  '[TODO] create Todo',
  props<{ text: string }>()
);


export const toggleCompleted = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
);
