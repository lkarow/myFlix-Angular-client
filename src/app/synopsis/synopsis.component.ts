import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.component.html',
  styleUrls: ['./synopsis.component.scss'],
})
export class SynopsisComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { Synopsis: 'snyopsis' }
  ) {}

  ngOnInit(): void {}
}
