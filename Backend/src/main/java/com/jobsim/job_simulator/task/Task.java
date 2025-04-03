package com.jobsim.job_simulator.task;

import jakarta.persistence.*;

@Entity
@Table(name="debugging_tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Uses PostgreSQL’s auto-increment
    @Column(name = "id")
    private Long taskId;
    private String taskName;
    private String description;
    private String difficulty;
    private String deadline;
    private String language;
    private String pythonCodeWithBug;
    private String jsCodeWithBug;
    private String expectedOutput;


    public Task() {
    }

    public Task(Long taskId, String taskName, String description, String difficulty, String deadline, String language, String pythonCodeWithBug, String jsCodeWithBug, String expectedOutput) {
        this.taskId = taskId;
        this.taskName = taskName;
        this.description = description;
        this.difficulty = difficulty;
        this.deadline = deadline;
        this.language = language;
        this.pythonCodeWithBug = pythonCodeWithBug;
        this.jsCodeWithBug = jsCodeWithBug;
        this.expectedOutput = expectedOutput;
    }

    public Long getTaskId() {
        return taskId;
    }

    public void setTaskId(Long id) {
        this.taskId = id;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDifficulty() {
        return difficulty;
    }

    public void setDifficulty(String difficulty) {
        this.difficulty = difficulty;
    }

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(String deadline) {
        this.deadline = deadline;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getPythonCodeWithBug() {
        return pythonCodeWithBug;
    }

    public void setPythonCodeWithBug(String pythonCodeWithBug) {
        this.pythonCodeWithBug = pythonCodeWithBug;
    }

    public String getJsCodeWithBug() {
        return jsCodeWithBug;
    }

    public void setJsCodeWithBug(String jsCodeWithBug) {
        this.jsCodeWithBug = jsCodeWithBug;
    }

    public String getExpectedOutput() {
        return expectedOutput;
    }

    public void setExpectedOutput(String expectedOutput) {
        this.expectedOutput = expectedOutput;
    }
}
