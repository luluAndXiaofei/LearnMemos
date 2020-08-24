<template>
  <div class="pager">
      <a href="" class="pager-item">首页</a>
      <a href="" class="pager-item">1</a>
      <a href="" class="pager-item">尾页</a>
  </div>
</template>

<script>
export default {
    props: {
        total: {
            default: 0,
        },

        pageItem: {
            default: 1,
        },

    }
}
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