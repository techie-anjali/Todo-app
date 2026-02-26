package com.app.todoapp.repository;

import com.app.todoapp.models.Task;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface TaskRepository extends JpaRepository<Task,Long> {//entity type=task ; primary key type=long
    List<Task> findByCompleted(boolean completed);

}
