package com.joao.tasks.api.controllers;

import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

import com.joao.tasks.ApiErrors;
import com.joao.tasks.exceptions.ResourceNotFound;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;

@RestControllerAdvice
public class AppControllerAdvice {

    @ExceptionHandler(ResourceNotFound.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ApiErrors handleResourseNotFound(ResourceNotFound ex) {
        return new ApiErrors(ex.getMessage());
    }

    @ExceptionHandler(ResponseStatusException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiErrors handleResponseStatusException(ResponseStatusException ex) {
        return new ApiErrors(ex.getReason());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ApiErrors handleMethodNotValidException(MethodArgumentNotValidException ex) {
        List<String> errors = ex.getBindingResult().getAllErrors()
                .stream()
                .map(erro -> erro.getDefaultMessage())
                .collect(Collectors.toList());
        return new ApiErrors(errors);
    }

}
