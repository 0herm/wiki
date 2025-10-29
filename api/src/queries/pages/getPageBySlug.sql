SELECT p.*,
       COALESCE(json_agg(t.*) FILTER (WHERE t.id IS NOT NULL), '[]'::json) as tags
FROM pages p
LEFT JOIN page_tags pt ON p.id = pt.page_id
LEFT JOIN tags t ON pt.tag_id = t.id
WHERE p.slug = $1
GROUP BY p.id