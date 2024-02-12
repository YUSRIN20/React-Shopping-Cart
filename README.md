# Dynamic Shopping Page with React

This repository contains a React application that demonstrates dynamic card rendering with responsive design features. The project showcases product cards for both men and women, allowing users to interact by adding items to their cart and removing them. Below is a detailed explanation of the code structure and functionality:

## Code Structure

### Components

1. **CardBody**: This component represents an individual product card. It includes functionalities to add or remove items from the cart. The card displays the product name, image, rating (if available), price, and a button to either add the item to the cart or remove it.

2. **ConditionalRendering**: This component manages the rendering of product cards for both men and women. It iterates through the provided product data and renders the corresponding card components dynamically.

### CSS Styles

The `CardBody.css` file contains styles specific to the `CardBody` component, ensuring consistent layout and appearance across product cards.

## Functionality

### Dynamic Card Rendering

- The `ConditionalRendering` component dynamically renders product cards based on the provided data for both men and women.
- It utilizes mapping functions to iterate through the product data arrays and generates corresponding card components.

### Add to Cart Functionality

- Each product card includes an "Add to Cart" button.
- Clicking this button triggers the `CartAdd` function, which adds the item to the cart and updates the cart count displayed on the UI.

### Remove from Cart Functionality

- If an item is already in the cart, the button text changes to "Remove from Cart".
- Clicking this button triggers the `CartRemove` function, which removes the item from the cart and updates the cart count accordingly.

## Responsive Design

- The application is designed to be responsive, ensuring optimal viewing experience across various devices and screen sizes.
- CSS styles are applied to ensure that the layout adapts gracefully to different viewport sizes, providing a seamless user experience.

## Installation and Usage

Follow the instructions provided in the "Getting Started" section of the README to clone the repository, install dependencies, and run the application locally.

## Contributing

Contributions to this project are welcome! If you'd like to contribute, please follow the guidelines outlined in the README.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgements

Special thanks to the React community for providing a robust framework for building user interfaces.

## Contact

For any inquiries or feedback, feel free to contact [massyusrin123@gmail.com].
