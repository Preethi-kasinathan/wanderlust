import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onImageClick(): void
  {
    this.router.navigateByUrl("./Mumbai");
  }

}
