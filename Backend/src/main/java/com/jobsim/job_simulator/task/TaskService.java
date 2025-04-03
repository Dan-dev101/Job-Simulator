package com.jobsim.job_simulator.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Component;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Component
public class TaskService {
    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<Task> getTask(){
        return taskRepository.findAll(Sort.by(Sort.Direction.ASC, "taskId"));
    }

    public List<Task> getTaskFromTaskId(Long taskId) {
        return taskRepository.findAll().stream()
                .filter(task -> taskId.equals(task.getTaskId()))
                .collect(Collectors.toList());
    }

    public List<Task> getTaskFromDifficulty(String difficulty) {
        return taskRepository.findAll().stream()
                .filter(task -> difficulty.equals(task.getDifficulty()))
                .collect(Collectors.toList());
    }

    public Task addTask(Task task) {
        taskRepository.save(task);
        return task;
    }

    public Task updateTask(Task updatedTask) {
        Optional<Task> existingTask = taskRepository.findByTaskId(updatedTask.getTaskId());

        if (existingTask.isPresent()) {
            Task taskToUpdate = existingTask.get();
            taskToUpdate.setTaskId(updatedTask.getTaskId());
            taskToUpdate.setTaskName(updatedTask.getTaskName());
            taskToUpdate.setDescription(updatedTask.getDescription());
            taskToUpdate.setDifficulty(updatedTask.getDifficulty());
            taskToUpdate.setDeadline(updatedTask.getDeadline());
            taskToUpdate.setLanguage(updatedTask.getLanguage());
            taskToUpdate.setPythonCodeWithBug(updatedTask.getPythonCodeWithBug());
            taskToUpdate.setJsCodeWithBug(updatedTask.getJsCodeWithBug());
            taskToUpdate.setExpectedOutput(updatedTask.getExpectedOutput());

            taskRepository.save(taskToUpdate);
            return taskToUpdate;
        }
        return null;
    }

    public void deleteTask(Long taskId) {
        taskRepository.deleteByTaskId(taskId);
    }

}
