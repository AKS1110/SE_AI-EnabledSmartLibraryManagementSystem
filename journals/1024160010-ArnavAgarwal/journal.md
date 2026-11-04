# Weekly Progress Journal

**Student Name:** Arnav Agarwal  
**Roll Number:** 1024160010  
**Project Name:** AI-Enabled Smart Library Management and Resource Recommendation System  

---

## Week 1 (Aug 3 – Aug 9): Project Idea

### Objective
Identify a practical software engineering project that solves a real-world administrative issue while offering enough scope for meaningful development and AI integration.

### Work Done
* **Problem Identification:** Explored the limitations of conventional CRUD-based university management systems, noting that traditional databases require heavy manual data entry and reactive monitoring.
* **Concept Brainstorming:** Brainstormed the initial concept of integrating a multi-agent AI layer with standard application workflows and a MySQL database to automate repetitive tasks.
* **Scope Definition:** Discussed potential focus areas with the team, initially exploring a broad "Smart Campus Management System."
* **Problem Statement:** Defined the core problem statement: educational institutions need a system that moves beyond passive data storage to provide proactive automation, natural-language interactions, and actionable insights.

### Outcome
Established a clear problem statement and a foundational vision for a full-stack, AI-integrated management platform.

### What I Learned
Understanding that AI should act as an enabling technology within a broader, robust software architecture rather than existing as a standalone showcase feature.

---

## Week 2 (Aug 10 – Aug 16): Planning & Presentation

### Objective
Structure the system architecture, select appropriate technologies, and present the initial project proposal to gather feedback.

### Work Done
* **Presentation Design:** Collaborated with the team to structure and design the initial project presentation (PPT).
* **Project Pitch:** Took responsibility for presenting the PPT, outlining the core problem and our proposed AI-integrated solution.
* **Multi-Agent Architecture:** Defined the high-level multi-agent architecture, establishing the roles of three distinct agents: one for user intelligence, one for administrative onboarding, and one for automated monitoring.
* **System Design:** Decided on the modular separation of concerns: Web Dashboards, Application APIs, AI Agent Layer, and MySQL Database.

### Outcome
Successfully pitched the initial project idea, defined the high-level technology stack, and gathered actionable feedback to begin drafting formal documentation.

### What I Learned
Selecting a tech stack is about ensuring seamless interoperability across front-end, backend APIs, databases, and AI components, rather than evaluating tools in isolation.

---

## Week 3 (Aug 17 – Aug 23): Draft of Project Proposal (IEEE Format)

### Objective
Formalize the project idea into a structured, academic IEEE-style project proposal.

### Work Done
* **Proposal Drafting:** Authored the first draft of the project proposal using LaTeX in IEEE conference format.
* **Documentation:** Documented the initial "AI-Powered Smart Campus Management System," detailing the introduction, problem statement, objectives, and expected outcomes.
* **Architectural Diagram:** Designed and coded the high-level architectural block diagram using TikZ within LaTeX to visually represent data flow between the UI, API, Agents, and Database.
* **Agent Definitions:** Formally defined the specific functionalities of the *Campus Intelligence Agent*, *Student Onboarding Agent*, and *Monitoring and Notification Agent*.

### Outcome
Produced a comprehensive initial LaTeX document that clearly mapped out the integration of AI agents with campus data, serving as the technical foundation for our system design.

### What I Learned
Translating an abstract concept into a formal academic paper forces clear thinking regarding system boundaries, interface contracts, and failure modes.

---

## Week 4 (Aug 24 – Aug 30): Proposal Refinement & Pivot to Smart Library System

### Objective
Refine the project scope into a more specific, measurable, and deployable library management system grounded in strong software engineering principles.

### Work Done
* **Scope Pivot & Proposal Rewrite:** Completely rewrote and upgraded the LaTeX proposal, pivoting the project scope from a broad campus system to a highly focused "AI-Enabled Smart Library Management and Resource Recommendation System."
* **Agent Adaptation:** Adapted the AI agent capabilities for the new library context: defining the *Library Intelligence Agent* (for natural-language resource discovery), *Record Onboarding Agent* (for student import validation), and *Library Monitoring Agent* (for overdue tracking and demand analysis).
* **Engineering Foundations:** Added critical software engineering sections to the proposal, specifically focusing on *Higher-Order Goals*, *Time-to-Value* (emphasizing a rapid MVP), and *CI/CD pipelines*.
* **Constraints & Metrics:** Established concrete *Operational Constraints* (e.g., ensuring AI agents operate through controlled REST APIs without direct SQL execution) and *Evaluation Criteria* (e.g., targeting `<10s` resource discovery time and `>90%` duplicate detection precision).

### Outcome
Finalized a highly detailed, engineering-focused project proposal with clear workflows, architectural constraints, and quantifiable evaluation metrics, setting up the team for active repository development.

### What I Learned
Refining a broad idea into a constrained, domain-specific application (like a Smart Library) dramatically improves implementation feasibility and allows for quantifiable evaluation metrics.


