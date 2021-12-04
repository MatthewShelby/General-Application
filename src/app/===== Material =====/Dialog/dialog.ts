import { Component, Inject, Injectable, Input  } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InjectionToken } from '@angular/core';

export const DIALOG_HEAD = new InjectionToken<string>('dialog.head');
export const DIALOG_TITLE = new InjectionToken<string>('dialog.title');
export const DIALOG_CONTENT = new InjectionToken<string>('dialog.content');

export interface DialogData {
  head1: string,
  title1: string,
  content1: string,
}

@Injectable({
  providedIn: 'root'
})
export class DataPackage
//  implements DialogData 
 {

  head1: string;
  title1: string;
  content1: string;

  constructor(
   
    @Inject(DIALOG_HEAD) head:string,
    @Inject(DIALOG_TITLE) title:string,
    @Inject(DIALOG_CONTENT) content:string
    // title:string,
    // content:string,
  ) {
    this.head1 = head;
    this.title1 = title;
    this.content1 = content;
  }

  // head: string;
  // title: string;
  // content: string;

}

/**
 * @title Injecting data when opening a dialog
 */
@Component({
  selector: 'dialog-data-example',
  //templateUrl: 'dialog-data-example.html',

  template: '<h1 > template </h1>'
})
export class DialogDataExample {
  constructor(public dialog: MatDialog,
     public datapack: DataPackage
     ) { }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, 
      {
      data: {
        head1: this.datapack.head1,
        title1: this.datapack.title1,
        content1: this.datapack.content1,
      },
    }
    );
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}