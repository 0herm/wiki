INSERT INTO page_versions (page_id, version_number, content_diff, edited_by)
VALUES ($1, $2, $3, $4)
RETURNING *