drop table if exists users;

create table users (
	id			int			auto_increment,
    usuario		varchar		(50),
    rol			varchar		(50),
    primary key (id)
);

describe users;

insert into users (usuario, rol) values ('admin','admin');
insert into users (usuario, rol) values ('demo','data entry');

select * from users;