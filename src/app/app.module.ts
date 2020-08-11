import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { JokesComponent } from "./jokes/jokes.component";
import { FormsModule } from "@angular/forms";
import { LogoComponent } from './logo/logo.component';
import { JokeComponent } from './joke/joke.component'; // <-- NgModel lives here

@NgModule({
  declarations: [AppComponent, JokesComponent, LogoComponent, JokeComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
