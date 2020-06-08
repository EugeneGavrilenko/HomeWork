import {Controller, Get, Inject, Param} from "@nestjs/common";
import {ProductService} from "./product.service";

@Controller('products')
export class ProductController {
    constructor(private productService: ProductService) {}
    // constructor(@Inject('ProductService') private productService: ProductService) {}

    @Get('')
    allProducts() {
        return this.productService.getProducts();
    }

    @Get(':id')
    getOneProduct(@Param('id') id: number) {
        return this.productService.getProduct(+id);
    }
}