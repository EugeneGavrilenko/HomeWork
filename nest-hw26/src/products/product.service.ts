import {Injectable} from "@nestjs/common";
import {products} from "./consts";

@Injectable()
export class ProductService {
    public getProduct(id:number) {
        return products.find((prod) => prod.id === +id);
    }

    public getProducts() {
        return products;
    }
}