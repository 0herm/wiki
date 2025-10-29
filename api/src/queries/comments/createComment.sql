INSERT INTO comments (page_id, created_by, content)
VALUES ($1, $2, $3)
RETURNING *