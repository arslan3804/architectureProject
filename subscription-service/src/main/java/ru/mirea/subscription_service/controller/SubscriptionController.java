package ru.mirea.subscription_service.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ru.mirea.subscription_service.dto.SubscriptionRequest;
import ru.mirea.subscription_service.dto.SubscriptionResponse;
import ru.mirea.subscription_service.service.SubscriptionService;

import java.util.List;

@RestController
@RequestMapping("/api/subscription")
@RequiredArgsConstructor
public class SubscriptionController {

    private final SubscriptionService subscriptionService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public String placeSubscription(@RequestHeader("X-User-Id") String currentUserId, @RequestBody SubscriptionRequest subscriptionRequest) {
        Long userId = Long.parseLong(currentUserId);
        subscriptionService.placeSubscription(subscriptionRequest, userId);
        return "Subscription placed successfully";
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<SubscriptionResponse> getSubscriptionsByUserId(@RequestHeader("X-User-Id") String currentUserId) {
        Long userId = Long.parseLong(currentUserId);
        return subscriptionService.getSubscriptionsByUserId(userId);
    }

}
