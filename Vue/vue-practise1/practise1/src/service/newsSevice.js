import axios from "axios";

export async function getNewsChannels() {
    var res = await axios.get("newsChannels.json")
    return res.data;
}

export async function getNews() {
    var res = await axios.get("news.json");
    return res.data;
}