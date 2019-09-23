import { Component, OnInit } from '@angular/core';
import {InterestService} from '../services/interest.service';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  constructor(private interestService:InterestService) { }

  Total: number;
  years: number;

  calaulateinterest(): void {
    this.Total = this.interestService.calaulateinterest(this.years);
  }

  ngOnInit() {
  }

}
