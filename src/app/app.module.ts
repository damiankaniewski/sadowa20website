import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { ProfitsComponent } from './profits/profits.component';
import { HousesComponent } from './houses/houses.component';
import { ContactComponent } from './contact/contact.component';
import { SignatureComponent } from './signature/signature.component';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';

firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [AppComponent],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    AboutComponent,
    LocationComponent,
    ProfitsComponent,
    HousesComponent,
    ContactComponent,
    SignatureComponent,
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
})
export class AppModule {}
