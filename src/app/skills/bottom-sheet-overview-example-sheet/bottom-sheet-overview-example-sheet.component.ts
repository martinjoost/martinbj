import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  templateUrl: './bottom-sheet-overview-example-sheet.component.html',
  styleUrls: ['./bottom-sheet-overview-example-sheet.component.css']
})
export class BottomSheetOverviewExampleSheetComponent implements OnInit {


  versions:any = [
    {
      name:'angular 2',
      href:'https://angular.io',
    },
    {
      name:'angular 4',
      href:'https://angular.io',
    },
    {
      name:'angular 5',
      href:'https://angular.io',
    },
    {
      name:'angular 6',
      href:'https://angular.io',
    },
    {
      name:'angular 7',
      href:'https://angular.io',
    },
    {
      name:'angular 8',
      href:'https://angular.io',
    },
    {
      name:'angular 9',
      href:'https://angular.io',
    },
    {
      name:'angularjs',
      href:'https://angularjs.org',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
