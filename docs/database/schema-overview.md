# Database Schema Overview

This document provides a detailed breakdown of all tables in the Jasreanna's Place database system.

## Core Design Principles
- **SQLite Core**: Used for local development and production.
- **Normalization**: Data is structured to minimize redundancy.
- **Constraints**: Strict use of Primary Keys, Foreign Keys, and Unique constraints.
- **Auditing**: All tables include `created_at` and `updated_at` timestamps.
- **Soft Deletes**: Implemented on key entities (e.g., `products`) to preserve historical data.

---

## Tables Reference

### 1. `categories`
Stores the high-level grouping for menu items.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | INTEGER | PK, AI | Unique identifier. |
| `name` | STRING | NOT NULL, UNIQUE | Category name (e.g., "Signature Classics"). |
| `icon` | STRING | NULL | Lucide icon identifier. |
| `description` | STRING | NULL | Short summary of the category. |
| `created_at` | DATETIME | DEFAULT current_timestamp | Record creation time. |
| `updated_at` | DATETIME | DEFAULT current_timestamp | Last update time. |

### 2. `products`
Stores individual menu items.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | INTEGER | PK, AI | Unique identifier. |
| `category_id` | INTEGER | FK (categories.id) | Links to parent category. |
| `name` | STRING | NOT NULL | Product name. |
| `price` | DECIMAL | NOT NULL | Item price in BZD. |
| `description` | TEXT | NULL | Detailed description. |
| `image_url` | STRING | NULL | URL to product image. |
| `is_available` | BOOLEAN | DEFAULT true | Availability toggle. |
| `deleted_at` | DATETIME | NULL | Timestamp for soft deletion. |
| `created_at` | DATETIME | DEFAULT current_timestamp | Record creation time. |
| `updated_at` | DATETIME | DEFAULT current_timestamp | Last update time. |

### 3. `users`
System users and administrators.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | INTEGER | PK, AI | Unique identifier. |
| `email` | STRING | NOT NULL, UNIQUE | User's email address. |
| `password_hash` | STRING | NOT NULL | Securely hashed password. |
| `role` | STRING | DEFAULT 'customer' | Permissions level ('customer' or 'admin'). |
| `created_at` | DATETIME | DEFAULT current_timestamp | Record creation time. |
| `updated_at` | DATETIME | DEFAULT current_timestamp | Last update time. |

### 4. `orders`
Tracks customer purchases.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | INTEGER | PK, AI | Unique identifier. |
| `user_id` | INTEGER | FK (users.id), SET NULL | Links to the buyer. |
| `total_amount` | DECIMAL | NOT NULL | Total price of the order. |
| `status` | STRING | DEFAULT 'pending' | Order state (pending, completed, cancelled). |
| `created_at` | DATETIME | DEFAULT current_timestamp | Record creation time. |
| `updated_at` | DATETIME | DEFAULT current_timestamp | Last update time. |

### 5. `media`
Gallery items and promotional assets.
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | INTEGER | PK, AI | Unique identifier. |
| `title` | STRING | NOT NULL | Alt text or title. |
| `type` | STRING | NOT NULL | 'image' or 'video'. |
| `url` | STRING | NOT NULL | Asset URL. |
| `thumbnail_url` | STRING | NULL | Preview image for videos. |
| `span_class` | STRING | NULL | UI layout hints (e.g., Grid spans). |
| `created_at` | DATETIME | DEFAULT current_timestamp | Record creation time. |
| `updated_at` | DATETIME | DEFAULT current_timestamp | Last update time. |

---

## Indexing Strategy
To ensure high performance as the data grows, we've indexed frequently queried columns:
- `products.category_id`: Speeds up menu rendering by category.
- `products.name`: Supports fast product searches.
- `orders.user_id`: Optimizes "Order History" queries for users.
- `orders.status`: Improves administrative dashboard filtering.
