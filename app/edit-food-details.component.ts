
import {Component} from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'edit-food-details',
  inputs: ['food'],
  template: `
  <div class = "editAdjustment">
  <h3>Edit Food: Food name: {{ food.name }} | Food Notes: {{ food.details }} | Food calories: {{ food.calories }} </h3>
  <input [(ngModel)]="food.name" class="col-sm-8 input-lg food-form"/>
  <input [(ngModel)]="food.notes" class="col-sm-8 input-lg food-form"/>
  <input [(ngModel)]="food.calories" class="col-sm-8 input-lg food-form"/>
  </div>
  `
})
export class EditFoodDetailsComponent {
  public food: Food;
}
