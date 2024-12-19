package ru.mirea.newspaper_service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.mirea.newspaper_service.model.Newspaper;

public interface NewspaperRepository extends JpaRepository<Newspaper, Long> {
}