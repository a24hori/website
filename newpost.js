const fs = require("fs");

const zeroPadding = num => {
	if (num < 10) {
		return '0' + String(num);
	}else{
		return String(num);
	}
};

const date = new Date();
const Y = zeroPadding(date.getFullYear());
const M = zeroPadding(date.getMonth() + 1);
const D = zeroPadding(date.getDate());
const date_json = date.toJSON();

const template = `
export const meta = {
  date = '${date_json}',
  title: ,
}

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.0/dist/katex.min.css" integrity="sha384-BdGj8xC2eZkQaxoQ8nSLefg4AV4/AwB3Fj+8SUSo7pnKP6Eoy18liIKTPn9oBYNG" crossOrigin="anonymous"/>

Title
=====

Contents
`;

fs.writeFile(`./pages/posts/${Y}${M}${D}.mdx`, template, "utf-8", err => {
	if (err) throw err;
	console.log(`Successfully generated: ${Y}${M}${D}.mdx`);
});
