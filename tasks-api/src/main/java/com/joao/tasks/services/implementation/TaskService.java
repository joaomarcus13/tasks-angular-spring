package com.joao.tasks.services.implementation;

import java.time.LocalDateTime;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.joao.tasks.api.dto.TaskDTO;
import com.joao.tasks.domain.entity.Collection;
import com.joao.tasks.domain.entity.Task;
import com.joao.tasks.domain.repository.TaskRepository;
import com.joao.tasks.exceptions.ResourceNotFound;
import com.joao.tasks.services.ITaskServices;
import com.joao.tasks.utils.Status;

@Service
public class TaskService implements ITaskServices {

    private TaskRepository taskRepository;
    private CollectionService collectionService;

    @Autowired
    private ModelMapper modelMapper;

    public TaskService(
        TaskRepository taskRepository, 
        CollectionService collectionService
        ) {
        this.taskRepository = taskRepository;
        this.collectionService = collectionService;
    }

    @Override
    public Task save(TaskDTO taskdDto) {
        Task task = convertToEntity(taskdDto);
        Task savedTask = this.taskRepository.save(task);
        collectionService.addTask(savedTask, taskdDto.getCollectionId());
        return savedTask;
    }

    @Override
    public void update(Task task, Integer id) {
        Task foundTask = this.taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Tarefa não encontrada"));
        task.setId(foundTask.getId());
        this.taskRepository.save(task);
    }

    @Override
    public void updateMany(List<Task> tasks) {
        try {
            this.taskRepository.saveAll(tasks);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Parâmetros inválidos");
        }
    }

    @Override
    public void delete(Integer id) {
        Task task = this.taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Tarefa não encontrada"));
        this.taskRepository.delete(task);
    }

    @Override
    public void deleteMany(List<Integer> ids) {
        try {
            this.taskRepository.deleteAllById(ids);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Parâmetros inválidos");
        }
    }

    @Override
    public List<Task> findAll() {
        try {
            return taskRepository.findAll();
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }

    @Override
    public Task findById(Integer id) {
        return this.taskRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Tarefa não encontrada"));
    }

    public Task convertToEntity(TaskDTO taskDTO){
        Task task = modelMapper.map(taskDTO, Task.class);
        task.setCreatedDate(LocalDateTime.now());
        task.setStatus(Status.OPEN);
        return task;
    }

}
