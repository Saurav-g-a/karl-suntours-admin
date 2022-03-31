import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { AddSectionDestinationComponent } from './views/add-section-destination/add-section-destination.component';
import { CreateDestinationSectionComponent } from './views/create-destination-section/create-destination-section.component';
import { CreateHomepageSectionComponent } from './views/create-homepage-section/create-homepage-section.component';
import { CreateMetaDataComponent } from './views/create-meta-data/create-meta-data.component';
import { DestinationSectionListComponent } from './views/destination-section-list/destination-section-list.component';
import { DestinationUpdateSectionComponent } from './views/destination-update-section/destination-update-section.component';
import { DestinationsComponent } from './views/destinations/destinations.component';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { HomepageSectionsComponent } from './views/homepage-sections/homepage-sections.component';
import { LoginComponent } from './views/login/login.component';
import { MetaDataListComponent } from './views/meta-data-list/meta-data-list.component';
import { MetaDataComponent } from './views/meta-data/meta-data.component';
import { RegisterComponent } from './views/register/register.component';
import { UpdateDestinationSectionComponent } from './views/update-destination-section/update-destination-section.component';
import { UpdateHomepageSectionComponent } from './views/update-homepage-section/update-homepage-section.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },

  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'homepage/create-section',
        component: CreateHomepageSectionComponent
      },
      {
        path: 'homepage/update-section/:id',
        component: UpdateHomepageSectionComponent
      },
      {
        path: 'homepage/sections',
        component: HomepageSectionsComponent
      },
      {
        path: 'destination/destinations',
        component: DestinationsComponent
      },
      {
        path: 'destination/create-destination',
        component: CreateDestinationSectionComponent
      },
      {
        path: 'destination/update-destination/:id',
        component: UpdateDestinationSectionComponent
      },
      {
        path: 'destination/add-section-destination/:id',
        component: AddSectionDestinationComponent
      },
      {
        path: 'destination/destination-section-list/:id',
        component: DestinationSectionListComponent
      },
      {
        path: 'destination/:id/section/:sectionId',
        component: DestinationUpdateSectionComponent
      },
      {
        path: 'metadata/list',
        component: MetaDataListComponent
      },
      
      {
        path: 'metadata/create',
        component: CreateMetaDataComponent
      },
      {
        path: 'metadata/:type',
        component: MetaDataComponent
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}