import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  onSaveRoster() {
    this.snackBar.open('Roster Updated!', 'Success', {
      duration: 1000,
      panelClass: 'success-color'
    });
  }

}