---

## Week 5 (Aug 31 – Sep 6): GitHub Pages Documentation & Repository Setup

### Objective
Set up the project's online documentation and improve the repository structure and presentation through GitHub Pages.

### Work Done
* **MkDocs Configuration:** Worked on the MkDocs configuration to establish the project's documentation website and configure the Material theme, navigation, repository information, and documentation features.
* **Documentation Website:** Created and refined the `index.md` file to provide a concise overview of the project, including its objectives, architecture, AI agent layer, database design, API endpoints, evaluation criteria, technology stack, and development approach.
* **System Documentation:** Added project architecture, intelligent search workflow, overdue monitoring workflow, repository structure, and system diagrams to the online documentation.
* **README Documentation:** Created and organized the project's `README.md` file to provide a concise overview of the project, its architecture, technologies, system components, diagrams, APIs, evaluation metrics, and development status.
* **GitHub Pages Deployment:** Configured the repository for automatic documentation deployment through GitHub Pages.
* **GitHub Actions:** Enabled and configured the required GitHub repository Actions settings so that the documentation could be automatically built and deployed whenever changes were pushed to the repository.
* **Documentation Refinement:** Fixed Markdown formatting, code-block rendering, documentation structure, and diagram paths to ensure the project documentation was presented correctly online.

### Outcome
Established a functional GitHub Pages documentation workflow with a structured `index.md`, project README, MkDocs configuration, and automated deployment through GitHub Actions.

### What I Learned
Learned how documentation can be treated as part of the software engineering workflow rather than as a separate final deliverable. I also gained practical experience with MkDocs, GitHub Pages, Markdown documentation, repository configuration, and CI-based documentation deployment.

---

## Week 6 (Sep 7 – Sep 13): Prototype Report & System Documentation

### Objective
Develop the first formal prototype report in LaTeX based on the project proposal and document the implemented prototype architecture, workflows, and system design.

### Work Done
* **Prototype Report Development:** Prepared the first prototype report in LaTeX using the provided UCS503P report format and structure as the reference.
* **Report Structure:** Organized the report into sections covering the project background, problem statement, objectives, methodology, system architecture, system design, prototype implementation, evaluation criteria, scalability, and conclusions.
* **Project-Specific Formatting:** Adapted the report template to the Smart Library Management and Resource Recommendation System while maintaining the required academic report structure.
* **System Diagrams:** Integrated the project's Use Case Diagram and Data Flow Diagrams into the prototype report.
* **DFD Integration:** Added and corrected the Level 0, Level 1, and Level 2 DFD sections, including the corresponding diagram files and captions.
* **Database Design Documentation:** Added the Entity Relationship Diagram to document the relationships between students, employees, assets, books, issuing details, fines, notifications, and search-related records.
* **Activity / Swimlane Diagram:** Added an Activity/Swimlane Diagram to represent the workflow between the student, web interface, backend application, Library Intelligence Agent, MySQL database, and librarian/notification components.
* **Prototype Workflow Documentation:** Documented the core workflows for intelligent resource discovery, record onboarding, and library monitoring and notification.
* **AI Agent Documentation:** Documented the roles and controlled interaction of the Library Intelligence Agent, Record Onboarding Agent, and Library Monitoring Agent.
* **Evaluation Documentation:** Incorporated measurable prototype evaluation criteria covering resource discovery time, duplicate detection precision, overdue detection coverage, recommendation accuracy, API response time, and test coverage.
* **LaTeX Debugging:** Resolved diagram file-path and filename issues during compilation and verified that the required figures were correctly referenced from the report.
* **Report Refinement:** Improved the title page, author information, section organization, figure placement, captions, and overall consistency of the prototype report.

### Outcome
Completed the first structured prototype report containing the project's system architecture, implementation approach, system diagrams, database design, AI-agent workflows, evaluation criteria, and prototype documentation.

### What I Learned
Learned how to convert a software project's evolving implementation and design into a formal technical report. I also gained experience with LaTeX-based academic documentation, figure management, report formatting, and resolving compilation issues involving external diagram files.

---

## Week 7 (Oct 5 – Oct 11): Activity Diagram Design

### Objective

Design activity diagrams to represent the core workflows of the AI-Enabled Smart Library Management and Resource Recommendation System.

### Work Done

* **Workflow Identification:** Identified the major activities involved in library operations, including resource searching, issuing books, returning resources, and overdue monitoring.
* **Activity Diagram Design:** Designed activity diagrams to represent the sequence of actions, decisions, and interactions involved in the core library management workflows.
* **Workflow Representation:** Defined the responsibilities of students, the web interface, backend services, and database operations within the workflows.
* **Diagram Refinement:** Reviewed the diagrams to ensure that decision points, alternate flows, and process transitions were represented clearly.

### Outcome

Completed the activity diagram design for the core library management workflows.

### What I Learned

