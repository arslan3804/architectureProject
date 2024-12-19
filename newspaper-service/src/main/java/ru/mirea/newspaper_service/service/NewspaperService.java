package ru.mirea.newspaper_service.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import ru.mirea.newspaper_service.dto.NewspaperRequest;
import ru.mirea.newspaper_service.dto.NewspaperResponse;
import ru.mirea.newspaper_service.model.Newspaper;
import ru.mirea.newspaper_service.repository.NewspaperRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class NewspaperService {
    private final NewspaperRepository newspaperRepository;

    public NewspaperResponse createNewspaper(NewspaperRequest newspaperRequest) {
        Newspaper newspaper = Newspaper.builder()
                .name(newspaperRequest.name())
                .description(newspaperRequest.description())
                .price(newspaperRequest.price())
                .build();
        newspaperRepository.save(newspaper);
        log.info("Newspaper created succesfully");
        return new NewspaperResponse(newspaper.getId(), newspaper.getName(), newspaper.getDescription(), newspaper.getPrice());
    }

    public List<NewspaperResponse> getAllNewspapers() {
        return newspaperRepository.findAll()
                .stream()
                .map(newspaper -> new NewspaperResponse(newspaper.getId(), newspaper.getName(), newspaper.getDescription(), newspaper.getPrice()))
                .toList();
    }
}
