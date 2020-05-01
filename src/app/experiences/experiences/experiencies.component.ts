import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JobModel } from 'src/app/models/job.model';
import { BriefcaseService } from 'src/app/services/briefcase.service';


@Component({
  selector: 'app-experiencies',
  templateUrl: './experiencies.component.html',
  styleUrls: ['./experiencies.component.css']
})
export class ExperienciesComponent implements OnInit {

  jobs:     JobModel;
  error:    boolean;
  loading:  boolean;
  constructor(
    private titleService:  Title,
    private briefcaseService: BriefcaseService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.briefcaseService.getJobs().subscribe( resp => {
      if (resp) {
        this.jobs = resp.jobs;
        this.loading = false;
      } else {
        this.error = true;
      }
    }, err => {
      this.error = true;
    });
    this.titleService.setTitle('Experiencias');
  }
}
