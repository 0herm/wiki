-- Insert dummy tags
INSERT INTO tags (id, name, color) VALUES
(1, 'JavaScript', '#f7df1e'),
(2, 'React', '#61dafb'),
(3, 'Database', '#336791'),
(4, 'Tutorial', '#ff6b6b');

-- Insert dummy pages
INSERT INTO pages (id, title, slug, parent_id, content, description, edited_by) VALUES
(1, 'Home', 'home', NULL, '# Welcome to the Wiki\n\nThis is the home page.', 'Main page of the wiki', 'admin'),
(2, 'About', 'about', NULL, '# About\n\nThis wiki is for documentation.', 'About the wiki', 'admin'),
(3, 'Tutorials', 'tutorials', NULL, '# Tutorials\n\nCollection of tutorials.', 'Tutorial section', 'admin'),
(4, 'JS Basics', 'js-basics', 3, '# JavaScript Basics\n\nLearn the fundamentals of JS.', 'Basic JS tutorial', 'admin'),
(5, 'React Guide', 'react-guide', 3, '# React Guide\n\nIntroduction to React.', 'React tutorial', 'admin');

-- Associate tags with pages
INSERT INTO page_tags (page_id, tag_id) VALUES
(3, 4), -- Tutorials -> Tutorial
(4, 1), -- JS Basics -> JavaScript
(4, 4), -- JS Basics -> Tutorial
(5, 2), -- React Guide -> React
(5, 4); -- React Guide -> Tutorial

-- Insert dummy comments
INSERT INTO comments (page_id, created_by, content) VALUES
(1, 'user1', 'Great home page!'),
(3, 'user2', 'Looking forward to more tutorials.'),
(4, 'user3', 'This JS tutorial is helpful.');

-- Insert dummy page versions
INSERT INTO page_versions (page_id, version_number, content_diff, edited_by) VALUES
(1, 1, 'Initial version', 'admin'),
(2, 1, 'Initial version', 'admin'),
(3, 1, 'Initial version', 'admin'),
(4, 1, 'Initial version', 'admin'),
(5, 1, 'Initial version', 'admin');