import { Component, Input, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadService } from '../Service/upload.service';

@Component({
  selector: 'app-upload-image',
  inputs: ['companyId'],
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  @Input() companyId!: string;
  fileInfos?: Observable<any>;

  constructor(private _upload: UploadService) { }



  ngOnInit(): void {
    this.fileInfos = this._upload.getFiles();
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }


  public altText:string='company profile image';
  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this._upload.upload(this.currentFile,this.altText,'profile',this.companyId).subscribe({
          next: (event: any) => {
            console.log(' from upload event: ')
            console.info(event);
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
              this.message = event.body.message;
              this.fileInfos = this._upload.getFiles();
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


}
