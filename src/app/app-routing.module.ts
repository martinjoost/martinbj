import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {
        path: 'aboutme',
        loadChildren: './about/about.module#AboutModule',
    },
    {
        path: 'skills',
        loadChildren: './skills/skills.module#SkillsModule',
    },
    {
        path: 'experiences',
        loadChildren: './experiences/experiences.module#ExperiencesModule',
    },
    {
        path: 'contact',
        loadChildren: './contact/contact.module#ContactModule',
    },
    {
        path: '**',
        redirectTo: 'aboutme',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
