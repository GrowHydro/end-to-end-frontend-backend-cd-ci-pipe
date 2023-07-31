create table if not exists Customer(
    id serial primary key,
    customer_id 
    customer_name varchar(50) not null,
    phone_number varchar not null,
    email varchar(50) not null,
)