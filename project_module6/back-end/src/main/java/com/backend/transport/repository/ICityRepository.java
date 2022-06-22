package com.backend.transport.repository;

import com.backend.transport.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICityRepository extends JpaRepository<City,Integer> {
}
