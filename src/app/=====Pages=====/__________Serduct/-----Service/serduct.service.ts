import { Injectable } from '@angular/core';
import { Company, ContactInfo, Serduct, ContactInfoType, SerductImage, ImageType, SerductType } from 'src/app/==== Lateral ====/DTO';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { BehaviorSubject, lastValueFrom, map, Observable, timeout } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerductService {
  public activeSerduct!: Serduct
  //private baseUrl = 'https://localhost:44339/api/serducts';

  constructor(
    private http: HttpClient
  ) { }

  

  












}
