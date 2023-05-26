export const POST = async (req, res) => {
  const { country } = await req.json();
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
//   console.log(data);
  return new Response(JSON.stringify(data.articles), { status: 200 });
};
