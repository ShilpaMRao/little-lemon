function createData(path, src, label, textheading, price, text) {
  return { path, src, label, textheading, price, text };
}

export const menuCards = [
  createData(
    "/menu",
    "greek salad.jpg",
    "Greek Salad",
    "Greek Salad",
    "$12.99",
    "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with garlic and olive oil."
  ),
  createData(
    "/menu",
    "bruschetta.jpg",
    "Bruschetta",
    "Bruschetta",
    "$5.99",
    "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with garlic and olive oil."
  ),
  createData(
    "/menu",
    "lemon dessert.jpg",
    "Lemon Dessert",
    "Lemon Dessert",
    "$5.00",
    "This comes straight from grandma's receipe book, every last ingredient has been sourced and is as authentic as can be imagined."
  ),
];
