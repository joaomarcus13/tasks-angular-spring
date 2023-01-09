package com.joao.tasks.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.joao.tasks.domain.entity.Task;

public interface TaskRepository extends JpaRepository<Task, Integer> {
}
