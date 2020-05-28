import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { loginComponent } from "./login/login.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HttpClient } from "@angular/common/http";
const route: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: loginComponent }
];
@NgModule({
  declarations: [AppComponent, HomeComponent, loginComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
