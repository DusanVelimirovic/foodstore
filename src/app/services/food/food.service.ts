import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  //food tag
  getAllFoodsByTag(tag: string): Food[] {

    return tag == "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));

  }

  //costum function to return array of food images
  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        price: 100,
        cookTime: '10-20',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 2,
        name: 'Pasta',
        price: 100,
        cookTime: '10-20',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Burger',
        price: 100,
        cookTime: '10-20',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 4,
        name: 'Pesto Sos',
        price: 100,
        cookTime: '10-20',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
    ]
  }

}
