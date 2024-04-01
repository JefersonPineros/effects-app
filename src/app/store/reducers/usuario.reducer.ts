import { createReducer, on } from '@ngrx/store';
import * as usuario from '../actions';
import { UsuarioModel } from '../../models/usuario.model';

export interface UsuarioState {
  id: string;
  user: UsuarioModel | null;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuarioInitialState: UsuarioState = {
  id: '',
  user: null,
  loaded: false,
  loading: false,
  error: null,
};

export const _usuarioReducer = createReducer(
  usuarioInitialState,

  on(usuario.cargarUsuario, (state, { id }) => ({
    ...state,
    loading: true,
    id: id,
  })),
  on(usuario.cargarUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...usuario },
    error: null,
  })),
  on(usuario.cargarUsuarioError, (state, { payload }) => ({
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
