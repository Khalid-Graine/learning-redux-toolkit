

Redux Toolkit Cart Project
This is a small project created to learn and practice using Redux Toolkit. The project is a simple online store where users can add, remove, and modify the quantity of products in their shopping cart. The main focus is on managing the state of the cart using Redux.

Features
Add products to the cart.
Remove products from the cart.
Increase or decrease the quantity of items in the cart.
Clear the entire cart.
View the total amount of items and the total price in the cart.
Getting Started
Prerequisites
Make sure you have the following installed:

Node.js
npm (Node Package Manager)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/redux-toolkit-cart.git
Change into the project directory:

bash
Copy code
cd redux-toolkit-cart
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm start
The application will be accessible at http://localhost:3000.

Project Structure
src/: Contains the source code of the project.
components/: React components used in the application.
redux/: Redux-related files.
cartSlice.js: Defines the Redux slice for managing the cart state.
store.js: Configures the Redux store.
cartItems.js: Initial data for the products in the store.
Redux Configuration
The Redux state for this project is managed using the Redux Toolkit library. The state includes the list of items in the cart, the total amount of items, and the total price. The actions defined in cartSlice.js handle adding, removing, and updating items in the cart.

Available Actions
clearCart: Clears all items from the cart.
deleteItem: Removes a specific item from the cart.
increase: Increases the quantity of a specific item in the cart.
decrease: Decreases the quantity of a specific item in the cart.
calculTotal: Calculates and updates the total price of items in the cart.
calculAmount: Calculates and updates the total quantity of items in the cart.
Usage
Browse the products in the store.
Add products to the cart by specifying the quantity.
Adjust the quantity or remove items as needed.
View the total quantity and total price at the bottom of the cart.
Feel free to explore and modify the code to enhance your understanding of Redux Toolkit.

Happy coding! 🚀
