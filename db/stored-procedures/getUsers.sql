use sendit

create PROCEDURE getUsers 
as 
begin
select * from users1 where isDelete=0
end