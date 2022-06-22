package com.backend.transport.repository;

import com.backend.transport.model.Transport;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ITransportRepository extends JpaRepository<Transport, Integer> {


    @Query(value = "select *\n" +
            "from transport\n" +
            "where city_end like :startPointKey\n" +
            "  and city_start like :endPointKey\n" +
            "  and ((time_start between :timeStartKey and :timeEndKey)\n" +
            "    and (time_end between :timeStartKey and :timeEndKey))\n" +
            "  and active = 1",
            countQuery = "select *\n" +
                    "from transport\n" +
                    "where city_end like :startPointKey\n" +
                    "  and city_start like :endPointKey\n" +
                    "  and ((time_start between :timeStartKey and :timeEndKey)\n" +
                    "    and (time_end between :timeStartKey and :timeEndKey))\n" +
                    "  and active = 1",
            nativeQuery = true)
    Page<Transport> findAllAndSearch(@Param("startPointKey") String startPointKey,
                                     @Param("endPointKey") String endPointKey,
                                     @Param("timeStartKey") String timeStartKey,
                                     @Param("timeEndKey") String timeEndKey,
                                     Pageable pageable);

    @Query(value = "select *\n" +
            "from transport\n" +
            "where  active = 1",
            countQuery = "select *\n" +
                    "from transport\n" +
                    "where  active = 1",
            nativeQuery = true)
    Page<Transport> findAllByQuery(Pageable pageable);
}
