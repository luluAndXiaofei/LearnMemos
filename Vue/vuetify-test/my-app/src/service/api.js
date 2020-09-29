import axios from "axios";

const baseURI = "";
var GET_PASSAGE_LIST_URL = `${baseURI}/passages`;
var GET_PASSAGE_LABEL_LIST_URL = `${baseURI}/passages/label`;
var GET_CATEGORY_LIST_URL = `${baseURI}/category`;

export async function httpPost(url, data) {
  return await axios.post(url, data);
}

export async function httpGet(url) {
  return await axios.get(url);
}

export var api = {
  async getCategoryList() {
    var url = GET_CATEGORY_LIST_URL;
    console.log(url);
    return [
        {
          title: "Vuetify",
          secondaryText: "Vue的ui库-Vuetify的介绍",
          active: false,
          items: [
            {
              title: "日志1",
              active: false,
              passageId: 1,
            },
            {
              title: "日志2",
              passageId: 1,
              active: false,
            },
          ],
        },
        {
          title: "Vue",
          secondaryText: "前端框架Vue",
          active: false,
          items: [
            {
              title: "日志1",
              passageId: 1,
              active: false,
            },
            {
              title: "日志2",
              active: false,
            },
          ],
        },
        {
          title: "Python",
          secondaryText: "Python日志",
          items: [
            {
              title: "日志1",
              passageId: 1,
              active: false,
            },
            {
              title: "日志2",
              passageId: 1,
              active: false,
            },
          ],
        },
        {
          title: "Java",
          secondaryText: "Java日志",
          items: [
            {
              title: "日志1",
              passageId: 1,
              active: false,
            },
            {
              title: "日志2",
              passageId: 1,
              active: false,
            },
          ],
        },
        {
          title: "JavaScript",
          secondaryText: "JavaScript日志",
          items: [
            {
              title: "日志1",
              passageId: 1,
              active: false,
            },
            {
              title: "日志2",
              passageId: 1,
              active: false,
            },
          ],
        },
        {
          title: "PostgreSQL",
          items: [],
        },
      ];
  },

  async getPassageListByLabel(label) {
    var url = `${GET_PASSAGE_LABEL_LIST_URL}/${label}`;
    console.log(url);
    return [
      {
        title: `标签为${label}的文章1`,
        subTitle: "我的文章副标题。也就是第一句话",
        views: 256,
        updateTime: 1,
      },
      {
        title: `标签为${label}的文章2`,
        subTitle: "我的文章副标题。也就是第一句话",
        views: 256,
        updateTime: 1,
      },
      {
        title: `标签为${label}的文章3`,
        subTitle: "我的文章副标题。也就是第一句话",
        views: 256,
        updateTime: 1,
      },
    ];
  },

  async getPassageById(passageId) {
    var url = `${GET_PASSAGE_LIST_URL}/${passageId}`;
    console.log(url);
  },

  async getPassageList() {
    var url = GET_PASSAGE_LIST_URL;

    console.log(url);

    // return httpGet(url);

    return [
      {
        title: "我的文章1",
        subTitle: "我的文章副标题。也就是第一句话",
        views: 256,
        updateTime: 1,
      },
      {
        title: "我的文章1",
        subTitle: "我的文章副标题。也就是第一句话",
        views: 256,
        updateTime: 1,
      },
      {
        title: "我的文章1",
        subTitle: "我的文章副标题。也就是第一句话",
        views: 256,
        updateTime: 1,
      },
      {
        title: "我的文章1",
        subTitle: "我的文章副标题。也就是第一句话",
        views: 256,
        updateTime: 1,
      },
      {
        title: "我的文章1",
        subTitle: "我的文章副标题。也就是第一句话",
        views: 256,
        updateTime: 1,
      },
      {
        title: "我的文章1",
        subTitle: "我的文章副标题。也就是第一句话",
        views: 256,
        updateTime: 1,
      },
      {
        title: "我的文章1",
        subTitle: "我的文章副标题。也就是第一句话",
        views: 256,
        updateTime: 1,
      },
      {
        title: "我的文章1",
        subTitle: "我的文章副标题。也就是第一句话",
        views: 256,
        updateTime: 1,
      },
      {
        title: "我的文章1",
        subTitle: "我的文章副标题。也就是第一句话",
        views: 256,
        updateTime: 1,
      },
    ];
  },
};
