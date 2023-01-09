package com.joao.tasks.services.implementation;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joao.tasks.api.dto.CollectionDTO;
import com.joao.tasks.domain.entity.Collection;
import com.joao.tasks.domain.repository.CollectionRepository;
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
    public void update(CollectionDTO collection, Integer id) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public void delete(Integer id) {
        // TODO Auto-generated method stub
        
    }

    @Override
    public List<Collection> findAll() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Collection findById(Integer id) {
        // TODO Auto-generated method stub
        return null;
    }

    public Collection convertToEntity(CollectionDTO collectionDTO){
        Collection collection = modelMapper.map(collectionDTO, Collection.class);
        collection.setTasks(new ArrayList<>());
        collection.setCreatedDate(LocalDateTime.now());
        return collection;
    }
    
}
