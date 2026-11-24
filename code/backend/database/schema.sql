-- ============================================================
-- AI-Enabled Smart Library Management System
-- Database Schema
-- ============================================================

-- Create database
CREATE DATABASE IF NOT EXISTS smart_library;

USE smart_library;

-- ============================================================
-- 1. STUDENTS
-- ============================================================

CREATE TABLE students (
    student_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    roll_no VARCHAR(20) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    department VARCHAR(100),
    year INT,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(15),

    status VARCHAR(20) NOT NULL DEFAULT 'ACTIVE',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT chk_student_year
        CHECK (year IS NULL OR year BETWEEN 1 AND 10),

    CONSTRAINT chk_student_status
        CHECK (status IN ('ACTIVE', 'INACTIVE'))
);


-- ============================================================
-- 2. BOOKS
-- ============================================================

CREATE TABLE books (
    book_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    isbn VARCHAR(20) UNIQUE,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255),
    publisher VARCHAR(255),
    category VARCHAR(100),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_books_title (title),
    INDEX idx_books_author (author),
    INDEX idx_books_category (category)
);


-- ============================================================
-- 3. ASSETS
-- Each physical copy of a book is an asset.
-- ============================================================

CREATE TABLE assets (
    asset_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    book_id BIGINT UNSIGNED NOT NULL,

    status VARCHAR(20) NOT NULL DEFAULT 'AVAILABLE',
    location VARCHAR(100),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_assets_book
        FOREIGN KEY (book_id)
        REFERENCES books(book_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT chk_asset_status
        CHECK (status IN ('AVAILABLE', 'ISSUED', 'LOST', 'DAMAGED')),

    INDEX idx_assets_book (book_id),
    INDEX idx_assets_status (status)
);


-- ============================================================
-- 4. LOANS
-- Records when a student borrows a physical asset.
-- ============================================================

CREATE TABLE loans (
    issue_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    student_id BIGINT UNSIGNED NOT NULL,
    asset_id BIGINT UNSIGNED NOT NULL,

    issue_date DATE NOT NULL,
    due_date DATE NOT NULL,
    return_date DATE,

    status VARCHAR(20) NOT NULL DEFAULT 'ISSUED',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_loans_student
        FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT fk_loans_asset
        FOREIGN KEY (asset_id)
        REFERENCES assets(asset_id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT,

    CONSTRAINT chk_loan_status
        CHECK (status IN ('ISSUED', 'RETURNED', 'OVERDUE')),

    CONSTRAINT chk_loan_dates
        CHECK (due_date >= issue_date),

    CONSTRAINT chk_return_date
        CHECK (return_date IS NULL OR return_date >= issue_date),

    INDEX idx_loans_student (student_id),
    INDEX idx_loans_asset (asset_id),
    INDEX idx_loans_status (status),
    INDEX idx_loans_due_date (due_date)
);


-- ============================================================
-- 5. FINES
-- A fine is associated with a loan.
-- ============================================================

CREATE TABLE fines (
    fine_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    issue_id BIGINT UNSIGNED NOT NULL UNIQUE,

    days_late INT NOT NULL DEFAULT 0,
    amount DECIMAL(10, 2) NOT NULL DEFAULT 0.00,

    paid_status VARCHAR(20) NOT NULL DEFAULT 'UNPAID',
    payment_date DATE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_fines_loan
        FOREIGN KEY (issue_id)
        REFERENCES loans(issue_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    CONSTRAINT chk_fine_days
        CHECK (days_late >= 0),

    CONSTRAINT chk_fine_amount
        CHECK (amount >= 0),

    CONSTRAINT chk_paid_status
        CHECK (paid_status IN ('UNPAID', 'PAID')),

    INDEX idx_fines_paid_status (paid_status)
);


-- ============================================================
-- 6. NOTIFICATIONS
-- Notifications shown to students.
-- ============================================================

CREATE TABLE notifications (
    notification_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    student_id BIGINT UNSIGNED NOT NULL,

    type VARCHAR(30) NOT NULL,
    title VARCHAR(150) NOT NULL,
    message TEXT NOT NULL,

    is_read BOOLEAN NOT NULL DEFAULT FALSE,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_notifications_student
        FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,

    INDEX idx_notifications_student (student_id),
    INDEX idx_notifications_read (is_read)
);


-- ============================================================
-- 7. SEARCH LOGS
-- Stores student searches for analytics and AI improvement.
-- ============================================================

CREATE TABLE search_logs (
    search_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    student_id BIGINT UNSIGNED,

    query VARCHAR(500) NOT NULL,
    category_detected VARCHAR(100),

    searched_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_search_logs_student
        FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON UPDATE CASCADE
        ON DELETE SET NULL,

    INDEX idx_search_student (student_id),
    INDEX idx_search_category (category_detected),
    INDEX idx_search_date (searched_at)
);


-- ============================================================
-- DATABASE SCHEMA COMPLETE
-- ============================================================