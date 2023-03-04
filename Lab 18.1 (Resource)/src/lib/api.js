const FIREBASE_DOMAIN = `https://lab-react-c3cba-default-rtdb.firebaseio.com/`;

export const AddQuote = async (quote) => {
  const res = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: "POST",
    body: JSON.stringify(quote),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("test");
  if (!res.ok) throw new Error();

  return null;
};
export const GetAllQuotes = async () => {
  const res = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
  if (!res.ok) throw new Error();
  const data = await res.json();

  let loaderData = [];
  for (let key in data) {
    loaderData.push({
      id: key,
      ...data[key],
    });
  }
  return loaderData;
};

export const GetSingleQuotes = async (quoteId) => {
  const res = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
  if (!res.ok) throw new Error();
  const data = await res.json();
  console.log(data);
  return data;
};
