import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';

// Import standalone components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';

import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { ProfitsComponent } from './profits/profits.component';
import { HousesComponent } from './houses/houses.component';
import { ContactComponent } from './contact/contact.component';
import { SignatureComponent } from './signature/signature.component';
import { PhotosComponent } from './photos/photos.component';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    LocationComponent,
    ProfitsComponent,
    HousesComponent,
    ContactComponent,
    SignatureComponent,
    PhotosComponent,
    SlickCarouselModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
