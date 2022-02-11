import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-dialog',
  templateUrl: './start-dialog.component.html',
  styleUrls: ['./start-dialog.component.scss']
})
export class StartDialogComponent {

  constructor(public dialogRef: MatDialogRef<StartDialogComponent>,private router: Router) {}

  goBack(){
    this.dialogRef.close();
    this.router.navigate(['/']);
  }

}
