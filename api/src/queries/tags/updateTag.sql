UPDATE tags
SET name = $2, color = $3, updated_at = CURRENT_TIMESTAMP
WHERE id = $1
RETURNING *