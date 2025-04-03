package com.jobsim.job_simulator.task;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    void deleteByTaskId(Long taskId);
    Optional<Task> findByTaskId(Long taskId);
}
