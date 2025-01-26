import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ImageuploaderComponent } from './components/imageuploader/imageuploader.component';

export const routes: Routes = [
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'',
        component:ImageuploaderComponent
    }
];
