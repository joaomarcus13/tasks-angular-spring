package com.joao.tasks.services.implementation;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.joao.tasks.api.dto.CollectionDTO;
import com.joao.tasks.domain.entity.Collection;
import com.joao.tasks.domain.entity.Task;
import com.joao.tasks.domain.repository.CollectionRepository;
import com.joao.tasks.exceptions.ResourceNotFound;
import com.joao.tasks.services.ICollectionService;

@Service
public class CollectionService implements ICollectionService {

    private CollectionRepository collectionRepository;

    @Autowired
    private ModelMapper modelMapper;

    public CollectionService(CollectionRepository collectionRepository){
        this.collectionRepository = collectionRepository;
    }

    @Override
    public Collection save(CollectionDTO collectionDTO) {
        Collection collection =  convertToEntity(collectionDTO);
        Collection collectionSaved = collectionRepository.save(collection);
        System.out.println(collectionSaved);
        return collectionSaved;
    }

    @Override
    public void update(Collection collection, Integer id) {
        Collection foundCollection = this.collectionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Collection não encontrada"));
        collection.setId(foundCollection.getId());
        this.collectionRepository.save(collection);
    }

    @Override
    public void addTask(Task task, Integer collectionId) {
        Collection collection = this.findById(collectionId);
        List tasks = collection.getTasks();
        tasks.add(task);
        collection.setTasks(tasks);
        this.collectionRepository.save(collection);
    }

    @Override
    public void delete(Integer id) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public List<Collection> findAll() {
            return collectionRepository.findAll();
    }

    @Override
    public Collection findById(Integer id) {
        return 
        this.collectionRepository.findById(id).orElseThrow(() -> new ResourceNotFound("collection não encontrada"));
    }

    public Collection convertToEntity(CollectionDTO collectionDTO){
        Collection collection = modelMapper.map(collectionDTO, Collection.class);
        collection.setTasks(new ArrayList<>());
        collection.setCreatedDate(LocalDateTime.now());
        return collection;
    }

    public CollectionDTO convertToDto(Collection collection){
        CollectionDTO collectionDTO = modelMapper.map(collection, CollectionDTO.class);
        return collectionDTO;

    }


    
}
