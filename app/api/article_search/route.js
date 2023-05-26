import { JSDOM } from "jsdom";
import { Readability } from "@mozilla/readability";
import axios from "axios";

export const POST = async (req, res) => {
  const { query, keyword } = await req.json();

  const url = `https://newsapi.org/v2/everything?q=${query}&from=2023-05-23&sortBy=popularity&apiKey=${process.env.API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  const flag = [];
  flag.push(data.articles[parseInt(keyword)]);
  // data.articles.slice(0, 100).forEach((article) => {
  //   if (article.source.name === keyword) {
  //     flag.push(article);
  //   }
  // });

  //   var content = "";
  async function getArticle() {
    const response = await axios.get(flag[0].url);

    const dom = new JSDOM(response.data, { url: flag[0].url });
    const reader = new Readability(dom.window.document).parse();
    return reader.textContent;
  }
  const content = await getArticle();
  // console.log(content);
  flag[0].content = content;
  // console.log(flag[0].content);

  return new Response(JSON.stringify(flag[0]), { status: 200 });
  //   console.log(flag[0].content);
};
