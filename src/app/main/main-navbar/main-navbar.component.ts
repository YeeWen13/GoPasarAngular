import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  constructor(public title: Title) {
  }

  ngOnInit(): void {
    // this.subs.push(sub);
  }

  ngOnDestroy(): void {
    for (const sub of this.subs) sub.unsubscribe();
  }
}
