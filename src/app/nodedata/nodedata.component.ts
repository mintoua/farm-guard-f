import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ElementRef } from '@angular/core';
import { NodeData } from '../shared/model/nodedata';
import { NodeDataService } from '../shared/service/nodedata.service';

@Component({
  selector: 'app-nodedata',
  templateUrl: './nodedata.component.html',
  styleUrls: ['./nodedata.component.scss']
})
export class NodedataComponent implements OnInit {
  humValues: any;
  Labels: any;
  tempValues: any;
  allData: any;

  constructor(private elementRef: ElementRef, private dataService: NodeDataService) { }

  ngOnInit(): void {
    // ... Autres codes ...
    this.getAllData();
        // Créer un élément <script> pour charger monjs.js

  }

  getAllData(){
    this.Labels = [];
    this.tempValues = [];
    this.humValues = [];
    this.dataService.getAllData().subscribe(
      (res: any) => {
        res.forEach((data: NodeData) => {

          this.Labels.push(data.date);
          this.humValues.push(data.humidity);
          this.tempValues.push(data.temperature);
        });
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "../assets/js/monjs.js";
        this.elementRef.nativeElement.appendChild(script);
    
        // Ajouter l'attribut data-* pour stocker la valeur de data
        var scriptData = document.createElement("script");
        scriptData.type = "text/javascript";
        scriptData.innerHTML = `
        var humValues = ${JSON.stringify(this.humValues)};
        var tempValues = ${JSON.stringify(this.tempValues)}; 
        var Labels = ${JSON.stringify(this.Labels)};
        `;
        this.elementRef.nativeElement.appendChild(scriptData);
        setInterval(function() {
          location.reload();
        }, 10000);
      }
    )
  }
}
