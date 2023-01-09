package com.joao.tasks.domain.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

import com.joao.tasks.utils.Status;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    @Column(name = "description")
    @NotEmpty(message = "Campo descricao é obrigatório")
    @Length(min = 3, max = 300)
    private String description;

    @Column(name = "created_date")
    private LocalDateTime createdDate;

    @Column(name = "target_date")
    private LocalDateTime targetDate;

    @Column(name = "done_date")
    private LocalDateTime doneDate;

    @Column(name = "status")
    private Status status;

    @ManyToOne(optional = true)
    private Collection collection;

}