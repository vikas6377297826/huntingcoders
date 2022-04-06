import * as fs from "fs";

export default async function handler(req, res) {
  const data = await fs.promises.readdir("blogdata");

  let myFile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    // console.log(element);
    myFile = await fs.promises.readFile(`blogdata/${element}`, "utf-8");
    console.log(myFile);
    allBlogs.push(JSON.parse(myFile));
  }
  res.status(200).json(allBlogs);
}
