package ru.mirea.subscription_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.mirea.subscription_service.model.Subscription;

import java.util.List;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
    List<Subscription> findByUserId(Long userId);
}
