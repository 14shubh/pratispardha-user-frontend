import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hom',
  templateUrl: './hom.component.html',
  styleUrls: ['./hom.component.css']
})
export class HomComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
    this._router.navigate(['home']);
  }

}
