import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-loansimulate",
  templateUrl: "./loansimulate.component.html",
  styleUrls: ["./loansimulate.component.scss"]
})
export class LoansimulateComponent implements OnInit {
  lastUpdate = new Date();

  ops = [
    {
      date: this.lastUpdate,
      montant: 376,
      montantCumule: 376
    }
  ];

  constructor() {}

  ngOnInit() {}
}
