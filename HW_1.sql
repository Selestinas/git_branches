
--Создать таблицу salary
create table salary(
id serial  primary key,
monthly_salary int not null
);      
       

--Создать таблицу employees
create table employees(
       id serial primary key,
employee_name Varchar(50) unique not null
);

select * from salary;

select * from employees;
select * from roles;
select * from salary;
select * from employees_salary;
select * from roles_employee;


--Создать таблицу employee_salary
create table employees_salary (
	id serial primary key,
	id_employees int not null unique,
	id_salary int not null
);


--Наполнить таблицу employee_salary 40 строками:
insert into employees_salary(id_employees, id_salary)
values  (3, 7),
		(1, 4),
		(5, 9),
        (40, 13),
		(29, 4),
		(11, 2),
		(52, 10),
		(15, 13),
        (26, 4),
        (16, 1),
		(33, 7),
		(60, 5),
        (8, 3),
		(10, 4),
		(65, 13),
        (38, 20),
		(23, 4),
		(9, 1),
		(53, 11),
		(14, 12),
        (27, 5),
        (17, 8),
		(32, 6),
		(57, 3),
		(2, 14),
		(63, 5),
		(54, 10),
        (41, 16),
		(22, 4),
		(39, 2),
		(50, 17),
		(80, 27),
        (79, 2),
        (78, 38),
		(76, 50),
		(71, 2),
		(72, 9),
		(73, 33),
        (74, 34),
        (75, 35)

--Наполнить таблицу employee 70 строками.
insert into employees (employee_name)
values ('Katajina'),
     ('Parasha'),
     ('Dasha'),
     ('Natasha'),
     ('Masha'),
     ('Sasha'),
     ('Jenya'),
     ('David'),
     ('Nicholas'),
     ('Sarah'),
     ('Ryan'),
     ('Alexis'),
     ('Anthony'),
     ('Elizabeth'),
     ('Christopher'),
     ('Samantha'),
     ('Joseph'),
     ('Ashley'),
     ('William'),
     ('Isabella'),
     ('Daniel'),
     ('Abigail'),
     ('Andrew'),
     ('Hannah'),
     ('Ethan'),
     ('Olivia'),
     ('Matthew'),
     ('Madison'),
     ('Joshua'),
     ('Emma'),
     ('Michael'),
     ('Emily'),
     ('Jacob'),
     ('Alyssa'),
     ('Alexander'),
     ('Sophia'),
     ('Tyler'),
     ('Lauren'),
     ('James'),
     ('Brianna'),
     ('John'),
     ('Kayla'),
     ('Dylan'),
     ('Natalie'),
      ('Nathan'),
      ('Anna'),
      ('Jonathan'),
      ('Jessica'),
      ('Brandon'),
      ('Taylor'),
       ('Samuel'),
       ('Chloe'),
       ('Christian'),
       ('Hailey'),
       ('Benjamin'),
       ('Avada'),
       ('Zachary'),
       ('Jasmine'),
       ('Logan'),  
       ('Sydney'),
       ('Jose'),  
       ('Victoria'),
       ('Noah'),  
       ('Ella'),
       ('Justin'),
       ('Mia'),
       ('Elijah'),  
       ('Morgan'),
       ('Gabriel'),
       ('Julia')
       
insert into salary(monthly_salary)
values   (1000),
         (1100),
         (1200),
         (1300),
		 (1400),
		 (1500),
		 (1600),
		 (1700),
		 (1800),
		 (1900),
		 (2000),
         (2100),
	     (2200),
         (2300),
         (2400),
         (2500);
        
--Создать таблицу roles
create table roles(
id serial primary key,
role_name int not null unique);
 
select * from roles;

alter table roles
alter column role_name type varchar(30);

--Наполнить таблицу roles 20 строками:

insert into roles(role_name) 
values ('Junior Python developer'),
       ('Middle Python developer'),
       ('Senior Python developer'),
       ('Junior Java developer'),
       ('Middle Java developer'),
       ('Senior Java developer'),
       ('Junior JavaScript developer'),
       ('Middle JavaScript developer'),
       ('Senior JavaScript developer'),
       ('Junior Manual QA engineer'),
       ('Middle Manual QA engineer'),
       ('Senior Manual QA engineer'),
       ('Project Manager'),
       ('Designer'),
       ('HR'),
       ('CEO'),
       ('Sales manager'),
       ('Junior Automation QA engineer'),
       ('Middle Automation QA engineer'),
       ('Senior Automation QA engineer')


-- Создать таблицу roles_employee
 create table roles_employee(
 id serial  primary key,
 employee_id int not null unique, 
 role_id int not null,
 foreign key (role_id)
 	references roles(id),
 foreign key (employee_id)	
 	references employees(id)
 );

select * from roles_employee

--Наполнить таблицу roles_employee 40 строками:
insert into roles_employee(
employee_id, role_id
)
values (7,2),
	   (20,4),
     (3,9),
     (5,13),
     (23,4),
     (11,2),
	(10,9),
	(22,13),
	(21,3),
	(34,4),
	(6,7),
	(1,1),
	(2,2),
(69,3),
(4,4),
(68,5),
(67,6),
(66,7),
(8,18),
(9,9),
(65,10),
(64,11),
(12,12),
(13,13),
(14,14),
(63,15),
(15,16),
(17,18),
(19,20),
(60,19),
(59,18),
(24,17),
(26,16),
(28,15),
(30,14),
(32,13),
(55,12),
(36,11),
(38,10),
(40,3);

truncate table roles_employee restart identity cascade 
