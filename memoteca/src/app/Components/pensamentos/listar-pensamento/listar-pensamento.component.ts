import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CriarPensamentoComponent } from '../criar-pensamento/criar-pensamento.component';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { CommonModule } from '@angular/common';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento/pensamento';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterLink, CriarPensamentoComponent, PensamentoComponent, CommonModule],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {

  listaPensamentos: Pensamento[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

}
