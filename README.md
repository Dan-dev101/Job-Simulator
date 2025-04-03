# Job Simulator

Welcome to the **Job Simulator** project! This web application allows users to complete tasks with deadlines, mimicking a real-world job environment. The app consists of a front-end built with HTML, CSS, and JavaScript, and a back-end powered by Java Spring Boot.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Installation Instructions](#installation-instructions)
4. [Usage](#usage)
5. [Project Structure](#project-structure)
6. [Contributing](#contributing)
7. [License](#license)

## Project Overview

The **Job Simulator** lets users submit tasks, track deadlines, and interact with a simulated work environment. It is split into a **front-end** that handles the user interface and a **back-end** that manages data, tasks, and deadlines.

### Screenshots (Add images later)
![Screenshot of the Job Simulator](./images/screenshot1.png)
*Note: Insert your own images at the appropriate places.*

## Technologies Used
- **Frontend:**
  - HTML
  - CSS
  - JavaScript
  - [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (for local server development)

- **Backend:**
  - Java Spring Boot
  - Spring Data JPA
  - PostgreSQL (or another database)
  - Maven for dependency management

## Installation Instructions

Follow the instructions below to get the project running locally.

### Prerequisites

1. **Java Development Kit (JDK)** - Ensure you have [JDK 17 or higher](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html) installed.
2. **Maven** - For dependency management. You can download it [here](https://maven.apache.org/).
3. **PostgreSQL** (or any preferred database) for the backend.
4. **Visual Studio Code (VSCode)** - For the frontend, or any text editor/IDE you prefer.

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Dan-dev101/Job-Simulator.git
   ```

2. **Backend setup:**
   - Navigate to the Backend directory in your project.
   - Install the necessary dependencies with Maven:
     ```bash
     mvn clean install
     ```
   - Run the Spring Boot application:
     ```bash
     mvn spring-boot:run
     ```

3. **Frontend setup:**
   - Navigate to the Frontend directory.
   - Open the index.html file in your browser to start the application, or use a local server for testing.

## Usage
1. **Start the Backend:**
   - Run the backend Spring Boot application (as mentioned in the installation section).

2. **Start the Frontend:**
   - Open the index.html file in a browser or use a local server like Live Server in VSCode.

3. **Access the Application:**
   - Go to http://localhost:8080 in your browser (or the port number configured in your Spring Boot application).

## Project Structure
Here is a quick overview of the project directory structure:

```
Job-Simulator/
│
├── Backend/
│   ├── src/                  # Backend source code
│   ├── pom.xml               # Maven configuration file
│   └── application.properties # Application configuration
│
├── Frontend/
│   ├── index.html            # Main HTML page
│   ├── script.js             # JavaScript for the frontend logic
│   ├── styles.css            # CSS styles for the frontend
│   └── fonts/                # Font files
│
├── .gitignore                # Git ignore file
├── .gitmodules               # Git submodules if any
├── README.md                 # Project documentation
└── LICENSE                   # License file
```

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to your branch (`git push origin feature-branch`).
6. Open a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
