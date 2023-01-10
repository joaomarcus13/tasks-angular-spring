package com.joao.tasks.services;

import java.util.List;

import com.joao.tasks.api.dto.CollectionDTO;
import com.joao.tasks.domain.entity.Collection;
import com.joao.tasks.domain.entity.Task;

public interface ICollectionService {
    public Collection save(CollectionDTO collection);

    public void update(Collection collection, Integer id);

    public void addTask(Task task, Integer collectionId);

    public void delete(Integer id);

    public List<Collection> findAll();

    public Collection findById(Integer id);

}
