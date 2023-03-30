create table salary(
id serial  primary key,
monthly_salary int not null
);      
       


create table employees(
       id serial primary key,
employee_name Varchar(50) unique not null
);

select * from salary;

select * from employees;
select * from salary;
select * from employees_salary;

create table employees_salary (
	id serial primary key,
	id_employees int not null,
	id_salary int not null,
	foreign key (id_employees)
		references employees(id),
    foreign key (id_salary)
        references  salary(id)
);

insert into employees_salary(id_employees, id_salary)
values  (3, 7),
		(1, 4)
		(5, 9)
        (40, 13)
		(23, 4)
		(11, 2)
		(52, 10)
		(15, 13)
        (26, 4)
        (16, 1)
		(33, 7)
		(58, 2)



insert into employees (employee_name)
values ('Katarina'),
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
       ('Julia');
       
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
 
create table roles(
id serial primary key,
role_name int not null unique);
 
select * from roles;





	


insert into roles(role_name) 
values ("Junior Python developer"),
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
       ('Senior Automation QA engineer');


