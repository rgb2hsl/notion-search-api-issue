import axios from "axios";

const notionToken = "your notion token";

// as described on https://developers.notion.com/reference/post-search
const options = {
    method: 'post',
    url: 'https://api.notion.com/v1/search',
    headers: {
        Accept: 'application/json',
        'Notion-Version': '2022-02-22',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${notionToken}`
    },
    data: {
        query: "test",
        page_size: 100
    }
};

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});