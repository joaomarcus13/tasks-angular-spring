package com.joao.tasks.services;

import java.util.List;

import com.joao.tasks.api.dto.TaskDTO;
import com.joao.tasks.domain.entity.Task;

public interface ITaskServices {

    public Task save(TaskDTO task);

    public void update(Task task, Integer id);

    public void updateMany(List<Task> tasks);

    public void delete(Integer id);

    public void deleteMany(List<Integer> ids);

    public List<Task> findAll();

    public Task findById(Integer id);
}
