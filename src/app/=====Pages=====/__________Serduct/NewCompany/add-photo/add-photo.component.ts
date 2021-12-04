import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, pipe, } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { SerductService } from '../../-----Service/serduct.service';

@Component({
  selector: 'app-add-photo',
  templateUrl: './add-photo.component.html',
  styleUrls: ['./add-photo.component.css']
})
export class AddPhotoComponent implements OnInit {
  public error: string = '';

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  public message :string = '';

  fileInfos?: Observable<any>;
  constructor( 
    private serductService: SerductService
    ) { }

  ngOnInit(): void {
    this.fileInfos = this.serductService.getFiles();

  }



  
  //#region =====  FILE  =====  

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  public check: boolean = false;
  upload(): void {
    this.check = false;
    this.progress = 0;

    if (this.selectedFiles) {
      let file: File = this.selectedFiles.item(0) ?? new File([], 'hh');

      if (file.size >= 300000) {
        console.log('File size is must be less than 300 kb');
        this.error = ' File size is must be less than 300 kb. ';
      } else {
        if (file.type == 'image/jpeg' || file.type == 'image/png') {

          this.check = true
        } else {
          console.log('File type must be jpeg or png.')
        this.error = ' File type must be jpeg or png. ';

        }
      }



      if (file && this.check) {
        this.currentFile = file;

        this.serductService.upload(this.currentFile).subscribe({
          next: (event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this.serductService.getFiles();
            }
          },
          error: (err: any) => {
            console.log(err);
            this.progress = 0;

            if (err.error && err.error.message) {
              this.message = err.error.message;
            } else {
              this.message = 'Could not upload the file!';
            }

            this.currentFile = undefined;
          }
        });
      }

      this.selectedFiles = undefined;
    }
  }



  //#endregion
}
