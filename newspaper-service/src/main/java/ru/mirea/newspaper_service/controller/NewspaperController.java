package ru.mirea.newspaper_service.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ru.mirea.newspaper_service.dto.NewspaperRequest;
import ru.mirea.newspaper_service.dto.NewspaperResponse;
import ru.mirea.newspaper_service.service.NewspaperService;

import java.util.List;

@RestController
@RequestMapping("/api/newspaper")
@RequiredArgsConstructor
public class NewspaperController {

    private final NewspaperService newspaperService;

    @PostMapping("create")
    @ResponseStatus(HttpStatus.CREATED)
    public NewspaperResponse createNewspaper(@RequestBody NewspaperRequest newspaperRequest) {
        return newspaperService.createNewspaper(newspaperRequest);
    }

    @GetMapping("/getAllNewspapers")
    @ResponseStatus(HttpStatus.OK)
    public List<NewspaperResponse> getAllNewspapers() {
        return newspaperService.getAllNewspapers();
    }

}
