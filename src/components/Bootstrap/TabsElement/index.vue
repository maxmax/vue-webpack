<template>
  <div>

    <b-tabs>
      <b-tab title="first" active>
        <br>I'm the first fading tab
      </b-tab>
      <b-tab title="second" >
        <br>I'm the second tab content
      </b-tab>
      <b-tab title="disabled" disabled>
        <br>Disabled tab!
      </b-tab>
    </b-tabs>

    <br>

    <b-card no-body>
      <b-tabs card>
        <b-tab title="Tab 1" active>
          Tab Contents 1
        </b-tab>
        <b-tab title="Tab 2">
          Tab Contents 2
        </b-tab>
      </b-tabs>
    </b-card>

    <br>

    <b-card no-body>
      <b-tabs pills card>
        <b-tab title="Tab 1" active>
          Tab Contents 1
        </b-tab>
        <b-tab title="Tab 2">
          Tab Contents 2
        </b-tab>
      </b-tabs>
    </b-card>

    <br>

    <div>
      <!-- Tabs with card integration -->
      <b-card no-body>
        <b-tabs small card v-model="tabIndex">
          <b-tab title="General">
            I'm the first fading tab
          </b-tab>
          <b-tab title="Edit profile">
            I'm the second tab
            <b-card>I'm the card in tab</b-card>
          </b-tab>
          <b-tab title="Premium Plan" disabled>
            Sibzamini!
          </b-tab>
          <b-tab title="Info">
            I'm the last tab
          </b-tab>
        </b-tabs>
      </b-card>

      <!-- Control buttons-->
      <div class="text-center">
        <b-button-group class="mt-2">
          <b-btn @click="tabIndex--">Previous</b-btn>
          <b-btn @click="tabIndex++">Next</b-btn>
        </b-button-group>
        <br>
        <span class="text-muted">Current Tab: {{tabIndex}}</span>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'TabsElement',
    props: {},
    data () {
      return {
        tabIndex: 0
      }
    },
    methods: {},
    mounted() {},
    created() {}
  }
</script>
