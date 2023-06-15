import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private route: ActivatedRoute) {
    const sub = this.route.data.subscribe((title) => {
      console.log("hello,", title);
    });
  }
}
