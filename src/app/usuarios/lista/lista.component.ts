import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css',
})
export class ListaComponent implements OnInit {
  public users: UsuarioModel[] = [];
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsers().subscribe({
      next: (resp) => {
        this.users = resp;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
