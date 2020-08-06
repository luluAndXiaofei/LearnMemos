import axios from "axios";

export async function getNewsChannles() {
    console.log("getNewsChannles start");
    var res = await axios.get("/newsChannels.json");
    return res.data;
}

export async function getNews() {
    var res = await axios.get("news.json");
    return res.data;
}