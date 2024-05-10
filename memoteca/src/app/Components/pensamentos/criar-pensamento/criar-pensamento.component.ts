import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ListarPensamentoComponent } from '../listar-pensamento/listar-pensamento.component';
import { Pensamento } from '../pensamento/pensamento';
import { PensamentoService } from '../pensamento.service';
@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [FormsModule, RouterLink, ListarPensamentoComponent],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

  constructor(
    private service: PensamentoService,
    private router: Router
    ) { }

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }


}
