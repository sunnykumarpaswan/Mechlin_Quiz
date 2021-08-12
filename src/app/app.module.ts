import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {MaterialModule} from './material.module';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatToolbarModule,MatIconModule} from '@angular/material';
// import { MDBBootstrapModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    // MDBBootstrapModule.forRoot(),
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    RouterModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}




// import {RegistrationComponent} from './registration/registration.component';
// import {RouterModule} from '@angular/router';
// import {FlexLayoutModule} from '@angular/flex-layout';
// import {BrowserModule} from '@angular/platform-browser';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {NgModule} from '@angular/core';
// import {CommonModule} from '@angular/common';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import {A11yModule} from '@angular/cdk/a11y';
// import {BidiModule} from '@angular/cdk/bidi';
// import {ObserversModule} from '@angular/cdk/observers';
// import {OverlayModule} from '@angular/cdk/overlay';
// import {PlatformModule} from '@angular/cdk/platform';
// import {PortalModule} from '@angular/cdk/portal';
// // import {ScrollDispatchModule} from '@angular/cdk/scrolling';
// import {CdkStepperModule} from '@angular/cdk/stepper';
// import {CdkTableModule} from '@angular/cdk/table';
// import {
//   MatAutocompleteModule,
//   MatButtonModule,
//   MatButtonToggleModule,
//   MatCardModule,
//   MatCheckboxModule,
//   MatChipsModule,
//   MatDatepickerModule,
//   MatDialogModule,
//   MatExpansionModule,
//   MatGridListModule,
//   MatIconModule,
//   MatInputModule,
//   MatListModule,
//   MatMenuModule,
//   MatNativeDateModule,
//   MatProgressBarModule,
//   MatProgressSpinnerModule,
//   MatRadioModule,
//   MatRippleModule,
//   MatSelectModule,
//   MatSidenavModule,
//   MatSliderModule,
//   MatSlideToggleModule,
//   MatSnackBarModule,
//   MatStepperModule,
//   MatTableModule,
//   MatTabsModule,
//   MatToolbarModule,
//   MatTooltipModule,
// } from '@angular/material';
// import {AppComponent} from './app.component';
// import { LoginComponent } from './login/login.component';
// import { AppRoutingModule } from './app-routing.module';
// /**
//  * NgModule that includes all Material modules that are required to serve 
//  * the Plunker.
//  */
// @NgModule({
//   exports: [
//     // CDK
//     A11yModule,
//     BidiModule,
//     ObserversModule,
//     OverlayModule,
//     PlatformModule,
//     PortalModule,
//     // ScrollDispatchModule,
//     CdkStepperModule,
//     CdkTableModule,
    
//     // Material
//     MatAutocompleteModule,
//     MatButtonModule,
//     MatButtonToggleModule,
//     MatCardModule,
//     MatCheckboxModule,
//     MatChipsModule,
//     MatDatepickerModule,
//     MatDialogModule,
//     MatExpansionModule,
//     MatGridListModule,
//     MatIconModule,
//     MatInputModule,
//     MatListModule,
//     MatMenuModule,
//     MatProgressBarModule,
//     MatProgressSpinnerModule,
//     MatRadioModule,
//     MatRippleModule,
//     MatSelectModule,
//     MatSidenavModule,
//     MatSlideToggleModule,
//     MatSliderModule,
//     MatSnackBarModule,
//     MatStepperModule,
//     MatTableModule,
//     MatTabsModule,
//     MatToolbarModule,
//     MatTooltipModule,
//     MatNativeDateModule,
//   ],
//   declarations: []
// })
// export class MaterialModule {}

// @NgModule({
//   imports: [
//     BrowserModule,
//     CommonModule,
//     MaterialModule,
//     FormsModule,
//     ReactiveFormsModule,
//     BrowserAnimationsModule,
//     AppRoutingModule
//   ],
//   declarations: [
//     AppComponent,
    
//     AppComponent,
//     RegistrationComponent,
//     LoginComponent,
//     ],
//   bootstrap: [AppComponent],
//   providers: [],
//   entryComponents: []
// })
// export class AppModule {}


