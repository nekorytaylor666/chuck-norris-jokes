import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Joke } from "../shared/Joke";

@Component({
  selector: "app-add-joke",
  templateUrl: "./add-joke.component.html",
  styleUrls: ["./add-joke.component.scss"],
})
export class AddJokeComponent implements OnInit {
  newJokeForm;
  @Output() addJokeRequest = new EventEmitter<Joke>();
  onSubmit(jokeData) {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const jokeText = jokeData.jokeText;
    if (!jokeText) {
      return;
    }
    // we have only 20 items in mock data, so we will start from id 21 to prevent interfering between to items
    const minId = 1000;
    const maxId = 10000;
    const randomId = getRandomInt(minId, maxId);
    const newJoke: Joke = {
      id: randomId,
      joke: jokeText,
      categories: [],
    };

    this.newJokeForm.reset();

    this.addJokeRequest.emit(newJoke);
  }

  constructor(private formBuilder: FormBuilder) {
    this.newJokeForm = this.formBuilder.group({ jokeText: "" });
  }

  ngOnInit() {}
}
