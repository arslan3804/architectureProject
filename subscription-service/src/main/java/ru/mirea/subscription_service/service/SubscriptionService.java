package ru.mirea.subscription_service.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.mirea.subscription_service.dto.SubscriptionRequest;
import ru.mirea.subscription_service.dto.SubscriptionResponse;
import ru.mirea.subscription_service.model.Subscription;
import ru.mirea.subscription_service.repository.SubscriptionRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SubscriptionService {

    private final SubscriptionRepository subscriptionRepository;

    public void placeSubscription(SubscriptionRequest subscriptionRequest, Long userId) {
        Subscription subscription = new Subscription();
        subscription.setUserId(userId);
        subscription.setNewspaperName(subscriptionRequest.newspaperName());
        subscription.setStartDatetime(subscriptionRequest.startDatetime());
        subscription.setMonths(subscriptionRequest.months());
        subscription.setPrice(subscriptionRequest.price());

        subscriptionRepository.save(subscription);
    }

    public List<SubscriptionResponse> getSubscriptionsByUserId(Long userId) {
        return subscriptionRepository.findByUserId(userId)
                .stream()
                .map(subscription -> new SubscriptionResponse(
                        subscription.getId(),
                        subscription.getUserId(),
                        subscription.getNewspaperName(),
                        subscription.getStartDatetime(),
                        subscription.getMonths(),
                        subscription.getPrice(),
                        subscription.getTotalPrice()))
                .toList();
    }


}
