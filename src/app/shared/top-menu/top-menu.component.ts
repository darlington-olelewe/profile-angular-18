import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent {

    hamburger:boolean = false;

  @ViewChild('myDialog', { static: true }) myDialog!: HTMLDialogElement;

  openDialog() {
      this.myDialog.open = true;

    // (this.myDialog as HTMLDialogElement).show(); // Show the dialog
  }

  closeDialog() {
    this.myDialog.close(); // Hide the dialog
  }


    toggle():void{
      if(this.hamburger){
        this.closeDialog()
      }else{
        this.openDialog()
      }
      this.hamburger = !this.hamburger;
    }

}
