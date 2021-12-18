import { Component, OnInit } from '@angular/core';
import { images } from 'src/app/data/images';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  
  images = images;

  constructor() { }

  ngOnInit(): void {
  }

  getSliderClass(index: Number): string{
    return index == 0 ? "carousel-item active" : "carousel-item"
  }

}
