import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(res: HTMLElement):void {
    
    if(res.classList.contains('hide')) {
        res.classList.remove('hide');
        res.classList.add('responsive');
    }else {
        res.classList.add('hide');
        res.classList.remove('responsive');
    }
    // if(topnav.className === 'topnav') {
    //   topnav.className += " hide";
    // }else {
    //   topnav.className = "topnav";
    // }
  }

}
