import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finish-dialog',
  templateUrl: './finish-dialog.component.html',
  styleUrls: ['./finish-dialog.component.scss']
})
export class FinishDialogComponent {

  constructor(public dialogRef: MatDialogRef<FinishDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {grade: number, time: number} , private router: Router) {}

  goTo(path: string){
    this.dialogRef.close();
    this.router.navigate([path]);
  }

  reload() {
    window.location.reload();
  }

}
