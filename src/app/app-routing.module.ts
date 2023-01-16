import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ApplicationComponent} from './application/application.component';
import {SubmissionComponent} from "./main/submission/submission.component";


const routes: Routes = [
    {
        path: '',
        component: ApplicationComponent
    },
    {
        path: 'submission',
        component: SubmissionComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
