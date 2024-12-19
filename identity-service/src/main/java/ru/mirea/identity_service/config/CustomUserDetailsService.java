package ru.mirea.identity_service.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import ru.mirea.identity_service.model.UserCredential;
import ru.mirea.identity_service.repository.UserCredentialRepository;

import java.util.Optional;

@Component
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    private UserCredentialRepository userCredentialRepository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<UserCredential> credential = userCredentialRepository.findByEmail(email);
        return credential.map(CustomUserDetails::new).orElseThrow(() -> new UsernameNotFoundException("user not found with email :" + email));
    }
}
