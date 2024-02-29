function mergeObjects(objects) {
  const allObjects = {};
  objects.forEach((object) => {
    Object.entries(object).forEach(([key, value]) => {
      allObjects[key] = (allObjects[key] || 0) + value;
    });
  });
  return allObjects;
}

console.log(
  mergeObjects([
    { a: 1, b: 2 },
    { b: 3, c: 5 },
  ])
);
// => {a: 1, b: 5, c: 5})
