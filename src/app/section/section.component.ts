import { Component,OnInit } from '@angular/core';
import { SaaService } from '../saa.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  constructor(private data:SaaService){}

  
    ngOnInit() {
      this.data.getData().subscribe((r: any) => {
        console.log(r);
      });
  }
 

}

