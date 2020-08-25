<template>
  <div class="pager">
    <a
      href=""
      class="pager-item"
      @click.prevent="handleChange(1)"
      :class="{ disabled: isTop }"
      >首页</a
    >
    <a
      href=""
      class="pager-item"
      @click.prevent="handleChange(page - 1)"
      :class="{ disabled: isTop }"
      >上一页</a
    >
    <a
      href=""
      class="pager-item"
      @click.prevent="handleChange(item)"
      :class="{ active: item == page }"
      v-for="(item, i) in pageItem"
      :key="i"
      >{{ item }}</a
    >
    <a
      href=""
      class="pager-item"
      @click.prevent="handleChange(page + 1)"
      :class="{ disabled: isLast }"
      >下一页</a
    >
    <a
      href=""
      class="pager-item"
      @click.prevent="handleChange(total)"
      :class="{ disabled: isLast }"
      >尾页</a
    >
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },

    perPage: {
      type: Number,
      default: 1,
    },

    page: {
      type: Number,
      default: 1,
    }
  },

  computed: {
    pageItem() {
      return Math.ceil(this.total / this.perPage);
    },
    isTop() {
      return this.page == 1;
    },
    isLast() {
      return this.page == this.pageItem;
    },
  },

  methods: {
    handleChange(newPage) {
      if (newPage <= 1) {
        newPage = 1;
      } 
      if (newPage >= this.pageItem) {
        newPage = this.pageItem;
      } 
      if (newPage == this.page) {
        return;
      }

      this.$emit("pageChange", newPage);
    }
  },
};
</script>

<style>
.pager {
  text-align: center;
  margin: 20px 0;
}

.pager .pager-item {
  display: inline-block;
  padding: 5px 7px;
  border: 1px solid #ccc;
  margin: 8px;
  cursor: pointer;
  color: rgb(96, 96, 224);
}

.pager .pager-item.disabled {
  color: #ccc;
  cursor: not-allowed;
}

.pager .pager-item.active {
  color: #f40;
  border: none;
  cursor: auto;
}
</style>
