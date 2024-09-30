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
 eersteFoto = "";
 private route = inject(ActivatedRoute);
 aantalSlides = 0;
 item = 1;
  
 ngOnInit(): void {
   this.route.data.subscribe({
    next: data => {
      this.listOfFotos = data['lof'].Value;
      this.eersteFoto = this.listOfFotos[0].ImageUrl;
      this.aantalSlides = this.listOfFotos.length;
     
     
      debugger;
    
    }
   })
  }

}
