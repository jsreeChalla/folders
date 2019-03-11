import { Injectable } from '@angular/core';
import {Http,Headers,Response,RequestOptions} from '@angular/http';
import { Observable, of } from 'rxjs';
import {Folder} from './folder';
import 'rxjs/add/operator/map';
import {environment} from '../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  constructor(private http:Http) { }
   
  getFolders():Observable <Folder[]>{
    return this.http.get(environment.apiURL+'/folders/').subscribe(
    res=>res.json() 
    )
  }
  addFolder(newFolder){
    var headers= new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post(environment.apiURL+'/addFolder/',headers,newFolder).map(
      res=>res.json())
  }
  deleteFolder(id){
    return this.http.delete(environment.apiURL+'/folder/'+id).subscribe(res=>res.json())
  }
}
