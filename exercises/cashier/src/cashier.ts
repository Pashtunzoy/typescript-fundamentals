interface CartItem {
  name: string;
  price: number;
  qty: number;
}

interface CartAPI {
  length: number;
  total: number;
  addItem(item: CartItem): CartAPI;
  add(name: string, price: number, qty?: number): CartAPI;
}

export function cashier(): CartAPI {
  let items: CartItem[] = [];
  return {
    get length() {
      return items.reduce((total, { qty }) => total + qty, 0);
    },
    get total() {
      return items.reduce((total, { price, qty }) => total + price * qty, 0);
    },
    add(name, price, qty = 1): CartAPI {
      items.push({ name, price, qty });
      return this;
    },
    addItem(item: CartItem): CartAPI {
      items.push(item);
      return this;
    }
  };
}
