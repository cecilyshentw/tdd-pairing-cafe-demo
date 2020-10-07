import { Cart } from "../cart/Cart";
import { Item } from "../cart/Item";
import { Product } from "../cart/Product";

export default function createDB() {
  const algerianBlend = new Product("AB2450", "Algerian Blend, 1kg", 10.5);
  const brazilianBeans = new Product("BB1143", "Brazilian Beans, 500g", 15.95);
  const kenyanSkies = new Product("KS8971", "Kenyan Skies, 1kg", 23.95);
  const colombianCreme = new Product("CC3675", "Colombian Creme, 1kg", 16.5);

  const algerianItems = new Item(algerianBlend);
  const brazilianItems = new Item(brazilianBeans);
  const kenyanItems = new Item(kenyanSkies);
  const colombianItems = new Item(colombianCreme);

  const coffeeCart = new Cart();
  coffeeCart.addItem(algerianItems);
  coffeeCart.addItem(brazilianItems);
  coffeeCart.addItem(kenyanItems);
  coffeeCart.addItem(colombianItems);

  return {
    items: [algerianItems, brazilianItems, kenyanItems, colombianItems],
    coffeeCart,
  };
}
