UPDATE comments
SET content = $2, updated_at = CURRENT_TIMESTAMP
WHERE id = $1
RETURNING *