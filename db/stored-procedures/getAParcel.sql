use sendit

create PROCEDURE getAParcel @pid varchar(50)
as 
begin
SELECT * FROM parcel1 where pid=@pid
end