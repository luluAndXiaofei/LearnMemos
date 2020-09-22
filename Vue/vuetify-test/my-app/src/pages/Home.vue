<template>
  <div>
    <v-app>
      <v-app-bar app color="blue darken-3" dark dense>
        <!-- 默认图标 -->
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <!-- 自定义图标 -->
        <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"><v-icon>mdi-dots-vertical</v-icon></v-app-bar-nav-icon> -->

        <v-toolbar-title>我的技术日志</v-toolbar-title>

        <v-spacer></v-spacer>

        <Tooltip link="main" icon="mdi-home" text="回首页"/>
        <Tooltip link="newBlog" icon="mdi-pen" text="写日志"/>
        <Tooltip icon="mdi-telegram" text="发布"/>

        <v-text-field
          flat
          dense
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="搜索我的日志"
          style="max-width: 200px;"
        ></v-text-field>

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

      <v-navigation-drawer v-model="drawer" app>
        <!-- 指定expand则手动关闭子项 -->
        <v-list dense nav expand>
          <v-list-group
            v-for="(item, i) in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="icon(i)"
            no-action
          >
            <template v-slot:activator>
              <!-- activator具名插槽 触发点击事件可以展开子项 -->
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </template>

            <template v-if="item.items.length != 0">
              <v-list-item
                v-for="subItem in item.items"
                :key="subItem.title"
                @click.stop="handleListItemClick(subItem)"
                :input-value="subItem.active"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="subItem.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>

            <v-list-item v-else>
              <v-list-item-title>
                nothing
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <v-container >
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Tooltip from "../components/Tooltip";

export default {
  components: {
    Tooltip,
  },

  data() {
    return {
      search: true,
      items: [],
      right: null,
      drawer: null,
    };
  },

  created() {
    this.items = [
        {
          title: "Vuetify",
          secondaryText: "Vue的ui库-Vuetify的介绍",
          active: false,
          items: [
            {
              title: "日志1",
              active: false,
            },
            {
              title: "日志2",
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
              active: false,
            },
            {
              title: "日志2",
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
              active: false,
            },
            {
              title: "日志2",
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
              active: false,
            },
            {
              title: "日志2",
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

  methods: {
    handleListItemClick(item) {
      this.clearItemActive();
      item.active = true;
    },

    clearItemActive() {
      // 清除所有列表子项的选中状态
      this.items.map((item) =>
        item.items.map((subItem) => (subItem.active = false))
      );
    },

    icon(index) {
      return index % 2 == 0
        ? "mdi-checkbox-multiple-blank-circle-outline"
        : "mdi-checkbox-multiple-blank-circle";
    },
  },
};
</script>
