<template>
  <div>
    <v-app>
      <v-app-bar app color="blue darken-3" dark scroll-target="#scroll1" dense>
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

      <v-main>
        <v-container>
          <div style="position:relative;z-index:0">
            <mavon-editor
              min-height="1000px"
              v-model="text"
              :subfield="false"
              :boxShadow="false"
              defaultOpen="preview"
              :toolbarsFlag="false"
            />
          </div>

          <v-card class="mt-8">
            <v-list
              :disabled="disabled"
              :dense="dense"
              :two-line="twoLine"
              :three-line="threeLine"
              :shaped="shaped"
              :flat="flat"
              :subheader="subheader"
              :sub-group="subGroup"
              :nav="nav"
              :avatar="avatar"
              :rounded="rounded"
            >
              <v-subheader>其他文章</v-subheader>
              <v-list-item @click="1" v-for="i in 20" :key="i">
                <v-list-item-content>
                  <v-list-title>title{{i}}</v-list-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-container>
      </v-main>
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
      text: `# Vuetify入门教程
## Vuetify是什么
Vuetify是基于Vue.js的UI组件库。 是遵循谷歌倡导的[Material Design specification](https://material.io/design)，高质量组件。说白了，Vuetify提供了现成的各种组件，即使没有设计方面的知识，也可以非常简单的(通过复制粘贴)来实现炫酷的UI。[官网](https://vuetifyjs.com/zh-Hans/getting-started/quick-start/)提供了非常详细的说明。

## 使用Vuetify创建第一个项目
前提:本地安装好vue-cli环境。`,
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
