import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";
import axios from "axios";

const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}`;
export const GET = async (req, res) => {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  return new Response(JSON.stringify(data.articles), { status: 200 });
};

export const POST = async (req, res) => {
  const { keyword, country } = await req.json();
  // console.log(keyword, country);
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  const flag = [];
  flag.push(data.articles[parseInt(keyword)]);
  try {
    async function getArticle() {
      const response = await axios.get(flag[0]?.url);

      const dom = new JSDOM(response.data, { url: flag[0].url });
      const reader = new Readability(dom.window.document).parse();
      return reader.textContent;
    }
    const content = await getArticle();
    // console.log(content);
    flag[0].content = content;
    // console.log(flag[0].content);
    return new Response(JSON.stringify(flag[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      statusText: error
    });
  }

  //   console.log(flag[0].content);
};
