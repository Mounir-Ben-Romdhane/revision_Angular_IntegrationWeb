import { Category } from "./category";

export class Product{
    id!: number ;
    name !: string;
    description!: string;
    price!: string;
    qte!: number ;
    category !: Category ;
}