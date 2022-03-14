use sendit

create PROCEDURE createUser @id varchar(50), @username varchar(50), @fullname varchar(100), @telno varchar(50), @email varchar(50), @pswd varchar(50)
as 
begin
	insert into users1(id, username, fullname, telno, email, pswd) values (@id, @username, @fullname, @telno, @email, @pswd)
end;