export const getOrders = async () => {
  const response = await fetch('http://localhost:3001/api/v1/orders');
  return await response.json();
};

export const postOrder = async (userName, ingredients) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: userName,
      ingredients: ingredients,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.log(error));
};
