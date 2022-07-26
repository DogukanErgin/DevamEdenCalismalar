import { Component } from '@angular/core';
declare var $: any  //jquery import
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularclient';
}
// $(document).ready(()=>{
//   alert("test");
// })