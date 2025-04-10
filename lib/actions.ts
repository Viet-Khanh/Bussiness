// Mô phỏng các hành động liên quan đến giỏ hàng
// Trong thực tế, đây sẽ là các API calls đến server

import { CartItem, Cart } from "./types";

// Lưu trữ giỏ hàng trong localStorage
const CART_STORAGE_KEY = "vietsource_cart";

// Lấy giỏ hàng từ localStorage
export async function getCart(): Promise<Cart> {
  // Mô phỏng độ trễ của API
  await new Promise(resolve => setTimeout(resolve, 300));
  
  if (typeof window === "undefined") {
    return { items: [], total: 0 };
  }
  
  const cartData = localStorage.getItem(CART_STORAGE_KEY);
  if (!cartData) {
    return { items: [], total: 0 };
  }
  
  try {
    const cart = JSON.parse(cartData);
    return cart;
  } catch (error) {
    console.error("Error parsing cart data:", error);
    return { items: [], total: 0 };
  }
}

// Thêm sản phẩm vào giỏ hàng
export async function addToCart(productId: number, quantity: number): Promise<void> {
  // Mô phỏng độ trễ của API
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (typeof window === "undefined") {
    return;
  }
  
  const cart = await getCart();
  
  // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
  const existingItemIndex = cart.items.findIndex(item => item.productId === productId);
  
  if (existingItemIndex !== -1) {
    // Nếu sản phẩm đã có trong giỏ hàng, cập nhật số lượng
    cart.items[existingItemIndex].quantity += quantity;
  } else {
    // Nếu sản phẩm chưa có trong giỏ hàng, thêm mới
    cart.items.push({ productId, quantity });
  }
  
  // Tính tổng tiền (sẽ được thay thế bằng API call trong thực tế)
  cart.total = cart.items.length;
  
  // Lưu giỏ hàng vào localStorage
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

// Cập nhật số lượng sản phẩm trong giỏ hàng
export async function updateCartItem(productId: number, quantity: number): Promise<void> {
  // Mô phỏng độ trễ của API
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (typeof window === "undefined") {
    return;
  }
  
  const cart = await getCart();
  
  // Tìm sản phẩm trong giỏ hàng
  const existingItemIndex = cart.items.findIndex(item => item.productId === productId);
  
  if (existingItemIndex !== -1) {
    // Cập nhật số lượng
    cart.items[existingItemIndex].quantity = quantity;
    
    // Tính tổng tiền (sẽ được thay thế bằng API call trong thực tế)
    cart.total = cart.items.length;
    
    // Lưu giỏ hàng vào localStorage
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    
    // Kích hoạt sự kiện storage để cập nhật giỏ hàng trong Header
    window.dispatchEvent(new Event('storage'));
  }
}

// Xóa sản phẩm khỏi giỏ hàng
export async function removeFromCart(productId: number): Promise<void> {
  // Mô phỏng độ trễ của API
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (typeof window === "undefined") {
    return;
  }
  
  const cart = await getCart();
  
  // Lọc ra các sản phẩm khác với sản phẩm cần xóa
  cart.items = cart.items.filter(item => item.productId !== productId);
  
  // Tính tổng tiền (sẽ được thay thế bằng API call trong thực tế)
  cart.total = cart.items.length;
  
  // Lưu giỏ hàng vào localStorage
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  
  // Kích hoạt sự kiện storage để cập nhật giỏ hàng trong Header
  window.dispatchEvent(new Event('storage'));
}

// Xóa toàn bộ giỏ hàng
export async function clearCart(): Promise<void> {
  // Mô phỏng độ trễ của API
  await new Promise(resolve => setTimeout(resolve, 500));
  
  if (typeof window === "undefined") {
    return;
  }
  
  // Xóa giỏ hàng khỏi localStorage
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ items: [], total: 0 }));
  
  // Kích hoạt sự kiện storage để cập nhật giỏ hàng trong Header
  window.dispatchEvent(new Event('storage'));
}
