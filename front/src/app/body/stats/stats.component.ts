import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StatistiqueService } from 'src/app/forms/service/statistique.service';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  createDateForm: FormGroup;
  end: string;
  start: string;
  data: any;

  constructor(private statistiqueService: StatistiqueService, private formBuilder: FormBuilder, private router: Router,
  ) { }

  ngOnInit() {
    this.createDateForm = this.formBuilder.group({
      start: ['', Validators.required],
      end: ['', Validators.required]
    });
    // TODO: uncomment if need date of today at launch
    // this.selectToday();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.createDateForm.controls;
  }

  onSubmit(formData) {

    // stop here if form is invalid
    if (this.createDateForm.invalid) {
      return;
    }

    this.statistiqueService.getTotalStat(formData.start, formData.end).subscribe(response => { this.data = response }, error => console.log(error));
  }
}
