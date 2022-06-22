package com.backend.transport.rest;

import com.backend.transport.dto.TransportDto;
import com.backend.transport.model.City;
import com.backend.transport.model.Transport;
import com.backend.transport.service.ICityService;
import com.backend.transport.service.ITransportService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/transport")
@CrossOrigin(origins = "http://localhost:4200")
public class TransportRestController {
    @Autowired
    ITransportService iTransportService;

    @Autowired
    ICityService iCityService;

    @GetMapping("/list")
    public ResponseEntity<Page<Transport>> getPageTransport(@PageableDefault(value = 5) Pageable pageable) {
        Page<Transport> transports = this.iTransportService.getListQuery(pageable);
        if (!transports.hasContent()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(transports, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Transport> findById(@PathVariable("id") Integer id) {
        Transport transport = this.iTransportService.findById(id);
        if (transport == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(transport, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteTransport(@PathVariable("id") Integer id) {
        Transport transport = this.iTransportService.findById(id);

        System.out.println(transport);
        if (transport == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        transport.setActive(0);
        this.iTransportService.save(transport);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/cities")
    public ResponseEntity<Iterable<City>> showCustomerTypeList() {
        return new ResponseEntity<>(iCityService.getListCity(), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Map<String, String>> createTransport(@Validated @RequestBody TransportDto transportDto,
                                                              BindingResult bindingResult) {
        System.out.println(transportDto);
        if (bindingResult.hasErrors()) {
            System.out.println(bindingResult.getFieldError());
            Map<String, String> errorMap = bindingResult.getFieldErrors()
                    .stream().collect(Collectors.toMap(e -> e.getField(), e -> e.getDefaultMessage()));
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        Transport transport = new Transport();
        City startPoint = new City();
        City endPoint = new City();
        BeanUtils.copyProperties(transportDto, transport);
        BeanUtils.copyProperties(startPoint, transportDto.getPointStart());
        BeanUtils.copyProperties(endPoint, transportDto.getPointEnd());
        transport.setPointEnd(endPoint);
        transport.setPointStart(startPoint);
        this.iTransportService.save(transport);
        return new ResponseEntity<>(HttpStatus.OK);
    }



    @PatchMapping(value = "update/{id}")
    public ResponseEntity<Map<String, String>> updateTransport(@PathVariable("id") Integer id,
                                                              @Validated @RequestBody TransportDto transportDto,
                                                              BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errorMap = bindingResult.getFieldErrors()
                    .stream().collect(Collectors.toMap(
                            e -> e.getField(), e -> e.getDefaultMessage()));
            return new ResponseEntity<>(errorMap, HttpStatus.OK);
        }
        Transport transport = new Transport();
        City startPoint = new City();
        City endPoint = new City();
        BeanUtils.copyProperties(transportDto, transport);
        BeanUtils.copyProperties(startPoint, transportDto.getPointStart());
        BeanUtils.copyProperties(endPoint, transportDto.getPointEnd());
        transport.setId(id);
        transport.setPointEnd(endPoint);
        transport.setPointStart(startPoint);
        this.iTransportService.save(transport);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
