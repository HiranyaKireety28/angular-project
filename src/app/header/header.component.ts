import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  searchTerm?: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  search(): void {
    // this.router.navigate(['/products'], {queryParams: {searchTerm: this.searchTerm}});
    this.router.navigate(['/products',this.searchTerm]);
  }
}
