import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DashboardDemoComponent } from './demo/view/dashboarddemo.component';
import { SampleDemoComponent } from './demo/view/sampledemo.component';
import { FormsDemoComponent } from './demo/view/formsdemo.component';
import { DataDemoComponent } from './demo/view/datademo.component';
import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
import { MenusDemoComponent } from './demo/view/menusdemo.component';
import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
import { MiscDemoComponent } from './demo/view/miscdemo.component';
import { EmptyDemoComponent } from './demo/view/emptydemo.component';
import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { FileDemoComponent } from './demo/view/filedemo.component';
import { DocumentationComponent } from './demo/view/documentation.component';
import { AppMainComponent } from './app.main.component';
import { AppNotfoundComponent } from './pages/app.notfound.component';
import { AppErrorComponent } from './pages/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied.component';
import { AppLoginComponent } from './pages/app.login.component';
//INIT
import { NgModule } from '@angular/core';
import { LoginComponent } from "./components/login/login.component";
import { SedeComponent } from './Administrativo/infraestructura/sede/sede.component';
import { EdificioComponent } from './Administrativo/infraestructura/edificio/edificio.component';
import { AulaComponent } from './Administrativo/infraestructura/aula/aula.component';
import { DocenteComponent } from './components/docente/docente.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { AdminprofileComponent } from "./components/profile/adminprofile/adminprofile.component";
import { EstudianteprofileComponent } from "./components/profile/estudianteprofile/estudianteprofile.component";
import { DocenteprofileComponent } from "./components/profile/docenteprofile/docenteprofile.component";
import { TareaComponent } from './components/docente/tarea/tarea.component';
import { AddnotaComponent } from "./components/docente/addnota/addnota.component";
import { ListnotaComponent } from "./components/docente/listnota/listnota.component";
import { LandingComponent } from './landingPage/landing/landing.component';
import { AsistenciaComponent } from './Administrativo/infraestructura/asistencia/asistencia.component';

//export const routes: Routes = [
const routes: Routes = [
    // { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: '', component: AppMainComponent,
        children: [
            { path: '', component: DashboardDemoComponent },
            { path: 'components/sample', component: SampleDemoComponent },
            { path: 'components/forms', component: FormsDemoComponent },
            { path: 'components/data', component: DataDemoComponent },
            { path: 'components/panels', component: PanelsDemoComponent },
            { path: 'components/overlays', component: OverlaysDemoComponent },
            { path: 'components/menus', component: MenusDemoComponent },
            { path: 'components/messages', component: MessagesDemoComponent },
            { path: 'components/misc', component: MiscDemoComponent },
            { path: 'pages/empty', component: EmptyDemoComponent },
            { path: 'components/charts', component: ChartsDemoComponent },
            { path: 'components/file', component: FileDemoComponent },
            { path: 'documentation', component: DocumentationComponent }
        ]
    },
    { path: 'inicio', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminprofileComponent },
    { path: 'estudiante', component: EstudianteprofileComponent },
    { path: 'docente', component: DocenteprofileComponent },
    { path: 'docente/addnota', component: AddnotaComponent },
    { path: 'docente/listnota', component: ListnotaComponent },
    { path: 'admin/sede', component: SedeComponent },
    { path: 'admin/edificio', component: EdificioComponent },
    { path: 'admin/aula', component: AulaComponent },
    { path: 'admin/asistencia', component: AsistenciaComponent },
    { path: 'doc/perfil', component: DocenteComponent },
    { path: 'doc/tarea', component: TareaComponent },
    { path: 'est/ver_notas', component: EstudianteComponent },
    { path: 'error', component: AppErrorComponent },
    { path: 'accessdenied', component: AppAccessdeniedComponent },
    { path: 'notfound', component: AppNotfoundComponent },
    { path: 'login2', component: AppLoginComponent },
    { path: '**', redirectTo: '/notfound' },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

//export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'});
export class AppRoutes { }
