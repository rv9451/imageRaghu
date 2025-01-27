import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  text = 'Raghvendra, Mishra!';
  displayedText = ''; // This will hold the revealed characters
  currentIndex = 0; // Tracks the current character index

  ngOnInit() {
    // Set an interval to display characters one by one
    const interval = setInterval(() => {
      if (this.currentIndex < this.text.length) {
        this.displayedText += this.text[this.currentIndex];
        this.currentIndex++;
      } else {
        clearInterval(interval); // Clear the interval once all characters are displayed
      }
    }, 170); // Adjust the delay (in milliseconds) as needed
  }
}
