import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioModel } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducers';
import { cargarUsuarios } from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent implements OnInit {
  public users: UsuarioModel[] = [];
  public loading: boolean = false;
  public error: any;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('usuarios').subscribe({
      next: ({ users, loading, error }) => {
        this.users = users;
        this.loading = loading;
        this.error = error;
      },
    });
    this.store.dispatch(cargarUsuarios());
  }
}
