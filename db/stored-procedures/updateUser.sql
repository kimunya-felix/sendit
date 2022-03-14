use sendit

CREATE PROCEDURE updateUser @username varchar(50), @fullname varchar(50),@telno varchar(50), @email varchar(50), @pswd varchar(50), @id varchar(50)
as 
begin
update users1 set username=@username, fullname=@fullname, telno=@telno, email=@email, pswd=@pswd where id=@id
end