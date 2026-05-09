import type { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('order_items').del();
  await knex('orders').del();
  await knex('product_tags').del();
  await knex('tags').del();
  await knex('products').del();
  await knex('categories').del();
  await knex('users').del();
  await knex('media').del();

  // Inserts seed entries
  const [catClassics, catTrendy, catSpecialty, catFood] = await knex('categories').insert([
    { name: 'Signature Classics', icon: 'Coffee', description: 'Crafted with premium, ethically sourced beans.' },
    { name: 'Trendy & Cold', icon: 'CupSoda', description: 'Indulgent, Instagram-worthy beverages.' },
    { name: 'Specialty', icon: 'Leaf', description: 'Vibrant and high-quality ingredients.' },
    { name: 'Food & Pastries', icon: 'CakeSlice', description: 'Sourced from talented local Belizean bakeries.' }
  ]).returning('id');

  const catClassicsId = typeof catClassics === 'number' ? catClassics : catClassics.id;
  const catTrendyId = typeof catTrendy === 'number' ? catTrendy : catTrendy.id;
  const catSpecialtyId = typeof catSpecialty === 'number' ? catSpecialty : catSpecialty.id;
  const catFoodId = typeof catFood === 'number' ? catFood : catFood.id;

  await knex('products').insert([
    { category_id: catClassicsId, name: 'Signature Latte', price: 10.00, description: '12-ounce classic espresso with steamed milk' },
    { category_id: catClassicsId, name: 'Classic Cappuccino', price: 10.00, description: '12-ounce espresso with equal parts steamed milk and foam' },
    { category_id: catTrendyId, name: 'Trendy Frappé', price: 14.00, description: 'Blended iced coffee beverage with whipped cream' },
    { category_id: catTrendyId, name: 'Cold Brew', price: 14.00, description: 'Smooth, slow-steeped cold coffee' },
    { category_id: catSpecialtyId, name: 'Matcha Latte', price: 16.00, description: 'Premium green tea powder with steamed milk' },
    { category_id: catFoodId, name: 'Assorted Pastries', price: 7.00, description: 'Freshly baked daily selection' },
    { category_id: catFoodId, name: 'Light Bites', price: 7.00, description: 'Perfect snacks to go with your drink' }
  ]);

  await knex('media').insert([
    { title: 'Coffee Beans', type: 'image', url: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop', span_class: 'md:col-span-2 md:row-span-2' },
    { title: 'Cafe Interior', type: 'image', url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop', span_class: 'md:col-span-1 md:row-span-1' },
    { title: 'Barista Craft', type: 'video', url: 'https://assets.mixkit.co/videos/41859/41859-1080.mp4', thumbnail_url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1974&auto=format&fit=crop' }
  ]);

  await knex('users').insert([
    { email: 'admin@jasreannasplace.bz', password_hash: 'hashed_password_here', role: 'admin' }
  ]);
}
