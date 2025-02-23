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

  // Task 2 - Creating an Order Class 
  class Order {
    // Constructor to initialize order properties
    constructor(orderId, product, quantity) {
      this.orderId = orderId;
      this.product = product;
      this.quantity = quantity;
      
      // Ensure stock is reduced when an order is created
      product.updateStock(quantity);
    }
    
    // Method to get order details
    getOrderDetails() {
      return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.product.price * this.quantity}`;
    }
  }
  
  // Test Cases:
  // Create a new order
  const order1 = new Order(501, prod1, 2);
  // Log the order details
  console.log(order1.getOrderDetails()); 
  // Expected output: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"
  
  // Log the updated product details
  console.log(prod1.getDetails()); 
  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5" (Stock reduced)

 
  //Task 3 Creating an Inventory Class
  class Inventory {
    // Constructor to initialize the inventory with an empty array of products
    constructor() {
      this.products = [];
      this.orders = [];
    }
  
    // Method to add a product to the inventory
    addProduct(product) {
      this.products.push(product); // Add the product to the end of the products array
    }
  
    // Method to list all products in the inventory
    listProducts() {
      // Loop through each product in the products array
      for (let i = 0; i < this.products.length; i++) {
        const product = this.products[i]; 
        console.log(product.getDetails()); // Log the details of the current product
      }
    }
    // Method to place an order
    placeOrder(orderId, product, quantity) {
        // Check if there is enough stock
        if (product.stock >= quantity) {
          // Create a new order
          const order = new Order(orderId, product, quantity);
          this.orders.push(order); // Add the order to the orders array
          console.log(`Order ${orderId} placed successfully.`);
        } else {
          console.log(`Not enough stock for product ${product.name}.`);
        }
      }
  
      // Method to list all placed orders
      listOrders() {
        // Loop through each order in the orders array
        for (let i = 0; i < this.orders.length; i++) {
          const order = this.orders[i];
          console.log(order.getOrderDetails()); // Log the details of the current order
        }
      }
    // Method to restock a product
    restockProduct(productId, quantity) {
        // Find the product in the inventory by its ID
        const product = this.products.find(product => product.id === productId);
  
        // If the product is found
        if (product) {
          // Increase the stock of the product
          product.stock += quantity;
          console.log(`Product ${product.name} restocked. New stock: ${product.stock}`);
        } else {
          // If the product is not found, log a message
          console.log(`Product with ID ${productId} not found in inventory.`);
        }
      }
  }
  
  // Test Cases:
  const inventory = new Inventory(); // Create a new instance of the Inventory class
  inventory.addProduct(prod1); // Add the prod1 product to the inventory
  inventory.listProducts(); // List all products in the inventory
  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"

  
  //Task 4 -  Implementing Order Management 
  // task 4 is in task 3 so that it can run correctly 
  inventory.placeOrder(601, prod1, 2);
  inventory.listOrders();
  // Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
  console.log(prod1.getDetails());
  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3
  

  // Task 5 - Implemented Product Restocking
  // Task 5 is in 3  because it is the ony way it can run 
  inventory.restockProduct(101, 5);
  console.log(prod1.getDetails()); 
  // Expected output: "Product: Laptop