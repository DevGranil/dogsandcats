import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EditorComponent } from './pages/editor/editor.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: ':animal/edit',
        component: EditorComponent
    }
];
