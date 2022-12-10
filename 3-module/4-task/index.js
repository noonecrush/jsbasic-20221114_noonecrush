function showSalary(users, age) {
  const filtered = users.filter(item => {
    return item.age <= age
   });
   const mapped = filtered.map(item => {
    return item.name + ', ' + item.balance
   });
   return mapped.join('\n');
};