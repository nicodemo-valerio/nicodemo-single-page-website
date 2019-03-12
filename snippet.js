// Object literal (recommended)
var newObject = {
  fieldName0: "value0",
  arrayField: ["value0", "value1"],
  innerObject: {
    fieldNameName1: "value1",
    fieldNameName2: "value2",
  },
  functionName: function(){
    return "This is field 0="+this.fieldName0;
  }
}

// Object new
var newObject = new Object();
newObject.fieldName0 = "value0";
newObject.functionName = function(){
  return "This is field 0="+this.fieldName0;
};

// Object constructor
var newObject = new NewObject(field0, field1){
  this.field0 = field0;
  this.field1 = field1;
  this.functionName = function functionName() {
    return this.field0 +" "+this.field1;
  }
}

var item = newObject("Nicodemo", "Valerio");

// JSON
{
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
}

// Read a JSON object to a string
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
// Convert the string to a js object array
var obj = JSON.parse(text);
// Use
document.getElementById("demo").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;
