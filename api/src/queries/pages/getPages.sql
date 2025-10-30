SELECT p.id, p.title, p.parent_id, p.slug,
       EXISTS (SELECT 1 FROM pages WHERE parent_id = p.id) as has_children
FROM pages p
WHERE ($1::integer IS NULL OR p.parent_id = $1)
ORDER BY has_children DESC