create table if not exists users (
    id serial not null primary key,
    name text not null
);

create table if not exists todos
(
    id serial not null primary key,
    user_id   int not null references users (id) on delete cascade,
    title     text not null,
    completed boolean not null default false
);