import express from "express";
import puppeteer from "puppeteer-extra";
import StealthPlugin from "puppeteer-extra-plugin-stealth";
import cors from "cors";
import createArProposal from "./createProposal/arProposal.js";
const app = express();

app.use(cors());

app.get("/khamsat/", async (req, res) => {
  const browser = await puppeteer
    .use(StealthPlugin())
    .launch({ headless: true });
  const page = await browser.newPage();
  if (!req.headers.link) {
    console.log("invalid");
    res.send("<div><strong>Error!</strong> Link is empty</div>");
    return;
  }
  await page.goto(req.headers.link);
  const content = await page.evaluate(() => {
    let content = document.querySelector(".sidebar_user");
    // return of not null
    return content ? content.innerHTML : null;
  });
  console.log(content);
  console.log(req.query.lang);
  console.log(createArProposal(content));
  res.send(createArProposal(content));
  await browser.close();
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
