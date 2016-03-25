import { Component, EventEmitter } from 'angular2/core';
import { Food } from './food.model';

@Component({
  selector: 'new-food',
  outputs: ['onSubmitNewFood'],
  template: `
    <div class="adjust">
    <h3>Create a new food Entry</h3>
    <input placeholder="Name of Food" class="col-sm-8 input-lg" #newFoodName>
    <input placeholder="Notes about your food" class="col-sm-8 input-lg" #newFoodNotes>
    <input placeholder="Calories of your food" class="col-sm-8 input-lg" #newFoodCalories>
    <button (click)="addFood(newFoodName, newFoodNotes, newFoodCalories)" class="btn-success btn-lg add-button">Add food Entry</button>
    </div>
  `
})
export class NewFoodComponent {
  public onSubmitNewFood: EventEmitter<String[]>;
  constructor() {
    this.onSubmitNewFood = new EventEmitter();
  }
  addFood(newFoodName: HTMLInputElement, newFoodNotes: HTMLInputElement, newFoodCalories: HTMLInputElement) {
    this.onSubmitNewFood.emit([newFoodName.value, newFoodNotes.value, newFoodCalories.value])
    newFoodName.value = "";
    newFoodNotes.value = "";
    newFoodCalories.value = "";
  }
}
