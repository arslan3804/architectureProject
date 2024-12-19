package ru.mirea.api_gateway.uilt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil {

    public static final String SECRET = "4880e8a5395c24d378d2fc5f87b4eb786c4b9c39583f87a59f88a364f8efc411";

    public void validateToken(final String token) {
        Jws<Claims> claimsJws = Jwts.parserBuilder()
                .setSigningKey(getSignKey())
                .build()
                .parseClaimsJws(token);
    }

    private Key getSignKey() {
        byte[] keyBytes= Decoders.BASE64.decode(SECRET);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String getUserIdFromToken(String token) {
        try {
            Key signingKey = Keys.hmacShaKeyFor(Base64.getDecoder().decode(SECRET));
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(signingKey)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
            return String.valueOf(claims.get("id", Long.class));
        } catch (Exception e) {
            throw new RuntimeException("Не удалось извлечь id из токена", e);
        }
    }

}

