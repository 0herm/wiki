INSERT INTO tags (name, color)
VALUES ($1, $2)
RETURNING *