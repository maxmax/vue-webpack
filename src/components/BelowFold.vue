<template>
  <div class="container br-m-t30 br-m-b30">
    <div class="row marketing">
      <div class="col-lg-12">
        <h3>{{title}}</h3>
        <p>{{text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BelowFold',
    props: ['title', 'text'],
  }
</script>
