INSERT INTO students
(roll_no, name, department, year, email, phone, status)
VALUES
('1024160010', 'Aarav Sharma', 'Computer Science', 3, 'aarav.sharma@thapar.edu', '9876500010', 'ACTIVE'),
('1024160011', 'Priya Singh', 'Information Technology', 3, 'priya.singh@thapar.edu', '9876500011', 'ACTIVE'),
('1024160012', 'Rahul Kumar', 'Computer Science', 2, 'rahul.kumar@thapar.edu', '9876500012', 'ACTIVE'),
('1024160013', 'Simran Kaur', 'Electronics', 4, 'simran.kaur@thapar.edu', '9876500013', 'ACTIVE'),
('1024160014', 'Arjun Mehta', 'Mechanical Engineering', 2, 'arjun.mehta@thapar.edu', '9876500014', 'ACTIVE');
-- =========================
-- BOOKS
-- =========================

INSERT INTO books
(isbn, title, author, publisher, category)
VALUES
('9780132350884', 'Clean Code', 'Robert C. Martin', 'Prentice Hall', 'Software Engineering'),
('9780073523323', 'Database System Concepts', 'Abraham Silberschatz', 'McGraw-Hill', 'Database'),
('9780131103627', 'The C Programming Language', 'Brian W. Kernighan', 'Prentice Hall', 'Programming'),
('9780262046305', 'Introduction to Algorithms', 'Thomas H. Cormen', 'MIT Press', 'Algorithms'),
('9780134494166', 'Artificial Intelligence: A Modern Approach', 'Stuart Russell', 'Pearson', 'Artificial Intelligence'),
('9780262035613', 'Deep Learning', 'Ian Goodfellow', 'MIT Press', 'Artificial Intelligence'),
('9780134685991', 'Effective Java', 'Joshua Bloch', 'Addison-Wesley', 'Programming'),
('9780321573513', 'Algorithms', 'Robert Sedgewick', 'Addison-Wesley', 'Algorithms'),
('9780133594140', 'Computer Networking', 'James Kurose', 'Pearson', 'Computer Networks'),
('9780132126953', 'Operating System Concepts', 'Abraham Silberschatz', 'Wiley', 'Operating Systems');

-- =========================
-- ASSETS / PHYSICAL COPIES
-- =========================

INSERT INTO assets
(book_id, status, location)
VALUES
(1, 'AVAILABLE', 'Shelf A1'),
(1, 'AVAILABLE', 'Shelf A1'),
(1, 'ISSUED', 'Shelf A1'),

(2, 'AVAILABLE', 'Shelf B1'),
(2, 'ISSUED', 'Shelf B1'),
(2, 'AVAILABLE', 'Shelf B1'),

(3, 'AVAILABLE', 'Shelf C1'),
(3, 'AVAILABLE', 'Shelf C1'),

(4, 'ISSUED', 'Shelf D1'),
(4, 'AVAILABLE', 'Shelf D1'),

(5, 'AVAILABLE', 'Shelf E1'),
(5, 'AVAILABLE', 'Shelf E1'),
(5, 'ISSUED', 'Shelf E1'),

(6, 'AVAILABLE', 'Shelf E2'),
(6, 'AVAILABLE', 'Shelf E2'),

(7, 'AVAILABLE', 'Shelf F1'),
(7, 'ISSUED', 'Shelf F1'),

(8, 'AVAILABLE', 'Shelf D2'),

(9, 'AVAILABLE', 'Shelf G1'),
(9, 'AVAILABLE', 'Shelf G1'),

(10, 'AVAILABLE', 'Shelf H1'),
(10, 'ISSUED', 'Shelf H1');

-- =========================
-- LOANS
-- =========================

INSERT INTO loans
(student_id, asset_id, issue_date, due_date, return_date, status)
VALUES
(1, 3, '2026-09-01', '2026-09-15', NULL, 'OVERDUE'),
(2, 5, '2026-09-05', '2026-09-19', NULL, 'ISSUED'),
(3, 9, '2026-08-20', '2026-09-03', NULL, 'OVERDUE'),
(4, 13, '2026-09-07', '2026-09-21', NULL, 'ISSUED'),
(5, 17, '2026-08-15', '2026-08-29', '2026-08-28', 'RETURNED');

-- =========================
-- FINES
-- =========================

INSERT INTO fines
(issue_id, days_late, amount, paid_status, payment_date)
VALUES
(1, 1, 10.00, 'UNPAID', NULL),
(3, 6, 60.00, 'UNPAID', NULL);

-- =========================
-- NOTIFICATIONS
-- =========================

INSERT INTO notifications
(student_id, type, title, message, is_read)
VALUES
(1, 'OVERDUE', 'Book Overdue',
 'Your borrowed book is overdue. Please return it as soon as possible.',
 FALSE),

(1, 'FINE', 'Outstanding Fine',
 'You currently have an unpaid library fine of Rs. 10.00.',
 FALSE),

(2, 'REMINDER', 'Return Reminder',
 'Your borrowed book is due soon.',
 FALSE),

(3, 'OVERDUE', 'Book Overdue',
 'Your borrowed book is overdue. Please return it as soon as possible.',
 FALSE),

(4, 'REMINDER', 'Return Reminder',
 'Please remember to return your borrowed book before the due date.',
 TRUE);

-- =========================
-- SEARCH LOGS
-- =========================

INSERT INTO search_logs
(student_id, query, category_detected)
VALUES
(1, 'Find available AI books', 'Artificial Intelligence'),
(1, 'books about databases', 'Database'),
(2, 'Show me programming books', 'Programming'),
(3, 'Find algorithms books', 'Algorithms'),
(4, 'computer networking books', 'Computer Networks'),
(5, 'operating system books', 'Operating Systems');