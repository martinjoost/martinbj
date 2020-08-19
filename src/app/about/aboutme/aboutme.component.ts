import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: "app-aboutme",
  templateUrl: "./aboutme.component.html",
  styleUrls: ["./aboutme.component.scss"],
})
export class AboutmeComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit() {
    this.titleService.setTitle("Sobre mí");
  }

  changeImg() {}
}
