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

  constructor() {}

  ngOnInit(): void {}
}
