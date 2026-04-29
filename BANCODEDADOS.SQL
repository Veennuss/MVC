create database crud_ts;
use crud_ts;

create table produtos(
id int auto_increment primary key,
nome varchar(255) not null, 
preco decimal(10,2) not null
);