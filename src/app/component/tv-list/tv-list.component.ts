import { Component } from '@angular/core';
import { TvService } from '../../Services/tv.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tv-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tv-list.component.html',
  styleUrl: './tv-list.component.css'
})
export class TvListComponent {
  tvList:any[]=[];
  constructor(private tvserv:TvService){}
  ngOnInit(){
    this.tvserv.getAllTv().subscribe((tvData)=>{
      this.tvList=tvData.results;
      console.log(this.tvList);

    })

  }
}
