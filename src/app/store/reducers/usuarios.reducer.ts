import { createReducer, on } from '@ngrx/store';
import * as usuarios from '../actions';
import { UsuarioModel } from '../../models/usuario.model';

export interface UsuariosState {
  users: UsuarioModel[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const initialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

export const _usuariosReducer = createReducer(
  initialState,

  on(usuarios.cargarUsuarios, (state) => ({ ...state, loading: true })),
  on(usuarios.cargarUsuariosSuccess, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...usuarios],
    error: null,
  })),
  on(usuarios.cargarUsuariosError, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: {
      url: payload.url,
      name: payload.name,
      message: payload.message,
    },
  }))
);
