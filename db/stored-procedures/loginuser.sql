alter PROCEDURE loginuser @username varchar(50)
AS
BEGIN
select * from users1 where (username = @username ) 
END