Learned how activity diagrams represent the dynamic behaviour of a software system and help identify missing steps, decision points, and alternative execution paths before implementation.

---

## Week 8 (Oct 12 – Oct 18): UML Class and Sequence Diagram Design

### Objective

Develop UML class and sequence diagrams to describe the system's static structure and interactions between its components.

### Work Done

* **Class Identification:** Identified the major classes required for the library management system, including Student, Employee, Book, Asset, Issue, Fine, Notification, and the AI agent components.
* **Class Diagram Design:** Defined class attributes, methods, and relationships, including associations, inheritance where applicable, and multiplicities.
* **Sequence Diagram Planning:** Identified the participants involved in the major system workflows, including the Student, Web Interface, Backend REST API, Library Intelligence Agent, and MySQL Database.
* **Interaction Modelling:** Started modelling the sequence of messages exchanged during intelligent searching, resource issuing, circulation, and return operations.

### Outcome

Completed the design of the UML class diagram and progressed with the sequence diagram representing the interactions between system components.

### What I Learned

Understood the difference between structural and behavioural UML diagrams. Class diagrams describe the organization of the system, while sequence diagrams explain how components communicate during execution.

---

## Week 9 (Oct 19 – Oct 25): Sequence Diagram, Frontend Development & ER Modelling

### Objective

Refine the UML sequence diagram, begin frontend implementation, and develop the database Entity Relationship Diagram.

### Work Done

* **Sequence Diagram Completion:** Completed the UML sequence diagram using the major processes identified in the Level 1 DFD.
* **Process Representation:** Represented intelligent resource searching, resource issuing, overdue and fine tracking, and the resource return process.
* **Notification Workflow Refinement:** Corrected the overdue notification workflow so that notifications are sent to the concerned student rather than the librarian. Removed the unnecessary notification-status update interaction from the sequence diagram.
* **Frontend Development:** Started implementing the frontend interface and integrating the initial UI components with the planned application structure.
* **ER Diagram Design:** Designed the Entity Relationship Diagram covering STUDENTS, EMPLOYEE, ASSETS, BOOKS, ISSUING_DETAILS, FINES, NOTIFICATION_QUEUE, and SEARCH_DEMAND_LOGS.
* **Database Relationships:** Defined primary keys, foreign keys, attributes, cardinalities, and relationships between the entities.
* **Database Normalisation:** Reviewed the entity structure to reduce unnecessary duplication and maintain data consistency.

### Outcome

Completed the UML sequence diagram and ER diagram design. Frontend development and component integration progressed to approximately 60%.

### What I Learned

Learned how database relationships and normalisation influence the reliability of application data. Also gained a better understanding of how sequence diagrams can be derived from DFD processes and refined to represent realistic system behaviour.

---

## Week 10 (Oct 26 – Nov 1): Database Design Finalisation & Frontend Integration

### Objective

Finalise the database entity-relationship design, continue frontend development, and prepare functional test cases for the system.

### Work Done

* **ER Diagram Refinement:** Reviewed the relationships between library entities and refined the ER diagram to maintain consistency with the project's database schema.
* **Entity Relationship Validation:** Checked the relationships involving students, issue records, fines, notifications, and search logs.
* **Frontend Development:** Continued implementing the frontend interface and integrating UI components with the planned backend API structure.
* **Component Integration:** Worked on organizing the student-facing and librarian-facing interface components.
* **Functional Testing Preparation:** Started preparing test cases for the major system workflows, including authentication, resource searching, issuing, returning, and fine retrieval.
* **Test Scenario Identification:** Identified normal, invalid-input, and boundary scenarios for functional testing.

### Outcome

Completed the ER diagram and continued frontend implementation. Frontend development remained in progress, while functional test-case preparation was initiated.

### What I Learned

Learned the importance of validating database relationships against actual application workflows. Also understood how test cases should cover both successful operations and failure scenarios.

---

## Week 11 (Nov 2 – Nov 7): Frontend Refinement & Functional Test Preparation

### Objective

Continue frontend integration and complete the preparation of functional test cases for the Smart Library Management System.

### Work Done

* **Frontend Implementation:** Continued developing and refining the frontend components for the library management interface.
* **UI Integration:** Worked on connecting the interface structure with the planned backend services and API endpoints.
* **Student Interface:** Focused on the interface components required for resource discovery, recommendations, and circulation information.
* **Librarian Interface:** Worked on the interface structure for library administration and monitoring-related information.
* **Functional Test Cases:** Continued preparing test cases for the system's core functional requirements.
* **Test Coverage Planning:** Organised test scenarios to cover valid operations, invalid inputs, database interactions, and expected system responses.

### Outcome

Frontend development and component integration progressed, with the Gantt chart indicating approximately 60% completion. Test-case design and preparation reached approximately 80% completion by November 3.

### What I Learned

Learned that frontend development requires careful coordination between UI components, backend API contracts, and database structures. Also gained experience in preparing systematic functional test cases before full system testing.
