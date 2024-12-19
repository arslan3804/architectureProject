package ru.mirea.identity_service.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import ru.mirea.identity_service.dto.AuthRequest;
import ru.mirea.identity_service.model.UserCredential;
import ru.mirea.identity_service.service.AuthService;


@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final AuthService service;

    private final AuthenticationManager authenticationManager;

    @PostMapping("/register")
    public String addNewUser(@RequestBody UserCredential userCredential) {
        return service.saveUser(userCredential);
    }

    @PostMapping("/token")
    public String getToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getEmail(), authRequest.getPassword()));
        if (authentication.isAuthenticated()) {
            return service.generateToken(authRequest.getEmail());
        } else {
            {
                throw new RuntimeException("invalid access");
            }
        }
    }

    @GetMapping("/validate")
    public String validateToken(@RequestParam("token") String token) {
        service.validateToken(token);
        return "Token is valid";
    }
}