create table if not exists kit(
    id serial primary key,
    kit_name varchar(50) not null,
    price integer not null,
)