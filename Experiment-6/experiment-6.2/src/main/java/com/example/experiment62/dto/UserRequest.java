package com.example.experiment62.dto;

public class UserRequest {
    private String uid;
    private String name;
    private String city;
    private String country;

    public UserRequest() {}

    public String getUid() { return uid; }
    public String getName() { return name; }
    public String getCity() { return city; }
    public String getCountry() { return country; }

    public void setUid(String uid) { this.uid = uid; }
    public void setName(String name) { this.name = name; }
    public void setCity(String city) { this.city = city; }
    public void setCountry(String country) { this.country = country; }
}