import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaaService {

  private getUrl='';
  constructor(private http:HttpClient) { }
}
