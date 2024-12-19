package ru.mirea.identity_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.mirea.identity_service.model.UserCredential;

import java.util.Optional;

public interface UserCredentialRepository  extends JpaRepository<UserCredential,Integer> {
    Optional<UserCredential> findByName(String username);

    Optional<UserCredential> findByEmail(String email);
}