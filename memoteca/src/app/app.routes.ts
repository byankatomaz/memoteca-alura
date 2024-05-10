import { Routes } from '@angular/router';
import { CriarPensamentoComponent } from './Components/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './Components/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './Components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './Components/pensamentos/editar-pensamento/editar-pensamento.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'listarPensamento',
        pathMatch: 'full'
    },
    {
        path: 'criarPensamento',
        component: CriarPensamentoComponent
    },
    {
        path: 'listarPensamento',
        component: ListarPensamentoComponent
    },
    {
        path: 'pensamentos/excluirPensamento/:id',
        component: ExcluirPensamentoComponent
    },
    {
        path: 'pensamentos/editarPensamento/:id',
        component: EditarPensamentoComponent
    },
];
