import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { BottomSheetOverviewExampleSheetComponent } from '../bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component';

@Component({
  selector:  'app-skills',
  templateUrl:  './skills.component.html',
  styleUrls:  ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  languages: any = [
    {
      name: 'HTML5',
      href: '',
      url: '../../../assets/images/html5.png',
    },
    {
      name: 'CSS3',
      href: '',
      url: '../../../assets/images/css3.svg',
    },
    {
      name: 'JAVASCRIPT',
      href: '',
      url: '../../../assets/images/js.png',
    },
    {
      name: 'JAVA',
      href: '',
      url: '../../../assets/images/java.png',
    },
    {
      name: 'DART',
      href: 'https://dart.dev/',
      url: '../../../assets/images/dart.png',
    }
  ];
  othersLibs: any = [
    {
      name: 'Angular universal',
      href: 'https://angular.io/guide/universal',
      url: '../../../assets/images/universal.png',
    },
    {
      name: 'Angular progressive web app (PWA)',
      href: 'https://angular.io/guide/service-worker-getting-started',
      url: '../../../assets/images/pwa.png',
    },
    {
      name: 'Firebase',
      href: 'https://firebase.google.com/',
      url: '../../../assets/images/firebase.png',
    },
    {
      name: 'Highcharts.js',
      href: 'https://www.highcharts.com',
      url: '../../../assets/images/highchartjs.png',
    },
    {
      name: 'npm',
      href: 'https://www.npmjs.com/',
      url: '../../../assets/images/npm.png',
    },
    {
      name: 'rxjs',
      href: 'https://rxjs-dev.firebaseapp.com/',
      url: '../../../assets/images/rxjs.png',
    },
    {
      name: 'i18n Internazionalization',
      href: 'https://angular.io/guide/i18n',
      url: '../../../assets/images/i18n.png',
    },
    {
      name: 'Vb.net',
      href: 'https://es.wikipedia.org/wiki/Visual_Basic_.NET',
      url: '../../../assets/images/vb.png',
    },
    {
      name: 'Bitbucket',
      href: 'https://bitbucket.org/',
      url: '../../../assets/images/bitbucket.png',
    },
    {
      name: 'Git',
      href: 'https://git-scm.com/',
      url: '../../../assets/images/git.png',
    },
    {
      name: 'Angular Material',
      href: 'https://material.angular.io/',
      url: '../../../assets/images/angularmaterial.png',
    },
    {
      name: 'Material Design',
      href: 'https://material.io/',
      url: '../../../assets/images/materialdesign.png',
    },
    {
      name: 'gitlab',
      href: 'https://about.gitlab.com',
      url: '../../../assets/images/gitlab.png',
    },
    {
      name: 'github',
      href: 'https://github.com/',
      url: '../../../assets/images/github.png',
    },
    {
      name: 'scrum',
      href: 'https://scrum.org/',
      url: '../../../assets/images/scrum.png',
    },
    {
      name: 'sass',
      href: 'hthttps: //sass-lang.com/',
      url: '../../../assets/images/scss.png',
    },
    {
      name: 'jquery',
      href: 'https://jquery.com/',
      url: '../../../assets/images/jquery.png',
    },
    {
      name: 'graphql',
      href: 'https://graphql.org/',
      url: '../../../assets/images/graph.png',
    },
    {
      name: 'Bootstrap',
      href: 'https://getbootstrap.com/',
      url: '../../../assets/images/bootstrap.png',
    },
    {
      name: 'rest',
      href: '',
      url: '../../../assets/images/rest.png',
    },
  ];
  frameworks: any = [
    {
      name: 'angular',
      href: '',
      url: '../../../assets/images/angular.png',
      versions:  true
    },
    {
      name: 'Nodejs',
      href: 'https://nodejs.org/es/',
      url: '../../../assets/images/nodejs.png',
    },
    {
      name: 'flutter',
      href: 'https://flutter.dev/',
      url: '../../../assets/images/flutter.png',
    },
    {
      name: 'Reactjs',
      href: 'https://angular.io/guide/universal',
      url: '../../../assets/images/reactjs.png',
    },
    {
      name: 'vuejs',
      href: 'https://vuejs.org/',
      url: '../../../assets/images/vue.png',
    }
  ];

  constructor(private titleService:  Title,
      private _bottomSheet:  MatBottomSheet) { }

  ngOnInit() {
    this.titleService.setTitle('Habilidades');
  }

  openBottomSheet():  void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }
}
