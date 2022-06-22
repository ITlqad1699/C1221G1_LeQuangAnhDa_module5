package com.backend.transport.service.impl;

import com.backend.transport.model.Transport;
import com.backend.transport.repository.ITransportRepository;
import com.backend.transport.service.ITransportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class TransportService implements ITransportService {
    @Autowired
    ITransportRepository iTransportRepository;

    @Override
    public Page<Transport> getList(Pageable pageable) {
        return this.iTransportRepository.findAll(pageable);
    }

    @Override
    public Page<Transport> getListQuery(Pageable pageable) {
        return this.iTransportRepository.findAllByQuery(pageable);
    }

    @Override
    public Page<Transport> getListAndSearch(String startPointKey,
                                            String endPointKey,
                                            String timeStartKey,
                                            String timeEndKey,
                                            Pageable pageable) {
        return this.iTransportRepository.findAllAndSearch(startPointKey,
                endPointKey, "%" + timeStartKey + "%", "%" + timeEndKey + "%", pageable);
    }

    @Override
    public Transport findById(Integer id) {
        return this.iTransportRepository.findById(id).orElse(null);
    }

    @Override
    public void save(Transport transport) {
        this.iTransportRepository.save(transport);
    }
}
