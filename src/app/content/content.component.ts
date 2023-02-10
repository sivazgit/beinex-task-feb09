import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  public head = "Readers!";
  public author = "Carl Sagan";
  public isDisabled = true;
  public myClass = 'purple';
  public status = 'error';
  public text = "default";
  public clicks = '';
  public value = "Enter your Thoughts here!";




  onSave(){
   this.clicks = "Ordered Successfully!"
  }


  

}
