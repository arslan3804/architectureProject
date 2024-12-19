package ru.mirea.identity_service.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ru.mirea.identity_service.model.UserCredential;
import ru.mirea.identity_service.repository.UserCredentialRepository;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserCredentialRepository userCredentialRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public String saveUser(UserCredential userCredential) {
        userCredential.setPassword(passwordEncoder.encode(userCredential.getPassword()));
        userCredentialRepository.save(userCredential);
        return "user added";
    }

    public String generateToken(String email) {
        Optional<UserCredential> userCredentialOpt = userCredentialRepository.findByEmail(email);

        if (userCredentialOpt.isPresent()) {
            UserCredential userCredential = userCredentialOpt.get();
            Long id = userCredential.getId();
            String name = userCredential.getName();
            return jwtService.generateToken(email, id, name);
        } else {
            throw new RuntimeException("Пользователь с таким email не найден");
        }
    }

    public void validateToken(String token) {
        jwtService.validateToken(token);
    }
}
