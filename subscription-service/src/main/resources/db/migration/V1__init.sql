CREATE TABLE t_subscriptions (
    id BIGINT NOT NULL AUTO_INCREMENT,
    user_id BIGINT,
    newspaper_name VARCHAR(255),
    start_datetime DATETIME,
    months INT,
    price DECIMAL(19, 2),
    total_price DECIMAL(19, 2) GENERATED ALWAYS AS (price * months) STORED,
    PRIMARY KEY (id)
);
