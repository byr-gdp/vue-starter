<template>
  <h1>home</h1>
  <a href="/#!/login">login</a>
  <a href="/#!/signup">signup</a>
  <my-header></my-header>
</template>

<script>
module.exports = {
  data: function() {
    return {
      
    }
  },
  components: {
    // 子组件命名存疑：将 my-header 改为 header 不生效
    'my-header': require('../components/header.vue'),
  }
}
</script>