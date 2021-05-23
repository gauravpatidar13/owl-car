import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from './home/home.component';
import {OwlModule} from 'ngx-owl-carousel';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OwlModule
  ],
  declarations: [AppComponent, HomeComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}
