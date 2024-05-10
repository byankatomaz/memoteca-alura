import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pensamento } from './pensamento';
import { ExcluirPensamentoComponent } from '../excluir-pensamento/excluir-pensamento.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule, ExcluirPensamentoComponent, RouterLink],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: "Amo angular",
    autoria: "Byanka",
    modelo: "modelo1"
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    } else {
      return 'pensamento-p'
    }
  }

}
