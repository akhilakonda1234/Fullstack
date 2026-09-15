package com.example.experiment52.service;

import com.example.experiment52.dto.UserRequest;
import com.example.experiment52.exception.UserNotFoundException;
import com.example.experiment52.model.User;
import com.example.experiment52.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    private final UserRepository repository;

    public UserService(UserRepository repository) { this.repository = repository; }

    public User createUser(UserRequest request) {
        return repository.save(new User(request.getUid(), request.getName()));
    }

    public List<User> getAllUsers() { return repository.findAll(); }

    public User getUserByUid(String uid) {
        return repository.findById(uid)
                .orElseThrow(() -> new UserNotFoundException(
                        "User not found with UID: " + uid));
    }

    public User updateUser(String uid, UserRequest request) {
        User user = getUserByUid(uid);
        user.setName(request.getName());
        return repository.save(user);
    }

    public void deleteUser(String uid) {
        repository.delete(getUserByUid(uid));
    }
}
