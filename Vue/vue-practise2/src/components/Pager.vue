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
      @click.prevent="handleChange(selected - 1)"
      :class="{ disabled: isTop }"
      >上一页</a
    >
    <a
      href=""
      class="pager-item"
      @click.prevent="handleChange(item)"
      :class="{ active: item == selected }"
      v-for="(item, i) in pageItem"
      :key="i"
      >{{ item }}</a
    >
    <a
      href=""
      class="pager-item"
      @click.prevent="handleChange(selected + 1)"
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
      default: 10,
    },

    perPage: {
      type: Number,
      default: 1,
    },
  },

  data() {
    return {
      selected: 1,
    };
  },

  computed: {
    pageItem() {
      return Math.ceil(this.total / this.perPage);
    },
    isTop() {
      return this.selected == 1;
    },
    isLast() {
      return this.selected == this.total;
    },
  },

  methods: {
    handleChange(pageNum) {
      if (pageNum <= 1) {
        this.selected = 1;
      } else if (pageNum >= this.total) {
        this.selected = this.total;
      } else {
        this.selected = pageNum;
      }

      this.$emit("pageChange", pageNum);
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
