import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { NodeData } from '../model/nodedata';

@Injectable({
    providedIn: 'root'
  })

export class NodeDataService {
    private apiUrl = 'http://192.168.1.14:8089/pfe/api/v1/data';
  
    constructor(private http: HttpClient) { }
  
    getAllData(): Observable<NodeData[]> {

      return this.http.get<NodeData[]>(`${this.apiUrl}/`);
    }
  
}