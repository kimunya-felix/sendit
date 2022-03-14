use sendit

create PROCEDURE createParcel @pid varchar(50), @senderid varchar(150), @pdescription varchar(150), @senderno varchar(100), @receiverno varchar(50), @startloc varchar(50), @endloc varchar(50)
as 
begin
	insert into parcel1(pid, senderid, pdescription,senderno, receiverno, startloc,endloc) values (@pid,@senderid,@pdescription,@senderno,@receiverno,@startloc,@endloc)
end;