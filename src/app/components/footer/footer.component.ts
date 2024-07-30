import { Component } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faF, faFaceMehBlank, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  telephone = faPhone;
  emailus = faEnvelope;
email ='raghvendramishra9451@gmail.com'
  constructor(library: FaIconLibrary) {
    library.addIcons(faPhone);
  }
}
