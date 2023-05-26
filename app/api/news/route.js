export const GET = async (req, res) => {
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  //   res.status(200).json(data);
//   console.log(data);
  return new Response(JSON.stringify(data.articles), { status: 200 });
};
