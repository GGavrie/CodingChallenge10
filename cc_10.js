// Define a Product class
class Product {
    // Constructor to initialize product properties
    constructor(name, id, price, stock) {
      this.name = name;
      this.id = id;
      this.price = price;
      this.stock = stock;
    }
  
    // Method to get product details
    getDetails() {
      return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
  
    // Method to update the stock quantity
    updateStock(quantity) {
      this.stock -= quantity;
    }
  }
  
  // Test Cases:
  // Create a new product
  const prod1 = new Product("Laptop", 101, 1200, 10);
  // Log the product details
  console.log(prod1.getDetails());
  
  // Update the stock
  prod1.updateStock(3);
  // Log the updated product details
  console.log(prod1.getDetails());