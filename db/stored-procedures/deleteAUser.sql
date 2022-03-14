use sendit

create PROCEDURE deleteAUser @id varchar(50)
as 
begin
update users1 set isDelete=1 where id=@id
end