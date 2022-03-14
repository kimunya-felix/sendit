use sendit

CREATE PROCEDURE updateParcel @pid varchar(50), @senderid varchar(150), @pdescription varchar(150), @senderno varchar(100), @receiverno varchar(50), @startloc varchar(50), @endloc varchar(50)
as 
begin
update parcel1 set pid=@pid, pdescription=@pdescription, senderno=@senderno, receiverno=@receiverno, startloc=@startloc, endloc=@endloc where senderid=@senderid
end