# Entity Relationship Diagram (ERD)

This diagram visualizes the relational structure of the Jasreanna's Place database.

```mermaid
erDiagram
    users ||--o{ orders : "places"
    categories ||--o{ products : "contains"
    products }o--o{ tags : "tagged with"
    orders ||--o{ order_items : "has"
    products ||--o{ order_items : "included in"
    media ||--o| products : "showcases (optional)"

    users {
        int id PK
        string email UK
        string password_hash
        string role
        datetime created_at
        datetime updated_at
    }

    categories {
        int id PK
        string name UK
        string icon
        string description
        datetime created_at
        datetime updated_at
    }

    products {
        int id PK
        int category_id FK
        string name
        decimal price
        text description
        string image_url
        boolean is_available
        datetime created_at
        datetime updated_at
        datetime deleted_at
    }

    tags {
        int id PK
        string name UK
        datetime created_at
        datetime updated_at
    }

    product_tags {
        int product_id FK, PK
        int tag_id FK, PK
    }

    orders {
        int id PK
        int user_id FK
        decimal total_amount
        string status
        datetime created_at
        datetime updated_at
    }

    order_items {
        int id PK
        int order_id FK
        int product_id FK
        int quantity
        decimal price_at_purchase
        datetime created_at
        datetime updated_at
    }

    media {
        int id PK
        string title
        string type
        string url
        string thumbnail_url
        string span_class
        datetime created_at
        datetime updated_at
    }
```

## Relationship Details

### One-to-Many (1:N)
- **Categories ➔ Products**: A category contains multiple products. If a category is deleted, all its products are removed (**CASCADE**).
- **Users ➔ Orders**: A user can place multiple orders. If a user is deleted, their orders remain but the `user_id` is set to **NULL** (for historical tracking).
- **Orders ➔ OrderItems**: An order consists of multiple line items. Deleting an order removes all its items (**CASCADE**).

### Many-to-Many (M:N)
- **Products ➔ Tags**: Products can have multiple tags (e.g., "Vegan", "Gluten-Free"), and tags can be applied to many products. Managed via `product_tags` junction table.
- **Orders ➔ Products**: Represented by the `order_items` table, which tracks which products were part of which orders, along with quantity and historical price.
