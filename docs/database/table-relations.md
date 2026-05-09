# Table Relationships & Ownership

This document details the architectural connections between entities and how data flows through the system.

## Ownership Hierarchy
1. **Users** own **Orders**.
2. **Orders** own **OrderItems**.
3. **Categories** own **Products**.
4. **Products** and **Tags** share ownership via **ProductTags**.

---

## Detailed Relationships

### 1. Categories ➔ Products (1:N)
- **Type**: One-to-Many
- **Dependency**: Products depend on Categories.
- **FK Constraint**: `products.category_id` references `categories.id`.
- **Behavior**: `ON DELETE CASCADE`. If a category is removed, its associated products are also removed to prevent orphaned records in the menu.

### 2. Products ➔ Tags (M:N)
- **Type**: Many-to-Many
- **Implementation**: Junction table `product_tags`.
- **FK Constraints**:
    - `product_tags.product_id` references `products.id`.
    - `product_tags.tag_id` references `tags.id`.
- **Behavior**: `ON DELETE CASCADE` on both sides. Deleting a product removes its tag associations; deleting a tag removes its associations with all products.

### 3. Users ➔ Orders (1:N)
- **Type**: One-to-Many (Optional)
- **Dependency**: Orders can exist without a user (Guest Checkout).
- **FK Constraint**: `orders.user_id` references `users.id`.
- **Behavior**: `ON DELETE SET NULL`. If a user account is deleted, the order remains in the database for financial reporting, but the personal association is removed.

### 4. Orders ➔ Products (M:N via OrderItems)
- **Type**: Many-to-Many with attributes.
- **Implementation**: Junction table `order_items`.
- **Attributes**: Tracks `quantity` and `price_at_purchase` (to protect against future price changes).
- **FK Constraints**:
    - `order_items.order_id` references `orders.id`.
    - `order_items.product_id` references `products.id`.
- **Behavior**:
    - `order_id`: `ON DELETE CASCADE`.
    - `product_id`: `ON DELETE SET NULL`. If a product is removed from the catalog, the historical order record still shows that *something* was bought at that price.

---

## Data Flow Diagrams

### Order Creation Flow
1. User selects `Products`.
2. System creates an entry in `orders` with `total_amount`.
3. System creates multiple entries in `order_items` copying current `products.price` to `price_at_purchase`.
4. Inventory/Availability remains unchanged (unless stock tracking is added later).

### Menu Rendering Flow
1. Fetch all `categories`.
2. For each category, fetch associated `products` where `deleted_at` IS NULL.
3. Join with `tags` via `product_tags` for labels like "New" or "Hot".
