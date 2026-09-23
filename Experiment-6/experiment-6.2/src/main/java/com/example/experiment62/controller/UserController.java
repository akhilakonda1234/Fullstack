package com.example.experiment62.controller;

import com.example.experiment62.dto.UserRequest;
import com.example.experiment62.model.User;
import com.example.experiment62.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {
    private final UserService service;

    public UserController(UserService service) {
        this.service = service;
    }

    @PostMapping
    public User create(@RequestBody UserRequest request) {
        return service.create(request);
    }

    @GetMapping("/normal")
    public List<User> normal() {
        return service.getNormalUsers();
    }

    @GetMapping("/optimized")
    public List<User> optimized() {
        return service.getOptimizedUsers();
    }

    @GetMapping("/cached")
    public List<User> cached() {
        return service.getCachedUsers();
    }

    @GetMapping("/native")
    public List<Map<String, Object>> nativeQuery() {
        return service.getNativeUsers();
    }

    @GetMapping("/sort/id")
    public List<User> sortById() {
        return service.sortById();
    }

    @GetMapping("/sort/name")
    public List<User> sortByName() {
        return service.sortByName();
    }
}