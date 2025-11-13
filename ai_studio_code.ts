export type ViewType = 'recipes' | 'tools' | 'products' | 'tips';

export interface Ingredient {
  name: string;
  quantity: string;
}

export interface Recipe {
  id: number;
  title: string;
  description: string;
  category: string;
  ingredients: Ingredient[];
  instructions: string[];
}

export interface Tool {
  id: number;
  name: string;
  description: string;
  uses: string[];
}

export interface Product {
  id: number;
  name: string;
  description: string;
  category: 'natural' | 'chemical';
}

export interface Tip {
  id: number;
  title: string;
  content: string;
  category: string;
}