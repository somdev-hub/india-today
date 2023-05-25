export const POST = async (req, res) => {
  const { query } = await req.json();
  // console.log(query);
  const url = `https://newsapi.org/v2/everything?q=${query}&from=2023-05-23&sortBy=popularity&apiKey=${process.env.API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  //   res.status(200).json(data);
  //   console.log(data);
  return new Response(JSON.stringify(data.articles), { status: 200 });
};
