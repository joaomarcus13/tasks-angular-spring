package com.joao.tasks;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class TasksApplication {

	@Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
}

	public static void main(String[] args) {
		SpringApplication.run(TasksApplication.class, args);
	}

}
