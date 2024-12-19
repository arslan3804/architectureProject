package ru.mirea.subscription_service.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public record SubscriptionRequest(Long id, String newspaperName, LocalDateTime startDatetime, Integer months, BigDecimal price) {
}
