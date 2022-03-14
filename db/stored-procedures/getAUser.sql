use sendit

create PROCEDURE getAUser @id varchar(50)
as 
begin
SELECT * FROM users1 where id = @id
end