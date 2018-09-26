<template>
  <div class="markdown-container br-m-b20">
    <h2>{{title}}</h2>
    <b-card no-body>
      <b-row>
        <b-col>
          <textarea v-bind:value="input" @input="update"></textarea>
        </b-col>
        <b-col>
          <div class="markdown-content">
            <div v-html="compiledMarkdown"></div>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
  import marked from 'marked'
  import _ from 'lodash'

  export default {
    name: 'MarkdownCode',
    props: {
      title: {
        type: String,
        default: 'Markdown'
      },
    },
    data: function(){
      return {
        input: '# hello'
      }
    },
    computed: {
      compiledMarkdown: function () {
        return marked(this.input, { sanitize: true })
      }
    },
    methods: {
      update: _.debounce(function (e) {
        this.input = e.target.value
      }, 300)
    }
  }
</script>

<style scoped lang="scss">
  .markdown-container {
    textarea {
      border: none;
      border-right: 1px solid #ccc;
      resize: none;
      outline: none;
      background-color: #f6f6f6;
      font-size: 14px;
      font-family: 'Monaco', courier, monospace;
      padding: 20px;
      width: 100%;
      height: 100%;
    }
    code {
      color: #f66;
    }
    .markdown-content {
      border: 1px dashed #ccc;
      margin: 20px;
      padding: 20px;
    }
    .card {
      .col {
        height: 300px;
      }
    }
  }
</style>
