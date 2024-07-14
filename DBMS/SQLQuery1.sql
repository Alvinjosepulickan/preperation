--create db
create database Learning


use Learning

--create person table
create table tblPerson
(
ID int identity(1,1) primary key,
[Name] Nvarchar(50),
[Email] NVarchar(100),
[GenderId] int
)

--create gender table
create table tblGender
(
	ID int identity(1,1) primary key,
	Gender nvarchar(50)
)

-- add foreign key refernce
alter table tblPerson add constraint fk_tblPerson_genderId foreign key (GenderId) references tblGender(ID)

-- add default constraint
alter table tblPerson add constraint df_tblPerson_genderId default 0 for GenderId

--check constraint
alter table tblPerson add constraint ck_Person_email check (Email ='')

--unique constraint
alter table tblPerson add constraint uq_Person_email unique (Email)