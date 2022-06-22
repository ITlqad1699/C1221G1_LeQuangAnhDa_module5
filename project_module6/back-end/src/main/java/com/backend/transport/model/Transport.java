package com.backend.transport.model;

import javax.persistence.*;

@Entity
@Table(name = "transport")
public class Transport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String numberOfTransport;
    private String typeOfTransport;
    private String phone;
    private String email;
    private Integer active;
    private String timeStart;
    private String timeEnd;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "city_start",referencedColumnName = "id_city" )
    private City pointStart;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "city_end", referencedColumnName = "id_city" )
    private City pointEnd;

    public Transport() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNumberOfTransport() {
        return numberOfTransport;
    }

    public void setNumberOfTransport(String numberOfTransport) {
        this.numberOfTransport = numberOfTransport;
    }

    public String getTypeOfTransport() {
        return typeOfTransport;
    }

    public void setTypeOfTransport(String typeOfTransport) {
        this.typeOfTransport = typeOfTransport;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getActive() {
        return active;
    }

    public void setActive(Integer active) {
        this.active = active;
    }

    public String getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(String timeStart) {
        this.timeStart = timeStart;
    }

    public String getTimeEnd() {
        return timeEnd;
    }

    public void setTimeEnd(String timeEnd) {
        this.timeEnd = timeEnd;
    }

    public City getPointStart() {
        return pointStart;
    }

    public void setPointStart(City pointStart) {
        this.pointStart = pointStart;
    }

    public City getPointEnd() {
        return pointEnd;
    }

    public void setPointEnd(City pointEnd) {
        this.pointEnd = pointEnd;
    }


}
