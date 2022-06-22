package com.backend.transport.service.impl;

import com.backend.transport.model.City;
import com.backend.transport.model.Transport;
import com.backend.transport.repository.ICityRepository;
import com.backend.transport.service.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityService implements ICityService {
    @Autowired
    ICityRepository iCityRepository;
    @Override
    public List<City> getListCity() {
        return this.iCityRepository.findAll();
    }
}
