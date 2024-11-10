import { KeyValuePipe } from '@angular/common';
import { Component, effect, input, OnInit, Signal } from '@angular/core';
import { AnimalStruct, AnimalType } from '../../services/animals.service';
import { SelectButtonComponent } from '../select-button/select-button.component';
import { Router } from '@angular/router';

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
    list = input.required<AnimalStruct[]>()
    type = input.required<AnimalType>()

    constructor(private route: Router){
      effect(() => {
        console.log(this.list())
      })
    }

    ngOnInit(): void {
    }  

    openEditor(){
      this.route.navigateByUrl(`${this.type()}/edit`)
    }
  
}
