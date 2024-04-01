import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuario } from '../../store/actions';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
})
export class UsuarioComponent implements OnInit {
  public usuario: UsuarioModel | null | undefined;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('usuario').subscribe({
      next: ({ user }) => {
        this.usuario = user;
      },
    });

    this.route.params.subscribe({
      next: ({ id }) => {
        this.store.dispatch(cargarUsuario({ id }));
      },
    });
  }
}
