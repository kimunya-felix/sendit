use sendit

create PROCEDURE getParcels 
as 
begin
select * from parcel1 where isDeleted=0
end