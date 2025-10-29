INSERT INTO pages (title, slug, parent_id, content, description, edited_by)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *