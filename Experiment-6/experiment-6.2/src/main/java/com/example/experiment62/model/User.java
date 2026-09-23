package com.example.experiment62.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String uid;

    @Column(nullable = false)
    private String name;

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL,
            fetch = FetchType.LAZY, orphanRemoval = true)
    @JsonManagedReference
    private Address address;

    public User() {}
    public User(String uid, String name) {
        this.uid = uid;
        this.name = name;
    }

    public Long getId() { return id; }
    public String getUid() { return uid; }
    public String getName() { return name; }
    public Address getAddress() { return address; }

    public void setId(Long id) { this.id = id; }
    public void setUid(String uid) { this.uid = uid; }
    public void setName(String name) { this.name = name; }

    public void setAddress(Address address) {
        this.address = address;
        if (address != null && address.getUser() != this) {
            address.setUser(this);
        }
    }
}