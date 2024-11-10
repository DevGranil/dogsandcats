import { KeyValuePipe } from '@angular/common';
import { Component, effect, EventEmitter, input, OnInit, Output, Signal } from '@angular/core';
import { AnimalStruct, AnimalType } from '../../services/animals.service';
import { SelectButtonComponent } from '../select-button/select-button.component';
import { Router } from '@angular/router';

export enum ListType{
  subset,
  superset
}
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    KeyValuePipe,
    SelectButtonComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
    @Output() selected = new EventEmitter()
    list = input.required<AnimalStruct[]>()
    listType = input<ListType>()
    type = input<AnimalType>()

    constructor(private route: Router){
      effect(() => {
        console.log(this.list())
      })
    }

    ngOnInit(): void {
    }  

    openEditor(){
      if(!this.type()) return;
      this.route.navigate(['edit'], {queryParams: {animal: this.type()}})
    }

    itemClicked(){

    }
  
}
