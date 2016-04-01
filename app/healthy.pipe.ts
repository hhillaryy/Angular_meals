import {Pipe, PipeTransform} from 'angular2/core';
import {Food} from './food.model';

@Pipe({
  name: "healthy",
  pure: false
})
export class HealthyPipe implements PipeTransform {
  transform(input: Food[], args) {
    var desiredHealthyCals = args[0];
    if (desiredHealthyCals === "Healthy") {
      return input.filter((food) => {
        return food.calories <= 300;
      });
    } else if (desiredHealthyCals === "Unhealthy") {
      return input.filter((food) => {
        return food.calories > 300;
      });
    } else {
      return input;
    }
  }
}
