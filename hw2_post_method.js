http://162.55.220.72:5005/user_info_3
//1. Отправить запрос.
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
