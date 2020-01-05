import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-apex',
  templateUrl: './apex.component.html',
  styleUrls: ['./apex.component.scss']
})
export class ApexComponent implements OnInit {

  constructor(private statsServ: StatsService) { }

  ngOnInit() {
    this.statsServ.getStats('psn', 'panconqu3sso').subscribe((res) => {
      console.log(res);
    });
  }

}
