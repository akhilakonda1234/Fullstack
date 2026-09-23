package com.example.experiment62.config;

import com.example.experiment62.model.Address;
import com.example.experiment62.model.User;
import com.example.experiment62.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {
    @Bean
    CommandLineRunner loadData(UserRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                add(repository, "24BAI70001", "Aarav", "Hyderabad", "India");
                add(repository, "24BAI70002", "Ananya", "Delhi", "India");
                add(repository, "24BAI70003", "Rahul", "Mumbai", "India");
                add(repository, "24BAI70004", "Priya", "Bengaluru", "India");
                add(repository, "24BAI70005", "Kiran", "Chennai", "India");
                add(repository, "24BAI70006", "Sneha", "Pune", "India");
                add(repository, "24BAI70007", "Vikram", "Kolkata", "India");
                add(repository, "24BAI70008", "Meera", "Jaipur", "India");
                add(repository, "24BAI70009", "Rohan", "Vijayawada", "India");
                add(repository, "24BAI70010", "Divya", "Warangal", "India");
            }
        };
    }

    private void add(UserRepository repository, String uid, String name,
                     String city, String country) {
        User user = new User(uid, name);
        user.setAddress(new Address(city, country));
        repository.save(user);
    }
}