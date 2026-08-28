# Engineering Journal: System Architecture & Design

### August 19 – 21, 2026: Use Case Diagram Design
* **Actor & Agent Identification**: Defined the primary human actors (Student, Librarian) and specialized AI assistants (Campus Intelligence Agent, Student Onboarding Agent, Monitoring & Notification Agent).
* **Use Case Mapping**: Designed the core use cases across library operations, including asset searching, catalog/student onboarding, fine calculation, natural language querying, and demand monitoring.
* **Relationship Specification**: Modeled system dependencies using standard UML relationships, establishing `<<include>>` for mandatory sub-processes and `<<extend>>` for conditional workflows like fine calculations and recommendation triggers.

---

### August 24 – 25, 2026: Level 0 DFD (Context Diagram)
* **System Boundary Definition**: Modeled the high-level boundary for the centralized `AI-Enabled Library Management System`.
* **External Entity & Flow Mapping**: Established all primary directional data inflows and outflows between the external entities (Students, Librarian, and the three AI agents) and the core system.

---

### August 26, 2026: Level 1 DFD (Process Decomposition)
* **Core Process Decomposition**: Broken down the central system into four main operational processes:
  * `1.0 Search & Intelligent Assistance`
  * `2.0 Records & Ingestion`
  * `3.0 Circulation & Fine Tracking`
  * `4.0 Monitoring & Alert Generation`
* **Data Store Architecture**: Defined data persistence layers to handle records cleanly:
  * `D1: Library Catalog & User Database`
  * `D2: Circulation & Fines Store`
  * `D3: Notification Queue`
* **Data Flow Routing**: Mapped input and output flows between external actors, processes, and persistent data stores.

---

### August 27, 2026: Level 2 DFD (Process 1.0 Decomposition)
* **Sub-process Breakdown**: Detailed `Process 1.0 (Search & Intelligent Assistance)` into its internal sub-routines:
  * `1.1 Parse Query & Extract Intent`
  * `1.2 Query Catalog & Rank Results`
  * `1.3 Generate Context Recommendations`
* **Architecture-Agnostic Design**: Structured query handling, intent parsing, and recommendation pipelines to support both conversational chatbot flows and automated background agent lookups.
