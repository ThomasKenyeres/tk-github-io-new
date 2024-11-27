import { Component, OnInit } from '@angular/core';
import { PlaceholderComponent } from "../../../page-components/tools/placeholder/placeholder.component";
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-showcase-home',
  standalone: true,
  imports: [PlaceholderComponent],
  templateUrl: './showcase-home.component.html',
  styleUrl: './showcase-home.component.scss'
})
export class ShowcaseHomeComponent implements OnInit {

  constructor(private router: Router) {


  }
  ngOnInit(): void {
    
  }

}
