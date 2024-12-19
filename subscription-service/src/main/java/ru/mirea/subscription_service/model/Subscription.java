package ru.mirea.subscription_service.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "t_subscriptions")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long userId;
    private String newspaperName;
    private LocalDateTime startDatetime;
    private Integer months;
    private BigDecimal price;
    @Column(precision = 19, scale = 2, insertable = false, updatable = false)
    private BigDecimal totalPrice;
}
