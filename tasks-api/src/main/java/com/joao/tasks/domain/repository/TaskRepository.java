package com.joao.tasks.domain.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.joao.tasks.domain.entity.Collection;
import com.joao.tasks.domain.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Integer> {
    List<Task> findByCollection(Collection id);
}
