package com.joao.tasks.domain.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.joao.tasks.domain.entity.Collection;;

public interface CollectionRepository extends JpaRepository<Collection, Integer> {
    
}
