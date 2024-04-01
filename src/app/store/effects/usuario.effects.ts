import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {
  /**
   * El simbolo de dolar se utiliza para identificar que la variable es un observable
   * @param action$
   */
  constructor(private action$: Actions, private usersService: UsuarioService) {}

  /**
   * Lo que quiero es unicamente observar una acción especifica, para eso se utiliza el ofType
   * que es un metodo que me permite identificar la acción especifica a escuchar.
   *
   * tap, es una acción que me permite disparar efectos secundarios.
   * mergeMap, Ayuda a disparar un nuevo observable y mesclarlo con el observable anterior
   */
  cargarUsuario$ = createEffect(() =>
    this.action$.pipe(
      ofType(usuariosActions.cargarUsuario),
      mergeMap((action) =>
        this.usersService.getUsersById(action.id).pipe(
          map((usuario) => usuariosActions.cargarUsuarioSuccess({ usuario })),
          catchError((err) =>
            of(usuariosActions.cargarUsuarioError({ payload: err }))
          )
        )
      )
    )
  );
}
