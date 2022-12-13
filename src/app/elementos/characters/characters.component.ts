import { Component, OnInit } from '@angular/core';
import { RecieveDataService } from 'src/app/recieve-data.service';


/*
interface character{
      id: number,
      name: String,
      status: String,
      species: String,
      gender: String,
      origin: String,
      location: String,
      image: String;
}*/

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private recieveData: RecieveDataService){}

  datos: any = [];
/*
    ngOnInit(){
      this.httpClient.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20").subscribe(data =>{
        console.log(data);
        this.datos = data;
      })
    }
*/
ngOnInit(): void {
  this.recieveData.getData().subscribe(data =>{
    this.datos = data;
    console.log(this.datos)
  });


}


}
