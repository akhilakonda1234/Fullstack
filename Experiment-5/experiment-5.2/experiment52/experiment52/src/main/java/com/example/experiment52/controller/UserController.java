package com.example.experiment52.controller;

import com.example.experiment52.dto.ApiResponse;
import com.example.experiment52.dto.UserRequest;
import com.example.experiment52.model.User;
import com.example.experiment52.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {
    private final UserService service;

    public UserController(UserService service) { this.service = service; }

    @PostMapping
    public ResponseEntity<ApiResponse<User>> create(@Valid @RequestBody UserRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new ApiResponse<>(true, "User created successfully",
                        service.createUser(request)));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<User>>> getAll() {
        return ResponseEntity.ok(new ApiResponse<>(true,
                "Users retrieved successfully", service.getAllUsers()));
    }

    @GetMapping("/{uid}")
    public ResponseEntity<ApiResponse<User>> getOne(@PathVariable String uid) {
        return ResponseEntity.ok(new ApiResponse<>(true,
                "User retrieved successfully", service.getUserByUid(uid)));
    }

    @PutMapping("/{uid}")
    public ResponseEntity<ApiResponse<User>> update(
            @PathVariable String uid, @Valid @RequestBody UserRequest request) {
        return ResponseEntity.ok(new ApiResponse<>(true,
                "User updated successfully", service.updateUser(uid, request)));
    }

    @DeleteMapping("/{uid}")
    public ResponseEntity<ApiResponse<String>> delete(@PathVariable String uid) {
        service.deleteUser(uid);
        return ResponseEntity.ok(new ApiResponse<>(true,
                "User deleted successfully", null));
    }
}
