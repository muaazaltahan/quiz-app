import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from 'src/app/models/test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  constructor(private router: Router) {}

  @Input() test: Test;

  goToTest(id: string) {
    this.router.navigate([`tests/${id}`]);
  }

}
