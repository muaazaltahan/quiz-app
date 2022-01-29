import { Component } from '@angular/core';
import { faFacebook, faGithub, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {

  facebook = faFacebook;
  instagram = faInstagram;
  telegram = faTelegram;
  github = faGithub;

}
