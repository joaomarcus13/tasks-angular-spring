package com.joao.tasks.api.dto;

import java.time.LocalDateTime;

import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TaskDTO {
    private Integer id;
    @NotEmpty(message = "Descrição não pode ser vazia")
    private String description;
    private Integer collectionId;
    private LocalDateTime targetDate;
}
