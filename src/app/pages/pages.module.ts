import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { PAGES_ROUTES } from './pages.routes';

//ng2-charts
import { ChartsModule } from 'ng2-charts';

import { SharedModule } from '../shared/shared.module';

import { ProgressComponent } from "./progress/progress.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from './pages.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

@NgModule({
    declarations:  [   
        PagesComponent,    
        ProgressComponent,
        DashboardComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports: [     
        ProgressComponent,
        DashboardComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
    ]
    
})
export class PagesModule{ }