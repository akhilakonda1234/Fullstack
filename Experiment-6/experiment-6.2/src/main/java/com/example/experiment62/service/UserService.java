package com.example.experiment62.service;

import com.example.experiment62.dto.UserRequest;
import com.example.experiment62.model.Address;
import com.example.experiment62.model.User;
import com.example.experiment62.repository.UserRepository;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {
    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    @Transactional
    @CacheEvict(value = "users", allEntries = true)
    public User create(UserRequest request) {
        User user = new User(request.getUid(), request.getName());
        user.setAddress(new Address(request.getCity(), request.getCountry()));
        return repository.save(user);
    }

    @Transactional(readOnly = true)
    public List<User> getNormalUsers() {
        return repository.findUsersNormal();
    }

    @Transactional(readOnly = true)
    public List<User> getOptimizedUsers() {
        return repository.findUsersWithAddress();
    }

    @Cacheable("users")
    @Transactional(readOnly = true)
    public List<User> getCachedUsers() {
        return repository.findUsersWithAddress();
    }

    @Transactional(readOnly = true)
    public List<Map<String, Object>> getNativeUsers() {
        return repository.findUsersNative().stream().map(row -> {
            Map<String, Object> item = new LinkedHashMap<>();
            item.put("id", row[0]);
            item.put("uid", row[1]);
            item.put("name", row[2]);
            item.put("city", row[3]);
            item.put("country", row[4]);
            return item;
        }).toList();
    }

    @Transactional(readOnly = true)
    public List<User> sortById() {
        return repository.findAllByOrderByIdAsc();
    }

    @Transactional(readOnly = true)
    public List<User> sortByName() {
        return repository.findAllByOrderByNameAsc();
    }
}