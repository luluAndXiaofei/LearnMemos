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
        <!-- 指定expand则手动关闭子项 -->
        <v-list dense nav expand>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.icon"
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
          icon: "mdi-checkbox-multiple-blank-circle",
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
          icon: "mdi-checkbox-multiple-blank-circle-outline",
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
          icon: "mdi-checkbox-multiple-blank-circle",
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
          icon: "mdi-checkbox-multiple-blank-circle-outline",
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
          icon: "mdi-checkbox-multiple-blank-circle",
          items: [],
        },
      ],
      right: null,
      drawer: null,
    };
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
  },
};
</script>
