import { Component, OnInit, inject } from '@angular/core';
import { ImageService } from '../_services/image.service';

@Component({
  selector: 'app-About',
  standalone: true,
  imports: [],
  templateUrl: './About.component.html',
  styleUrls: ['./About.component.css']
})
export class AboutComponent implements OnInit {
  
  private imageSe = inject(ImageService);
  testImage: any;

  constructor() { }

  ngOnInit() {
     
      this.testImage = "http://localhost:5123/api/Images/getImageFile/" + 6;

   
   }

}
