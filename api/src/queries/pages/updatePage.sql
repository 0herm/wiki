UPDATE pages
SET title = $2, slug = $3, parent_id = $4, content = $5, description = $6, edited_by = $7, updated_at = CURRENT_TIMESTAMP
WHERE id = $1
RETURNING *