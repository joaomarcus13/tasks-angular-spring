package com.joao.tasks.services;

import java.util.List;

import com.joao.tasks.api.dto.CollectionDTO;
import com.joao.tasks.domain.entity.Collection;

public interface ICollectionService {
    public Collection save(CollectionDTO collection);

    public void update(CollectionDTO collection, Integer id);

    public void delete(Integer id);

    public List<Collection> findAll();

    public Collection findById(Integer id);

}
