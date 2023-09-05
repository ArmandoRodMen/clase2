class ProductManager {
    constructor() {
        this.products = [];
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            console.error('Producto no encontrado', "\n");
        }
        return product;
    }

    getProducts() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || stock === undefined) {
            console.error('Todos los campos son requeridos', "\n");
            return;
        }

        if (this.products.some(product => product.code === code)) {
            console.error('El producto con el mismo código ya existe', "\n");
            return;
        }

        const newProduct = {
            id: this.products.length === 0 ? 1 : this.products[this.products.length - 1].id + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        this.products.push(newProduct);
        console.log('Producto añadido satisfactoriamente:', newProduct, "\n");
    }
}

// Example usage:
const manager = new ProductManager();

manager.addProduct('Teclado', 'RGB mecánico', 250.00, 'https://m.media-amazon.com/images/I/61CJJ297IJL._AC_SL1200_.jpg', 'P1', 8);
manager.addProduct('Mouse', 'RGB inalámbrico', 450.50, 'https://m.media-amazon.com/images/I/6177U5fDSwL.__AC_SX300_SY300_QL70_ML2_.jpg', 'P2', 5);

const allProducts = manager.getProducts();
console.log('Todos los productos:', allProducts, "\n");

const productById = manager.getProductById(1); // Mostrar primer producto
console.log('Productos por ID:', productById, "\n");

const nonExistingProduct = manager.getProductById(3); // Mostrar el mensjae de error
