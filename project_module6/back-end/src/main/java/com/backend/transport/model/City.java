package com.backend.transport.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "city")
@JsonIgnoreProperties({"transportsStart","transportsEnd"})
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_city")
    private Integer id;
    private String nameCity;

    @OneToMany(mappedBy = "pointStart" ,cascade = {CascadeType.ALL},fetch = FetchType.LAZY)
    private List<Transport> transportsStart;

    @OneToMany(mappedBy = "pointEnd",cascade = {CascadeType.ALL},fetch = FetchType.LAZY)
    private List<Transport> transportsEnd;

    public City() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNameCity() {
        return nameCity;
    }

    public void setNameCity(String nameCity) {
        this.nameCity = nameCity;
    }


    public List<Transport> getTransportsStart() {
        return transportsStart;
    }

    public void setTransportsStart(List<Transport> transportsStart) {
        this.transportsStart = transportsStart;
    }

    public List<Transport> getTransportsEnd() {
        return transportsEnd;
    }

    public void setTransportsEnd(List<Transport> transportsEnd) {
        this.transportsEnd = transportsEnd;
    }
}
