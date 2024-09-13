import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { slideModel } from '../_models/slideModel';

@Component({
  selector: 'app-dia-list',
  standalone: true,
  imports: [],
  templateUrl: './dia-list.component.html',
  styleUrl: './dia-list.component.css'
})
export class DiaListComponent implements OnInit {
 listOfFotos:slideModel[] = [];
 private route = inject(ActivatedRoute);
  
 ngOnInit(): void {
   this.route.data.subscribe({
    next: data => {this.listOfFotos = data['lof'].Value}
   })
  }

}
