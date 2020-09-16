<template>
  <div>
    <v-card style="position:relative;z-index:0">
      <v-card-actions >
        <v-btn right absolute text color="primary">编辑</v-btn>
        <h1>Vuetify入门教程:让你轻松的构建前端ui</h1>
      </v-card-actions>

      <v-card-text class="mb-8">2020年7月28日 阅读量:100</v-card-text>

      <mavon-editor
        min-height="1000px"
        v-model="text"
        :subfield="false"
        defaultOpen="preview"
        :toolbarsFlag="false"
      />
    </v-card>

    <v-card class="mt-8">
      <v-list>
        <v-subheader>其他文章</v-subheader>
        <v-list-item @click="1" v-for="i in 20" :key="i">
          <v-list-item-content>
            <v-list-item-title>title{{ i }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogId: this.$route.params.blogId,
      text: `# Vuetify入门教程
## Vuetify是什么
Vuetify是基于Vue.js的UI组件库。 是遵循谷歌倡导的[Material Design specification](https://material.io/design)，高质量组件。说白了，Vuetify提供了现成的各种组件，即使没有设计方面的知识，也可以非常简单的(通过复制粘贴)来实现炫酷的UI。[官网](https://vuetifyjs.com/zh-Hans/getting-started/quick-start/)提供了非常详细的说明。

## 使用Vuetify创建第一个项目
前提:本地安装好vue-cli环境。

## Vuetify是什么
Vuetify是基于Vue.js的UI组件库。 是遵循谷歌倡导的[Material Design specification](https://material.io/design)，高质量组件。说白了，Vuetify提供了现成的各种组件，即使没有设计方面的知识，也可以非常简单的(通过复制粘贴)来实现炫酷的UI。[官网](https://vuetifyjs.com/zh-Hans/getting-started/quick-start/)提供了非常详细的说明。

## 使用Vuetify创建第一个项目
前提:本地安装好vue-cli环境。


### Vuetify是什么
Vuetify是基于Vue.js的UI组件库。 是遵循谷歌倡导的[Material Design specification](https://material.io/design)，高质量组件。说白了，Vuetify提供了现成的各种组件，即使没有设计方面的知识，也可以非常简单的(通过复制粘贴)来实现炫酷的UI。[官网](https://vuetifyjs.com/zh-Hans/getting-started/quick-start/)提供了非常详细的说明。

### 使用Vuetify创建第一个项目
前提:本地安装好vue-cli环境。


### Vuetify是什么
Vuetify是基于Vue.js的UI组件库。 是遵循谷歌倡导的[Material Design specification](https://material.io/design)，高质量组件。说白了，Vuetify提供了现成的各种组件，即使没有设计方面的知识，也可以非常简单的(通过复制粘贴)来实现炫酷的UI。[官网](https://vuetifyjs.com/zh-Hans/getting-started/quick-start/)提供了非常详细的说明。

### 使用Vuetify创建第一个项目
前提:本地安装好vue-cli环境。


### Vuetify是什么
Vuetify是基于Vue.js的UI组件库。 是遵循谷歌倡导的[Material Design specification](https://material.io/design)，高质量组件。说白了，Vuetify提供了现成的各种组件，即使没有设计方面的知识，也可以非常简单的(通过复制粘贴)来实现炫酷的UI。[官网](https://vuetifyjs.com/zh-Hans/getting-started/quick-start/)提供了非常详细的说明。

### 使用Vuetify创建第一个项目
前提:本地安装好vue-cli环境。


`,
    };
  },
};
</script>

<style></style>
