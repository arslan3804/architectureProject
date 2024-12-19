package ru.mirea.subscription_service.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record SubscriptionResponse(Long id, Long userId, String newspaperName, LocalDateTime startDatetime, Integer months, BigDecimal price, BigDecimal totalPrice) {
}
