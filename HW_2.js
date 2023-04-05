
http://162.55.220.72:5005/first
1. Отправить запрос.
2. Статус код 200
3. Проверить, что в body приходит правильный string.
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

//1. Отправить запрос.
http://162.55.220.72:5005/user_info_3
//2. Статус код 200
 pm.test("Status code is 200", function () {
 pm.response.to.have.status(200);
});
console.log("Status code is 200")
// 3. Спарсить response body в json.
var jsonData = pm.response.json();
console.log(jsonData)
// 4. Проверить, что name в ответе равно name s request (name вбить руками.)

pm.test("Req_Resp_name_check", function () {
pm.expect(jsonData.name).to.eql("Anna");
});
// 5. Проверить, что age в ответе равно age s request (age вбить руками.)

pm.test("Req_Resp_age_check", function () {
pm.expect(jsonData.age).to.eql("33");
});

// // 6. Проверить, что salary в ответе равно salary s request (salary вбить руками.)

pm.test("Req_Resp_name_check", function () {
 pm.expect(jsonData.salary).to.eql(1500);
});
// // 7. Спарсить request.
 var jsonData = pm.response.json();
// 8. Проверить, что name в ответе равно name s request (name забрать из request.)
var jsonData = pm.response.json();
var resp_name = jsonData.name;

var req = request.data;
var req_name = req.name;
console.log("Resp_name = ",  resp_name)
console.log("Req_name = ", req_name)


    pm.test("Req_Resp_name_check", function () {
        var jsonData = pm.response.json();
        pm.expect(jsonData.name).to.eql(req_name);
    });
// // 9. Проверить, что age в ответе равно age s request (age забрать из request.)
var jsonData = pm.response.json();
var resp_age = jsonData.age;

var req = request.data;
var req_age = req.age;
console.log("Resp_age = " , resp_age)
console.log("Req_age = ", req_age)


    pm.test("Req_Resp_age_check", function () {
       pm.expect(jsonData.age).to.eql(req_age);
});
// // 10. Проверить, что salary в ответе равно salary s request (salary забрать из request.)
var jsonData = pm.response.json();
var resp_salary = jsonData.salary;

var req = request.data;
var req_salary = + req.salary;
console.log("Resp_salary = " , resp_salary)
console.log("Req_salary = ", req_salary)


pm.test("Req_Resp_salary_check", function (){
pm.expect(jsonData.salary).to.eql(req_salary);
});

// 11. Вывести в консоль параметр family из response.
var resp_family = jsonData.family
console.log("Resp_family=", resp_family);

// 12. Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)

var jsonData = pm.response.json();
var req_u_salary_1_5_year = jsonData.salary*4;


var req = request.data;
var req_u_salary_1_5_year = + req.salary*4;

console.log("Req_u_salary_1_5_year = ",  req.salary*4)


// http://162.55.220.72:5005/object_info_3
// 1. Отправить запрос.
// 2. Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
// 3. Спарсить response body в json.
var jsonData = pm.response.json();
console.log(jsonData)
// 4. Спарсить request.
var req_url = pm.request.url.query.toObject();
console.log("req_url =", req_url)

// // 5. Проверить, что name в ответе равно name s request (name забрать из request.)
var req_url = pm.request.url.query.toObject();
console.log("req_url = ", req_url.name)
var resp_name = jsonData.name;
pm.test("Req_name_chek", function () {
    pm.expect(resp_name).to.eql(req_url.name);;
});

// 6. Проверить, что age в ответе равно age s request (age забрать из request.)
var req_url = pm.request.url.query.toObject();
console.log("req_url = ", req_url.age)
var resp_age = jsonData.age;
pm.test("Req_age_chek", function () {
    pm.expect(resp_age).to.eql(req_url.age);
});
// 7. Проверить, что salary в ответе равно salary s request (salary забрать из request.)
var req_url = pm.request.url.query.toObject();
console.log("req_url = ", req_url.salary)
var resp_salary = jsonData.salary;
pm.test("Req_salary_chek", function () {
    pm.expect(resp_salary).to.eql(+ req_url.salary);
});
// 8. Вывести в консоль параметр family из response.
var resp_family = jsonData.family
console.log("Resp_family=", resp_family);
// 9. Проверить, что у параметра dog есть параметры name.

pm.test("Dog_name", function () {
  pm.expect(jsonData.family.pets.dog).to.have.property("name");
});

