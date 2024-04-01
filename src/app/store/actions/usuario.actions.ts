import { createAction, props } from '@ngrx/store';
import { UsuarioModel } from '../../models/usuario.model';

export const cargarUsuario = createAction(
  '[Usuario] Cargar Usuario',
  props<{ id: string }>()
);
export const cargarUsuarioSuccess = createAction(
  '[Usuario] Cargar Usuarios Success',
  props<{ usuario: UsuarioModel }>()
);

export const cargarUsuarioError = createAction(
  '[Usuario] Cargar Usuarios Error',
  props<{ payload: any }>()
);
