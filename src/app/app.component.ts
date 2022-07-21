import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './core/services/user.service';
import { WebSocketService } from './core/services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pm-web';

  constructor(
    private iconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private websocketService: WebSocketService,
    private userService: UserService,
  ){
    this.iconRegistry.addSvgIcon(
      'pm-logo', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/logo.svg")
    );

    this.userService.getUser(1)
    .subscribe(val => {
      this.userService.loggedUser.next(val);
    });
  }

  ngOnInit(){
    this.websocketService.connect();
  }
}