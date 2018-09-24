<template>
  <div>
    <h6>Default</h6>
    <b-pagination align="center" size="md" :total-rows="100" v-model="currentPage" :per-page="10">
    </b-pagination>
    <br>

    <h6>Small</h6>
    <b-pagination align="center" size="sm" :total-rows="100" v-model="currentPage" :per-page="10">
    </b-pagination>
    <br>

    <h6>Large</h6>
    <b-pagination align="center" size="lg" :total-rows="100" v-model="currentPage" :per-page="10">
    </b-pagination>
    <br>

    <div>currentPage: {{currentPage}}</div>

    <br>
    <br>

    <div>
      <h6>Default</h6>
      <b-pagination-nav base-url="#" :number-of-pages="10" v-model="currentPage" />

      <h6 class="mt-4">With link generator function</h6>
      <b-pagination-nav :link-gen="linkGen" :number-of-pages="10" v-model="currentPage" />

      <div class="mt-4">currentPage: {{currentPage}}</div>
    </div>

    <div>
      <b-pagination-nav :link-gen="linkGenPage"
                        :page-gen="pageGen"
                        :number-of-pages="links.length"
                        v-model="currentPage" />
      <br>
      <p>
        Page #: {{ currentPage }}<br>
        Page Link: {{ pageLink }}
      </p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'PaginationElement',
    computed: {
      pageLink () {
        return this.linkGen(this.currentPage)
      }
    },
    data () {
      return {
        currentPage: 1,
        links: ['#foo', '#bar', '#baz', '#faz']
      }
    },
    methods: {
      linkGen (pageNum) {
        return '#page/' + pageNum + '/foobar'
      },
      linkGenPage (pageNum) {
        return this.links[pageNum - 1]
      },
      pageGen (pageNum) {
        return this.links[pageNum - 1].slice(1)
      }
    }
  }
</script>
