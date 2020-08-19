import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { MatBottomSheet, MatBottomSheetRef } from "@angular/material";
import { BottomSheetOverviewExampleSheetComponent } from "../bottom-sheet-overview-example-sheet/bottom-sheet-overview-example-sheet.component";
import { BriefcaseService } from "src/app/services/briefcase.service";
import { SkillModel } from "src/app/models/skill.model";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent implements OnInit {
  languages: SkillModel;
  othersLibs: SkillModel;
  frameworks: SkillModel;
  loading = false;
  error: boolean;
  constructor(
    private titleService: Title,
    private _bottomSheet: MatBottomSheet,
    private briefcaseService: BriefcaseService
  ) {}

  ngOnInit() {
    this.loading = true;
    this.briefcaseService.getSkills().subscribe(
      (resp) => {
        this.loading = false;
        if (resp) {
          this.languages = resp.languages;
          this.othersLibs = resp.othersLibs;
          this.frameworks = resp.frameworks;
        } else {
          this.error = true;
        }
      },
      (err) => {
        this.error = true;
      }
    );
    this.titleService.setTitle("Habilidades");
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }
}
