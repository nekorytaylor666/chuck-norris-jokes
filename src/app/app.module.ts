import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { JokesComponent } from "./jokes/jokes.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LogoComponent } from "./logo/logo.component";
import { JokeComponent } from "./joke/joke.component";
import { AddJokeComponent } from "./add-joke/add-joke.component";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    LogoComponent,
    JokeComponent,
    AddJokeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
