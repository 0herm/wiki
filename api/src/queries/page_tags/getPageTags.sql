SELECT t.* FROM tags t
JOIN page_tags pt ON t.id = pt.tag_id
WHERE pt.page_id = $1
ORDER BY t.name