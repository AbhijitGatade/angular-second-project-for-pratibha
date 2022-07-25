import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'second-project';
  enabled:boolean = false;
  name:string = "Abhijit Gatade";
  choice:number = 1;

  months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");


  ngOnInit(): void {
  setInterval(()=>{
    this.enabled = !this.enabled;
  }, 3000);
  }

  clicked(){
    alert("You clicked Button");
  }
}
