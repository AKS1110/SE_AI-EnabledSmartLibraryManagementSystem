# AI-Enabled Smart Library Management and Resource Recommendation System

**Author(s):**

- Arnav Agarwal (Roll No: `1024160010`)
- Aradhya Goyal (Roll No: `1024160135`)
- Amanjot Kaur Sidhu (Roll No: `1024160025`)

**Lab Instructor:** Dr. Jeelani Asif

---

## Project Overview

The **AI-Enabled Smart Library Management and Resource Recommendation System** is a web-based library management platform that combines conventional library workflows with a lightweight multi-agent artificial intelligence layer.

The system is designed to manage books and other library resources, student records, issue and return transactions, overdue items, fines, and resource availability. It additionally provides AI-assisted functionality for natural-language resource discovery, record onboarding, library monitoring, and resource-demand analysis.

The system consists of three specialized AI agents:

1. **Library Intelligence Agent:** Interprets natural-language resource requests and provides availability-aware resource discovery and recommendations.
2. **Record Onboarding Agent:** Validates and imports student/member records while detecting likely duplicate records.
3. **Library Monitoring Agent:** Monitors due dates and overdue resources, supports notification workflows, and analyzes resource demand.

The AI agents interact with the application through controlled APIs and tools and are grounded in actual library data stored in a MySQL database.

---

## System Architecture

The system follows a modular 3-tier web architecture integrated with a controlled AI agent layer.

1. **Student / Administrator Web Interface (React.js / Web Client):** Provides interfaces for students and administrators to access library services and management functions.

2. **Backend Application & REST APIs:** Handles authentication, authorization, library workflows, resource management, student records, transactions, and communication with the AI agents.

3. **MySQL Database:** Stores library resources, student/member records, borrowing transactions, due dates, fines, and availability information.

4. **Controlled AI Agent Layer:** Provides the Library Intelligence Agent, Record Onboarding Agent, and Library Monitoring Agent through controlled application APIs and tools.

---

## Installation

To run the project locally:

```bash
# Clone the repository
git clone https://github.com/zzzelicrem/SE_AI-EnabledSmartLibraryManagementSystem.git

# Enter the project directory
cd SE_AI-EnabledSmartLibraryManagementSystem

# Follow the installation instructions provided in the project documentation
