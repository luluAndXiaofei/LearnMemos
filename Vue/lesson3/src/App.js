import UserInfo from "./components/UserInfo.js";

var template = `<div id="app">
<h1>
    {{title}}
</h1>
<UserInfo v-for="(item, i) in users" :key="i" :name="item.name" :age="item.age" />
</div>`;

export default {
  template,
  components: {
    UserInfo,
  },
  data() {
    return {
      users: [
        { name: "lulu", age: 18 },
        { name: "xiaofei", age: 18 },
        { name: "yaojin", age: 3 },
      ],
    };
  },
};
