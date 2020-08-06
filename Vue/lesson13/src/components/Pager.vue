<template>
  <div class="pager" v-if="total > 0">
    <a
      href=""
      class="pager-item"
      :class="{
        disabled: page == 1,
      }"
      @click.prevent="handleChange(1)"
      >首页</a
    >
    <a
      href=""
      class="pager-item"
      :class="{
        disabled: page == 1,
      }"
      @click.prevent="handleChange(page - 1)"
      >上一页</a
    >

    <a
      href=""
      class="pager-item"
      :class="{ active: n == page }"
      v-for="n in numbers"
      :key="n"
      @click.prevent="handleChange(n)"
    >
      {{ n }}
    </a>

    <a
      href=""
      class="pager-item"
      :class="{
        disabled: page == pageNumber,
      }"
      @click.prevent="handleChange(page + 1)"
      >下一页</a
    >

    <a
      href=""
      class="pager-item"
      :class="{
        disabled: page == pageNumber,
      }"
      @click.prevent="handleChange(pageNumber)"
      >尾页</a
    >

    <span class="pager-text">
      <i> {{ page }} </i>/
      <i>{{ pageNumber }}</i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    page: {
      default: 1,
      type: Number,
    },
    total: {
      default: 0,
      type: Number,
    },
    limit: {
      default: 10,
      type: Number,
    },
    panelNumber: {
      default: 10,
      type: Number,
    },
  },

  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limit);
    },
    minNumber() {
      var n = this.page - this.panelNumber / 2;
      if (n < 1) {
        n = 1;
      }

      return n;
    },
    maxNumber() {
      var n = this.minNumber + this.panelNumber - 1;
      if (n > this.pageNumber) {
        n = this.pageNumber;
      }

      return n;
    },
    numbers() {
      var nums = [];
      for (var i = this.minNumber; i <= this.maxNumber; i++) {
        nums.push(i);
      }

      return nums;
    },
  },

  methods: {
    handleChange(newPage) {
      if (newPage < 1) {
        newPage = 1;
      } else if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage == this.page) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
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
