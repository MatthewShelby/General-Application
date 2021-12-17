import { Component, Input, OnInit } from '@angular/core';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UploadService } from '../Service/upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-image',
  inputs: ['companyId'],
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {


  // for profile
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;

  // for logo
  selectedFiles2?: FileList;
  currentFile2?: File;
  progress2 = 0;
  message2 = '';
  fileInfos2?: Observable<any>;

  @Input() companyId!: string;

  constructor(
    private _upload: UploadService,
    private router: Router
  ) { }

  public altText: string = 'Ex: something company profile'
  public altText2: string = 'Ex: something company logo'

  ngOnInit(): void {
    //this.fileInfos = this._upload.getFiles();
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }
  selectFile2(event: any): void {
    this.selectedFiles2 = event.target.files;
  }


  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        this._upload.upload(this.currentFile, this.altText, 'profile', this.companyId).subscribe({
          next: (event: any) => {
            console.log(' from upload event: ')
            console.info(event);
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100 * event.loaded / event.total);
              if (event.loaded == event.total) {
                this.router.navigate(['./userPanel#profile-image']); //#profile-image
                console.log('end');

              }
            } else if (event instanceof HttpResponse) {
              // this.message = event.body.message;
              // console.log('returned address: ' + event.body.data);
              // this.fileInfos = this._upload.getRecentFile(event.body.data);
              this.router.navigate(['./userPanel'], { fragment: 'pro-img' });
              let baseUrl = window.location.href.replace(this.router.url, '');
              window.open(baseUrl + '/userPanel#pro-img', '_blank');
            } else if (event.type === HttpEventType.Sent) {
              console.log('sent');

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
  upload2(): void {
    this.progress2 = 0;
      console.log('FROM UPLOAD ---> null comany id. id: ' + this.companyId);
    if (this.selectedFiles2) {
      const file: File | null = this.selectedFiles2.item(0);

      if (file) {
        this.currentFile2 = file;

        this._upload.uploadLogo(this.currentFile2, this.altText2,  this.companyId).subscribe({
          next: (event: any) => {
            console.log(' from upload event: ')
            console.info(event);
            if (event.type === HttpEventType.UploadProgress) {
              this.progress2 = Math.round(100 * event.loaded / event.total);
            } else if (event instanceof HttpResponse) {
               this.message2 = event.body.message;
              // console.log('returned address: ' + event.body.data);
              // this.fileInfos = this._upload.getRecentFile(event.body.data);
              this.router.navigate(['./userPanel'], { fragment: 'pro-img' });
              let baseUrl = window.location.href.replace(this.router.url, '');
              window.open(baseUrl + '/userPanel#logo-img', '_blank');
            } 

          },
          error: (err: any) => {
            console.info(err);
            console.log('upload logo error data: '+err.data);
            this.progress2 = 0;

            if (err.error && err.error.message) {
              this.message2 = err.error.message;
            } else {
              this.message2 = 'Could not upload the file!';
            }

            this.currentFile2 = undefined;
          }
        });
      }

      this.selectedFiles2 = undefined;
    }
  }

}
