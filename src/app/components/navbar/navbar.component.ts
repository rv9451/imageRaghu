import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(){}
ngOnInit(): void {
    
}
isNavOpen = false;

navToggle() {
  this.isNavOpen = !this.isNavOpen;
}
}