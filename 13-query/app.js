const query = {
  search: 'Вася',
  take: 10,
};

function getQuery(obj) {
  const str = Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join('&');

  return str;
}

console.log(getQuery(query));
