import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  testImage = "";
  ngOnInit(): void {
    this.testImage = "http://localhost:5123/api/Images/getImageFile/" + 5;
  }

}
