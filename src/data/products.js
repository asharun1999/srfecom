export const categories = [
  { id: 'all', name: 'All Products', icon: '🛍️' },
  { id: 'sofas', name: 'Sofas', icon: '🛋️' },
  { id: 'kitchen', name: 'Modular Kitchen', icon: '🍳' },
  { id: 'bags', name: 'School Bags', icon: '🎒' },
  { id: 'electronics', name: 'Electronics', icon: '📱' },
  { id: 'appliances', name: 'Appliances', icon: '🧺' },
]

export const products = [
  // Sofas
  { id: 1, name: '3-Seater Fabric Sofa', category: 'sofas', price: 28999, icon: '🛋️', rating: 4.5, badge: 'Bestseller' },
  { id: 2, name: 'L-Shape Leather Sofa', category: 'sofas', price: 54999, icon: '🛋️', rating: 4.8, badge: 'Premium' },
  { id: 3, name: 'Recliner Sofa Set', category: 'sofas', price: 41999, icon: '🛋️', rating: 4.3 },
  { id: 4, name: 'Sofa Cum Bed', category: 'sofas', price: 32999, icon: '🛏️', rating: 4.1 },

  // Modular Kitchen
  { id: 5, name: 'L-Shaped Modular Kitchen', category: 'kitchen', price: 1.85, icon: '🍳', rating: 4.7, unit: 'Lakh', badge: 'Bestseller' },
  { id: 6, name: 'Straight Modular Kitchen', category: 'kitchen', price: 1.25, icon: '🍳', rating: 4.4, unit: 'Lakh' },
  { id: 7, name: 'U-Shaped Premium Kitchen', category: 'kitchen', price: 2.5, icon: '🍳', rating: 4.9, unit: 'Lakh', badge: 'Premium' },
  { id: 8, name: 'Kitchen Tall Unit', category: 'kitchen', price: 35000, icon: '🗄️', rating: 4.2 },

  // School Bags
  { id: 9, name: 'Junior School Bag 30L', category: 'bags', price: 1299, icon: '🎒', rating: 4.6, badge: 'Bestseller' },
  { id: 10, name: 'Waterproof School Bag', category: 'bags', price: 1899, icon: '🎒', rating: 4.7 },
  { id: 11, name: ' trolley Bag with Wheels', category: 'bags', price: 3499, icon: '🧳', rating: 4.3 },
  { id: 12, name: 'Kids Character Backpack', category: 'bags', price: 899, icon: '🎒', rating: 4.5 },

  // Electronics
  { id: 13, name: 'Smart TV 43" 4K', category: 'electronics', price: 25999, icon: '📺', rating: 4.4, badge: 'Deal' },
  { id: 14, name: 'Wireless Earbuds', category: 'electronics', price: 1999, icon: '🎧', rating: 4.2 },
  { id: 15, name: 'Smartphone 128GB', category: 'electronics', price: 14999, icon: '📱', rating: 4.3 },
  { id: 16, name: 'Bluetooth Speaker', category: 'electronics', price: 2499, icon: '🔊', rating: 4.1 },

  // Appliances
  { id: 17, name: 'Front Load Washing Machine', category: 'appliances', price: 32999, icon: '🧺', rating: 4.5 },
  { id: 18, name: 'Double Door Fridge 265L', category: 'appliances', price: 28999, icon: '🧊', rating: 4.4 },
  { id: 19, name: 'Microwave Oven 25L', category: 'appliances', price: 7999, icon: '♨️', rating: 4.2 },
  { id: 20, name: 'Air Fryer 5.5L', category: 'appliances', price: 5499, icon: '🍟', rating: 4.6, badge: 'Deal' },
]

export function formatPrice(product) {
  if (product.unit === 'Lakh') return `₹${product.price} Lakh`
  return `₹${product.price.toLocaleString('en-IN')}`
}