// 10. Проверить, что у параметра dog есть параметры age.
pm.test("Dog_age", function () {
  pm.expect(jsonData.family.pets.dog).to.have.property("age");
});
// 11. Проверить, что параметр name имеет значение Luky.
pm.test("name_check", function () { 
    pm.expect(jsonData.family.pets.dog.name).to.eql("Luky");
});
// 12. Проверить, что параметр age имеет значение 4.
pm.test("age_check", function () {
    pm.expect(jsonData.family.pets.dog.age).to.eql(4);
});


// http://162.55.220.72:5005/object_info_4
// 1. Отправить запрос.
// 2. Статус код 200
pm.test("Status code is 200", function () {
pm.response.to.have.status(200);
});
// 3. Спарсить response body в json.
var jsonData = pm.response.json();
var resp_name = jsonData.name;
var resp_age = jsonData.age;
var resp_salary = jsonData.salary;
console.log(jsonData)
// 4. Спарсить request.
var req_url = pm.request.url.query.toObject();
console.log("req_url =", req_url)
// 5. Проверить, что name в ответе равно name s request (name забрать из request.)
console.log("req_url = ", req_url.name)
pm.test("check_name", function () {
    var jsonData = pm.response.json();
    
      pm.expect(resp_name).to.eql(req_url.name);
});
console.log(resp_name)
// 6. Проверить, что age в ответе равно age из request (age забрать из request.)
pm.test("check_age", function () {
   
    pm.expect(jsonData.age).to.eql(+ req_url.age);
});
// 7. Вывести в консоль параметр salary из request.
var req_url = pm.request.url.query.toObject();
console.log("req_url = ", req_url.salary)

// 8. Вывести в консоль параметр salary из response.
var resp_salary = jsonData.salary
console.log("Resp_salary =", resp_salary);
// 9. Вывести в консоль 0-й элемент параметра salary из response.
var resp_salary_0 =  jsonData.salary[0]
console.log("resp_salary_0 = ", + resp_salary_0)
// 10. Вывести в консоль 1-й элемент параметра salary параметр salary из response.
var resp_salary_1 =  jsonData.salary[1]
console.log("resp_salary_1 = ", + resp_salary_1)
// // 11. Вывести в консоль 2-й элемент параметра salary параметр salary из response.
var resp_salary_2 =  jsonData.salary[2]
console.log("resp_salary_2 = ", + resp_salary_2)
// 12. Проверить, что 0-й элемент параметра salary равен salary из request (salary забрать из request.)

pm.test("check_0", function () {
pm.expect(resp_salary_0).to.eql(+req_url.salary);
});
// 13. Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request.)

pm.test("check_1", function () {
    pm.expect(+resp_salary_1).to.eql(+req_url.salary*2);
});

// 14. Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request.)
pm.test("check_2", function () {
    var jsonData = pm.response.json();
    pm.expect(+resp_salary_2).to.eql(+req_url.salary*3);
});
// 15. Создать и передать в окружении переменную name 
pm.environment.set("name", resp_name)
// 16. Создать и передать  в окружении переменную age
pm.environment.set("age", resp_age)
// 17. Создать и передать в окружении переменную salary
pm.environment.set("salary", resp_salary_0)
// 18. Передать в окружение переменную name
// 19. Передать в окружение переменную age
// 20. Передать в окружение переменную salary
// 21. Написать цикл который выведет в консоль по порядку элементы списка из параметра salary.
var resp_salary =  jsonData.salary
var list = resp_salary
console.log(list.length)

// console.log(list[0])
for(var i = 0; i<=list.length; i++){
    console.log('iter', i, 'salary_item =', list [i])
}

// http://162.55.220.72:5005/user_info_2
// 1. Вставить параметр salary из окружения в request
var env_salary = pm.environment.get("salary");
var req = request.data;
var req_salary = env_salary;
console.log(req.salary)
// 2. Вставить параметр age из окружения в age
var env_age = pm.environment.get("age");
var req = request.data;
req_age = env_age;
console.log(req.age)
// 3. Вставить параметр name из окружения в name
var env_name = pm.environment.get("name");
var req = request.data;
req_name = env_name;
console.log(req.age)
// 4. Отправить запрос.
// 5. Статус код 200
// 6. Спарсить response body в json.
var jsonData = pm.response.json();
var resp = pm.response.json();

