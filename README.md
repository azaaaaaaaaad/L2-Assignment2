# Stationery Shop API

## Description

The Stationery Shop API is a web application that allows users to manage products and orders in an online stationery store. The API is built with Express and TypeScript, and integrates with MongoDB using Mongoose for data storage and management. It supports CRUD operations for stationery products, order management, and inventory control.

The application handles the following:

- **Stationery Products**: CRUD operations on product details (name, brand, price, category, description, etc.)
- **Orders**: Create orders, manage inventory, and calculate revenue based on order data.

## Features

- **CRUD operations for Stationery Products**:
  - Create, update, delete, and retrieve products.
- **Order Management**:
  - Place orders and track product quantities.
  - Inventory management: Decrease product quantity on order placement.
  - Automatically mark products as out of stock when inventory reaches zero.
- **Revenue Calculation**:
  - Calculate total revenue based on all orders placed.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 14 or higher)
- **MongoDB** (locally or via a cloud service like MongoDB Atlas)
- **TypeScript** (if you plan to develop or modify the code)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/azaaaaaaaaad/L2-Assignment2
   ```

2. Navigate into the project directory:

   ```bash
   cd L2-Assignment2.git
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```
   MONGO_URI=mongodb://localhost:5000/stationery-shop
   PORT=5000
   ```

   Replace `MONGO_URI` with your MongoDB connection string if using a cloud service like MongoDB Atlas.

5. Run the development server:

   ```bash
   npm run dev
   ```

   This will start the Express server on `http://localhost:5000`.
