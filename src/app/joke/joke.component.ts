import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Joke } from "../shared/Joke";

@Component({
  selector: "app-joke",
  templateUrl: "./joke.component.html",
  styleUrls: ["./joke.component.scss"],
})
export class JokeComponent implements OnInit {
  @Input() joke: Joke;
  @Output() deleteRequest = new EventEmitter<Joke>();

  constructor() {}

  delete() {
    this.deleteRequest.emit(this.joke);
  }

  ngOnInit() {}
}
