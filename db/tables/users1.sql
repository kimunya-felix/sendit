use sendit

create table users1(
id varchar(50) NOT NULL PRIMARY KEY,
username varchar(50) NOT NULL,
fullname varchar(150) NOT NULL,
telno varchar(50) NOT NULL,
email varchar(50) NOT NULL,
pswd varchar(50) NOT NULL,
isAdmin bit default 0 not null,
isDelete bit default 0  not null,
isSent varchar(50) default '0'  not null)