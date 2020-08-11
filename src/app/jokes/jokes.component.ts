import { Component, OnInit } from "@angular/core";
import { JokeService } from "../joke.service";
import { Joke } from "../shared/Joke";

@Component({
  selector: "app-jokes",
  templateUrl: "./jokes.component.html",
  styleUrls: ["./jokes.component.scss"],
})
export class JokesComponent implements OnInit {
  page = 1;
  itemsPerPage = 10;
  jokes: Joke[];
  constructor(private jokeService: JokeService) {}
  getJokes(): void {
    this.jokes = this.jokeService.getJokes();
  }

  deleteJoke(joke: Joke) {
    this.jokeService.deleteJoke(joke.id);
    this.getJokes();
  }

  addJoke(joke: Joke) {
    this.jokeService.addJoke(joke);
  }

  ngOnInit() {
    this.getJokes();
  }
}
