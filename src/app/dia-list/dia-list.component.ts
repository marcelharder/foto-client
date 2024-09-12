import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarouselModule} from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-dia-list',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './dia-list.component.html',
  styleUrl: './dia-list.component.css'
})
export class DiaListComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  testId = 0;
  
  ngOnInit(): void {
    this.testId = this.activatedRoute.snapshot.params['id'];
    
    // bv. get all the dias from category 5 and show them in the viewer

    

  }

}
