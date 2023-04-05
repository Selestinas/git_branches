// // 1) необходимо залогиниться
// POST
// http://162.55.220.72:5005/login
// login : str (кроме /)
// password : str
// Приходящий токен необходимо передать во все остальные запросы.
var resp = pm.response.json();
var jsonData = pm.response.json();
var token_resp = jsonData.token;
pm.environment.set("token", token_resp);

/ // 1) необходимо залогиниться
// POST
// http://162.55.220.72:5005/login
// login : str (кроме /)
// password : str
// Приходящий токен необходимо передать во все остальные запросы.
var resp = pm.response.json();
var jsonData = pm.response.json();
var token_resp = jsonData.token;
pm.environment.set("token", token_resp);

// 2) http://162.55.220.72:5005/user_info
// req. (RAW JSON)
// POST
// age: int
// salary: int
// name: str
// auth_token

// 1) Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
// 2) Проверка структуры json в ответе.
var resp = pm.response.json();

const schema = {
  "type": "object",
  "properties": {
    "person": {
      "type": "object",
      "properties": {
        "u_age": {
          "type": "integer"
        },
        "u_name": {
          "type": "array",
          "items": [
            {
              "type": "string"
            },
            {
              "type": "integer"
            },
            {
              "type": "integer"
            }
          ]
        },
        "u_salary_1_5_year": {
          "type": "integer"
        }
      },
      "required": [
        "u_age",
        "u_name",
        "u_salary_1_5_year"
      ]
    },
    "qa_salary_after_12_months": {
      "type": "number"
    },
    "qa_salary_after_6_months": {
      "type": "integer"
    },
    "start_qa_salary": {
      "type": "integer"
    }
  },
  "required": [
    "person",
    "qa_salary_after_12_months",
    "qa_salary_after_6_months",
    "start_qa_salary"
  ]
};

pm.test("schemavalid", function () {
    pm.response.to.have.jsonSchema(schema);
});

// 3. В ответе указаны коэффициенты умножения salary, напишите тесты по проверке правильности результата перемножения на коэффициент.
var resp_qa_salary_x2 = resp.qa_salary_after_6_months;
pm.test("check result", function () {
    pm.expect(resp_qa_salary_x2).to.eql(resp.person.u_name[1]*2);
});

var resp_qa_salary_x2_9 = resp.qa_salary_after_12_months;
pm.test("check result_2.9", function () {
    pm.expect(resp_qa_salary_x2_9).to.eql(resp.person.u_name[1]*2.9);
});

var resp_u_salary_1_5_year_x4 = resp.person.u_salary_1_5_year;
pm.test("check result_4", function () {
    pm.expect(resp_u_salary_1_5_year_x4).to.eql(resp.person.u_name[1]*4);
});

// 4) Достать значение из поля 'u_salary_1.5_year' и передать в поле salary запроса http://162.55.220.72:5005/get_test_user

pm.environment.set("salary", resp_u_salary_1_5_year_x4);



pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
// 2) Проверка структуры json в ответе.
var resp = pm.response.json();

const schema = {

  "type": "object",
  "properties": {
    "age": {
      "type": "integer"
    },
    "name": {
      "type": "string"
    },
    "salary": {
      "type": "array",
      "items": [
        {
          "type": "integer"
        },
        {
          "type": "string"
        },
        {
          "type": "string"
        }
      ]
    }
  },
  "required": [
    "age",
    "name",
    "salary"
  ]
}
    pm.test("schemavalid", function () {
    pm.response.to.have.jsonSchema(schema);
});

// 3) В ответе указаны коэффициенты умножения salary, напишите тесты по проверке правильности результата перемножения на коэффициент.
var resp_salary = resp.salary[0];
var resp_salary_x2 = +resp.salary[1];
var resp_salary_x3 = +resp.salary[2];

pm.test("salary_0", function () {
    pm.expect(resp_salary_x2).to.eql(resp.salary[0]*2);
});

pm.test("salary_1", function () {
    pm.expect(resp_salary_x3).to.eql(resp.salary[0]*3);
});

// 4) проверить, что 2-й элемент массива salary больше 1-го и 0-го
pm.test("salary", function () {
    pm.expect(resp_salary_x3).to.greaterThan(resp_salary)
});
pm.test("salary", function () {
    pm.expect(resp_salary_x3).to.greaterThan(resp_salary_x2)
});


pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
// 2) Проверка структуры json в ответе.
var resp = pm.response.json();

const schema = {
    "type": "object",
  "properties": {
    "age": {
      "type": "integer"
    },
    "daily_food": {
      "type": "number"
    },
    "daily_sleep": {
      "type": "number"
    },
    "name": {
      "type": "string"
    }
  },
  "required": [
    "age",
    "daily_food",
    "daily_sleep",
    "name"
  ]
}
pm.test("schemavalid", function () {
    pm.response.to.have.jsonSchema(schema);
});

// 3) В ответе указаны коэффициенты умножения weight, напишите тесты по проверке правильности результата перемножения на коэффициент.
var daily_food = resp.daily_food;
var daily_sleep = resp.daily_sleep;
var req = request.data;

var req_weight = +req.weight;

pm.test("daily_food*0.012", function () {
    pm.expect(daily_food).to.eql(req.weight*0.012);
});

// 1) Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
// 2) Проверка структуры json в ответе.
var resp = pm.response.json();

const schema = {
    "type": "object",
  "properties": {
    "age": {
      "type": "string"
    },
    "family": {
      "type": "object",
      "properties": {
        "children": {
          "type": "array",
          "items": [
            {
              "type": "array",
              "items": [
                {
                  "type": "string"
                },
                {
                  "type": "integer"
                }
              ]
            },
            {
              "type": "array",
              "items": [
                {
                  "type": "string"
                },
                {
                  "type": "integer"
                }
              ]
            }
          ]
        },
        "u_salary_1_5_year": {
          "type": "integer"
        }
      },
      "required": [
        "children",
        "u_salary_1_5_year"
      ]
    },
    "name": {
      "type": "string"
    },
    "salary": {
      "type": "integer"
    }
  },
  "required": [
    "age",
    "family",
    "name",
    "salary"
  ] 
}
pm.test("schemavalid", function () {
    pm.response.to.have.jsonSchema(schema);
});
// 3) Проверить что занчение поля name = значению переменной name из окружения
var resp_name = resp.name;
var resp_age = resp.age;

pm.test("check name", function () {
    pm.expect(pm.environment.get("name")).to.eql(resp_name);
});

// // 4) Проверить что занчение поля age в ответе соответсвует отправленному в запросе значению поля age
var req = request.data;
var req_age = req.age;


pm.test("check age", function () {
    pm.expect(req_age).to.eql(resp_age)
});

// 1) Можете взять любой объект из присланного списка, используйте js random.
// В объекте возьмите Cur_ID и передать через окружение в следующий запрос.
var resp = pm.response.json();
var randomObj = resp[Math.floor(Math.random() * resp.length)];

pm.environment.set("Cur_Id", randomObj.Cur_ID);
console.log(randomObj)


