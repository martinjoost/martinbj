import { Component, OnInit } from "@angular/core";
import { BriefcaseService } from "src/app/services/briefcase.service";

@Component({
  selector: "app-bottom-sheet-overview-example-sheet",
  templateUrl: "./bottom-sheet-overview-example-sheet.component.html",
  styleUrls: ["./bottom-sheet-overview-example-sheet.component.css"],
})
export class BottomSheetOverviewExampleSheetComponent implements OnInit {
  versions: [] = [];

  constructor(private briefcaseService: BriefcaseService) {}

  ngOnInit() {
    this.briefcaseService.getSkills().subscribe((resp) => {
      if (resp) {
        this.versions = resp.frameworks.find(
          (framework) => framework.name === "angular"
        ).versions;
      }
    });
  }
}
