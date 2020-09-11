<template>
  <div>
    <v-app>
      <v-app-bar app color="blue darken-3" dark dense>
        <!-- 默认图标 -->
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <!-- 自定义图标 -->
        <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"><v-icon>mdi-dots-vertical</v-icon></v-app-bar-nav-icon> -->

        <v-toolbar-title>我的技术日志</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-menu left bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="n in 5" :key="n" @click="() => {}">
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </v-app>

    <v-app>
      <v-navigation-drawer v-model="drawer" app>
        <v-list dense nav>
          <v-list-item-group color="primary">
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              @click="handleClick(item)"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ item.title }} </v-list-item-title>
                <v-list-item-subtitle>{{
                  item.secondaryText
                }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      items: [
        {
          title: "Vuetify",
          icon: "mdi-checkbox-multiple-blank-circle-outline",
          secondaryText: "Vue的ui库-Vuetify的介绍",
        },
        {
          title: "Vue",
          icon: "mdi-checkbox-multiple-blank-circle",
          secondaryText: "前端框架Vue",
        },
        {
          title: "Python",
          icon: "mdi-checkbox-multiple-blank-circle-outline",
          secondaryText: "Python日志",
        },
        {
          title: "Java",
          icon: "mdi-checkbox-multiple-blank-circle",
          secondaryText: "Java日志",
        },
        {
          title: "JavaScript",
          icon: "mdi-checkbox-multiple-blank-circle-outline",
          secondaryText: "JavaScript日志",
        },
        { title: "PostgreSQL", icon: "mdi-checkbox-multiple-blank-circle" },
      ],
      right: null,
      drawer: null,
    };
  },

  methods: {
    handleClick(item) {
      console.log(item.title);
    },
  },
};
</script>
