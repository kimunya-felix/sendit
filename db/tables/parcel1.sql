use sendit

create table parcel1(
pid varchar(50) NOT NULL PRIMARY KEY,
senderid varchar(50) NOT NULL,
pdescription varchar(50) NOT NULL,
senderno varchar(150) NOT NULL,
receiverno varchar(150) NOT NULL,
startloc varchar(50) NOT NULL,
endloc varchar(50) NOT NULL,
isUpdated bit default 0 not null,
isDeleted bit default 0  not null,
isSent bit default 0  not null,
isDelivered bit default 0  not null,
currentLoc varchar(50) default 'none'  not null

FOREIGN KEY(senderid) REFERENCES users1(id)
)