var resp_name = jsonData.name;
var resp_age = jsonData.age;
var resp_salary = jsonData.salary;


var resp_qa_salary_after_1_5_year = resp["resp_qa_salary_after_1.5_year"];
var resp_qa_salary_after_12_months = resp.req_qa_salary_after_12_months;
var resp_qa_salary_after_3_5_months = resp["resp_qa_salary_after_3.5_months"];
var resp_qa_salary_after_6_months = resp.qa_salary_after_6_months;
var resp_start_qa_salary = resp.start_qa_salary

// 7. Спарсить request.
var req = request.data;
var req_salary = req.salary;
var req_age = req.age;

// 8. Проверить, что json response имеет параметр start_qa_salary
pm.test("check start_qa_salary", function () {
    pm.expect(jsonData).to.have.property("start_qa_salary");
});

// // 9. Проверить, что json response имеет параметр qa_salary_after_6_months
pm.test("check start_qa_salary_after_6_m", function () {
pm.expect(jsonData).to.have.property("qa_salary_after_6_months")
});
// // // 10. Проверить, что json response имеет параметр qa_salary_after_12_months
pm.test("check start_qa_salary_after_12_m", function () {
pm.expect(jsonData).to.have.property("qa_salary_after_12_months")
});
// // // 11. Проверить, что json response имеет параметр qa_salary_after_1.5_year
pm.test("check start_qa_salary_after_1.5_year", function () {
pm.expect(jsonData).to.have.property("qa_salary_after_1.5_year")
});
// // // 12. Проверить, что json response имеет параметр qa_salary_after_3.5_years
pm.test("check start_qa_salary_after_3.5_years", function () {
pm.expect(jsonData).to.have.property("qa_salary_after_3.5_years")
});
// // 13. Проверить, что json response имеет параметр person
pm.test("check param_person", function () {
pm.expect(jsonData).to.have.property("person")
});
// // // 14. Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)
var resp_start_qa_salary = jsonData.start_qa_salary;
var req_start_qa_salary = jsonData.start_qa_salary;
// console.log("Resp_start_qa_salary"  + resp_start_qa_salary);
// console.log("Req_start_qa_salary" + req_start_qa_salary);

pm.test("Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)", function () {
    pm.expect(jsonData.start_qa_salary).to.eql(+req.salary);
});
// // // 15. Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request.)
var resp_qa_salary_after_6_months = jsonData.qa_salary_after_6_months;
var req_qa_salary_after_6_months = jsonData.qa_salary_after_6_months;
// // console.log("Resp_qa_salary_after_6_months"  + resp_qa_salary_after_6_months);
// // console.log("Req_qa_salary_after_6_months"  + req_qa_salary_after_6_months);

pm.test("qa_salary_after_6_months", function () {
pm.expect(resp_qa_salary_after_6_months).to.eql(req_salary*2)
});
// // 16. Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request.)
var resp_qa_salary_after_12_months = jsonData.qa_salary_after_12_months;

pm.test("qa_salary_after_12_months", function () {
pm.expect(resp_qa_salary_after_12_months).to.eql(req_salary*2.7)
});
// 17. Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request.)

var resp_qa_salary_after_1_5_year = resp["resp_qa_salary_after_1.5_year"];

pm.test("qa_salary_after_1.5_year = salary*3.3", function () {
pm.expect(resp_qa_salary_after_1_5_year).to.eql(+ req_salary*3.3);
});
// 18. Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request.)
var resp_qa_salary_after_3_5_years  = resp["qa_salary_after_3.5_years"];

pm.test("qa_salary_after_3_5_years", function () {
pm.expect(resp_qa_salary_after_3_5_years).to.eql(+ req_salary*3.8)
});

// 19. Проверить, что в параметре person, 1-й элемент из u_name равен salary из request (salary забрать из request.)
pm.test("u_name_1 = salary", function () {
pm.expect(resp.person.u_name[1]).to.eql(+ req_salary)
});

// 20. Проверить, что что параметр u_age равен age из request (age забрать из request.)
pm.test("u_age = age", function () {
pm.expect(resp.person.u_age).to.eql(+ req_age)
});
// 21. Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request.)
pm.test("u_salary_5_years = salary*4.2", function () {
pm.expect(resp.person.u_salary_5_years).to.eql(+ req_salary * 4.2)
});
// 22. ***Написать цикл который выведет в консоль по порядку элементы списка из параметра person.

