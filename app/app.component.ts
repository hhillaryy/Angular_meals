import { Component } from 'angular2/core';

@Component({
  selector: 'my-app',
  // directives: [FoodListComponent],
  template: `
    <div class="container">
      <h1>Meal Item Tracker App!</h1>
      <food-list [foodList]="foods"
      (onFoodSelect)="foodWasSelected($event)">
      </food-list>
    <div>
  `
})

export class AppComponent {
  public foods: Food[];
  constructor() {
    this.foods = [
      new Food("Cobb Salad", "no egg", 800, 0),
      new Food("Apple Pie", "A La Mode!", 900, 1),
      new Food("Oatmeal", "1 cup, Made with brown sugar", 325, 2),
      new Food("Pineapple", "1 cup", 130, 3)
    ];
  }
  foodWasSelected(clickedFood: Food): void {
  }
}
