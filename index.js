// Web scraping in Node
const rp = require('request-promise');
const cherio = require('cheerio');
const Table = require('cli-table');

let users = [];

const options = {
  url: `https://forum.freecodecamp.org/directory_items?period=weekly&order=likes_received&_=1520892991855`,
  json: true
}

rp(options)
  .then((data) => {
    let userData = [];

    for (let user of data.directory_items) {
      userData.push({name: user.user.username,likes_received: user.likes_received});
    }

  })