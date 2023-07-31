create table if not exists order(
    id serial primary key,
    order_date date not null,
    constraint customer_id foreign key,
    constraint kit_id foreign key,
)