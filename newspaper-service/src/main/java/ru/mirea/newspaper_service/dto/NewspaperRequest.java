package ru.mirea.newspaper_service.dto;

import java.math.BigDecimal;

public record NewspaperRequest(Long id, String name, String description, BigDecimal price) {
}
