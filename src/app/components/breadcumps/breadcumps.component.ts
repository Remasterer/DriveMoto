import {Component, Input, OnInit} from '@angular/core';
import {ICategory} from "../../shared/interfaces/category.interface";
import {IBreadcumb} from "../../shared/interfaces/breadcumbs.interface";

@Component({
  selector: 'app-breadcumps',
  templateUrl: './breadcumps.component.html',
  styleUrls: ['./breadcumps.component.scss']
})

export class BreadcumpsComponent implements OnInit {
  @Input() links:  IBreadcumb[];
  constructor() { }

  ngOnInit(): void {
  }

}
