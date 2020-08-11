import { Injectable } from "@angular/core";
import { jokesMock } from "./shared/jokes";
import { Joke } from "./shared/Joke";

@Injectable({
  providedIn: "root",
})
export class JokeService {
  jokes: Joke[] = jokesMock;

  getJokes() {
    return this.jokes;
  }

  deleteJoke(id: number) {
    this.jokes = this.jokes.filter((joke) => joke.id !== id);
  }

  updateJoke(oldJoke: Joke, newJoke: Joke) {
    this.jokes = this.jokes.map((joke) =>
      joke.id !== oldJoke.id ? joke : newJoke
    );
  }

  addJoke(joke: Joke) {
    this.jokes.unshift(joke);
  }

  constructor() {}
}
