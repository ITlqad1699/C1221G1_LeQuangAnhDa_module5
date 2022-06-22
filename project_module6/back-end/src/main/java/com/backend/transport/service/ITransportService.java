package com.backend.transport.service;

import com.backend.transport.model.Transport;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ITransportService {
    Page<Transport> getList(Pageable pageable);

    Page<Transport> getListQuery(Pageable pageable);

    Page<Transport> getListAndSearch(String startPointKey, String endPointKey, String timeStartKey, String timeEndKey, Pageable pageable);

    Transport findById(Integer id);

    void save(Transport transport);
}
