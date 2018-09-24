<template>
  <div>
    <b-btn v-b-toggle.collapse2 class="m-1">Toggle Collapse</b-btn>
    <b-btn v-b-toggle="'collapse2'" class="m-1">Toggle Collapse</b-btn>
    <b-collapse id="collapse2">
      <b-card>
        I am collapsable content!
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
  export default {
    name: 'CollapseElement',
    props: {},
    methods: {},
    mounted() {},
    created() {}
  }
</script>
