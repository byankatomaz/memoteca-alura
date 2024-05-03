import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './Components/cabecalho/cabecalho.component';
import { RodapeComponent } from './Components/rodape/rodape.component';
import { CriarPensamentoComponent } from './Components/pensamentos/criar-pensamento/criar-pensamento.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabecalhoComponent, RodapeComponent, CriarPensamentoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'memoteca';
}
