package com.joao.tasks.api.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.joao.tasks.api.dto.CollectionDTO;
import com.joao.tasks.domain.entity.Collection;
import com.joao.tasks.services.ICollectionService;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;


@CrossOrigin
@Controller
@Api("Api Tarefas")
@RequestMapping("/api/collections")
public class CollectionController {

    private ICollectionService collectionService;

    public CollectionController(ICollectionService collectionService){
        this.collectionService = collectionService;
    }

    @PostMapping
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    @ApiOperation("Cria uma collection")
    public Collection create(@RequestBody CollectionDTO collectionDTO) {
        return this.collectionService.save(collectionDTO);
    }
}
