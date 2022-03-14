use sendit

create PROCEDURE deleteAParcel @pid varchar(50)
as 
begin
update parcel1 set isDeleted=1 where pid=@pid
end