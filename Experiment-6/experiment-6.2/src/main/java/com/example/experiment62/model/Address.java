package com.example.experiment62.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "addresses")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String city;
    private String country;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", unique = true)
    @JsonBackReference
    private User user;

    public Address() {}
    public Address(String city, String country) {
        this.city = city;
        this.country = country;
    }

    public Long getId() { return id; }
    public String getCity() { return city; }
    public String getCountry() { return country; }
    public User getUser() { return user; }

    public void setId(Long id) { this.id = id; }
    public void setCity(String city) { this.city = city; }
    public void setCountry(String country) { this.country = country; }
    public void setUser(User user) { this.user = user; }
}