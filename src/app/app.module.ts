import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];
import { NgxEditorModule } from 'ngx-editor';
import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { CreateHomepageSectionComponent } from './views/create-homepage-section/create-homepage-section.component';
import { UpdateHomepageSectionComponent } from './views/update-homepage-section/update-homepage-section.component';
import { CreateDestinationSectionComponent } from './views/create-destination-section/create-destination-section.component';
import { UpdateDestinationSectionComponent } from './views/update-destination-section/update-destination-section.component';
import {DbioService} from './services/dbio.service'


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomepageSectionsComponent } from './views/homepage-sections/homepage-sections.component';
import { DestinationsComponent } from './views/destinations/destinations.component';
import { CreateMetaDataComponent } from './views/create-meta-data/create-meta-data.component';
import { MetaDataListComponent } from './views/meta-data-list/meta-data-list.component';
import { MetaDataComponent } from './views/meta-data/meta-data.component';
import { AddSectionDestinationComponent } from './views/add-section-destination/add-section-destination.component';
import { DestinationSectionListComponent } from './views/destination-section-list/destination-section-list.component';
import { DestinationUpdateSectionComponent } from './views/destination-update-section/destination-update-section.component';
import { CreateHolidayComponent } from './views/holiday/create-holiday/create-holiday.component';
import { CreateHolidaySectionComponent } from './views/holiday/create-holiday-section/create-holiday-section.component';
import { UpdateHolidaySectionComponent } from './views/holiday/update-holiday-section/update-holiday-section.component';
import { UpdateHolidayComponent } from './views/holiday/update-holiday/update-holiday.component';
import { HolidayListComponent } from './views/holiday/holiday-list/holiday-list.component';
import { HolidaySectionListComponent } from './views/holiday/holiday-section-list/holiday-section-list.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    NgxEditorModule,
    AppHeaderModule,
    AppSidebarModule,
    HttpClientModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    FormsModule,
    IconSetModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    CreateHomepageSectionComponent,
    UpdateHomepageSectionComponent,
    CreateDestinationSectionComponent,
    UpdateDestinationSectionComponent,
    HomepageSectionsComponent,
    DestinationsComponent,
    CreateMetaDataComponent,
    MetaDataListComponent,
    MetaDataComponent,
    AddSectionDestinationComponent,
    DestinationSectionListComponent,
    DestinationUpdateSectionComponent,
    CreateHolidayComponent,
    CreateHolidaySectionComponent,
    UpdateHolidaySectionComponent,
    UpdateHolidayComponent,
    HolidayListComponent,
    HolidaySectionListComponent
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
    DbioService,
    
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
