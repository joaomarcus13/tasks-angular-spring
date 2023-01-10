package com.joao.tasks.api.dto;

import java.text.ParseException;
import java.time.LocalDateTime;
import java.util.ArrayList;

import javax.validation.constraints.NotEmpty;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.joao.tasks.domain.entity.Collection;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class CollectionDTO {
    @NotEmpty(message = "Titulo não pode ser vazio")
    private String title;

}
