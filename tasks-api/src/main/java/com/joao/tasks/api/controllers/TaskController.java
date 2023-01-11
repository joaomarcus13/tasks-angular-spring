package com.joao.tasks.api.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.joao.tasks.api.dto.TaskDTO;
import com.joao.tasks.domain.entity.Task;
import com.joao.tasks.services.ITaskServices;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin
@Controller
@Api("Api Tarefas")
@RequestMapping("/api/tasks")
public class TaskController {

    private ITaskServices taskService;

    public TaskController(ITaskServices taskService) {
        this.taskService = taskService;
    }

    @PostMapping
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    @ApiOperation("Cria uma tarefa")
    public Task create(@RequestBody @Valid TaskDTO taskdDto) {
        return this.taskService.save(taskdDto);
    }

    @GetMapping
    @ResponseBody
    @ApiOperation("Lista todas as tarefas")
    public List<Task> index() {
        return this.taskService.findAll();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @ApiOperation("Deleta uma tarefa")
    public void delete(@PathVariable Integer id) {
        this.taskService.delete(id);
    }

    @DeleteMapping("/delete-multiple")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @ApiOperation("Deleta multiplas tarefas")
    public void deleteMany(@RequestParam("ids") List<Integer> ids) {
        this.taskService.deleteMany(ids);
    }

    @GetMapping("/{id}")
    @ResponseBody
    @ApiOperation("Busca tarefa pelo id")
    public Task getTask(@PathVariable Integer id) {
        Task task = this.taskService.findById(id);
        return task;
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @ApiOperation("Atualiza uma tarefa")
    public void update(@PathVariable Integer id, @RequestBody @Valid Task task) {
        this.taskService.update(task, id);
    }

    @PutMapping("/update-multiple")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @ApiOperation("Atualiza multiplas tarefas")
    public void updateMany(@RequestBody List<Task> tasks) {
        this.taskService.updateMany(tasks);
    }

    @GetMapping("/collection/{id}")
    @ResponseBody
    public List<Task> getTasksByCollection(@PathVariable Integer id){
        return this.taskService.findByCollection(id);
    }

}
