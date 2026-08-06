-- langs/sql/queries.sql
-- Sample queries utilizing CTEs, window functions, and joins.

-- 1. Retrieve the top 5 spending users and their total order count
WITH UserSpending AS (
    SELECT 
        o.user_id,
        COUNT(o.id) AS total_orders,
        SUM(o.total_amount) AS total_spent
    FROM orders o
    WHERE o.order_status = 'delivered'
    GROUP BY o.user_id
)
SELECT 
    u.id,
    u.username,
    u.email,
    us.total_orders,
    us.total_spent
FROM UserSpending us
JOIN users u ON u.id = us.user_id
ORDER BY us.total_spent DESC
LIMIT 5;

-- 2. Get product stock levels along with their category names and order counts
SELECT 
    p.id,
    p.name AS product_name,
    c.name AS category_name,
    p.stock_quantity,
    COUNT(oi.id) AS times_ordered
FROM products p
LEFT JOIN categories c ON p.category_id = c.id
LEFT JOIN order_items oi ON p.id = oi.product_id
GROUP BY p.id, p.name, c.name, p.stock_quantity
ORDER BY times_ordered DESC;

-- 3. Calculate running total of sales partitioned by category and ordered by order date
SELECT 
    o.id AS order_id,
    p.name AS product_name,
    c.name AS category_name,
    oi.quantity * oi.unit_price AS item_total,
    o.created_at AS order_date,
    SUM(oi.quantity * oi.unit_price) OVER (
        PARTITION BY c.id 
        ORDER BY o.created_at
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_category_sales
FROM order_items oi
JOIN orders o ON oi.order_id = o.id
JOIN products p ON oi.product_id = p.id
JOIN categories c ON p.category_id = c.id
WHERE o.order_status != 'cancelled';
