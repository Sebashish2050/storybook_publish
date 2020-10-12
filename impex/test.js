var arrays = [{name: 'a', count: 5}, {name: 'a', count: 10},{name: 'b', count: 5}, {name: 'b', count: 10}];

const newObj = {};
arrays.forEach(arr => {
  newObj[arr.name] = arr.count + (newObj[arr.name] || 0);
});

const newObject1 = arrays.reduce((acc, arr) => {
  acc[arr.name] = arr.count + (acc[arr.name] || 0);
  return acc;
}, {});

console.log('newObjet::: ', newObj);
console.log('newObject1::: ', newObject1);