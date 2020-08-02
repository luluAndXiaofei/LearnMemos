async function testAwait() {
  var data = await "123";
  var data2 = await data;
  console.log(data2);
  return data;
}

testAwait();
console.log("end");
