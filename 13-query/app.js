const query = {
  search: 'Вася',
  take: 10,
};

function getQuery(obj) {
  let str = '';

  for (let key in obj) {
    str += `${key}=${obj[key]}&`;
  }

  return str.slice(0, str.length - 1);
}

console.log(getQuery(query));
