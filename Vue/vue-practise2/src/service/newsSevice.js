import axios from "axios";

export async function getNewsChannels() {
    var res = await axios.get("/newsChannels.json")
    return res.data;
}

export async function getNews(id) {
    var jsonData = "/news2.json";
    if (id % 2 == 0) {
        jsonData = "/news.json";
    }
    var res = await axios.get(jsonData);
    return res.data;
}
