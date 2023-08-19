import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css'],
})
export class BatchComponent implements OnInit {
  @Input() url!: string;
  @Input() name!: string;
  @Input() id!: number;

  imageUrl: string;

  constructor() {
    this.imageUrl =
      'https://apollopharmacy.sivacodes.com/api/v1/brand/' + this.url;
  }

  ngOnInit(): void {}
}
