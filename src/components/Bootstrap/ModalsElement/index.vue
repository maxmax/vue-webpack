<template>
  <div>
    <b-btn v-b-modal.modal1>Launch demo modal</b-btn>

    <!-- Using modifiers -->
    <b-btn v-b-modal.myModal>Show Modal Using modifiers</b-btn>

    <!-- Using value -->
    <b-btn v-b-modal="'myModal'">Show Modal Using value</b-btn>

    <!-- Using show() and hide() component methods -->
    <b-button @click="showModal">
      Open Modal on method
    </b-button>

    <!-- Prevent Closing -->
    <b-btn v-b-modal.modalPrevent>Submit your name</b-btn>


    <!-- Modal Component -->
    <b-modal id="modal1" title="Bootstrap-Vue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>

    <!-- Modal Component -->
    <b-modal id="myModal" title="Bootstrap-Vue">
      <p class="my-4">Using modifiers, Using value - Hello from modal!</p>
    </b-modal>

    <!-- Using show() and hide() component methods -->
    <b-modal ref="myModalRef" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Hello From My Modal!</h3>
      </div>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
    </b-modal>


    <!-- Prevent Closing -->
    <div class="mt-3 mb-3">
      Submitted Names:
      <ul>
        <li v-for="n in names">{{n}}</li>
      </ul>
    </div>
    <!-- Modal Component -->
    <b-modal id="modalPrevent"
             ref="modal"
             title="Submit your name"
             @ok="handleOk"
             @shown="clearName">
      <form @submit.stop.prevent="handleSubmit">
        <b-form-input type="text"
                      placeholder="Enter your name"
                      v-model="name"></b-form-input>
      </form>
    </b-modal>

  </div>
</template>

<script>
  export default {
    name: 'ModalsElement',
    props: {},
    data () {
      return {
        name: '',
        names: []
      }
    },
    methods: {
      showModal () {
        this.$refs.myModalRef.show()
      },
      hideModal () {
        this.$refs.myModalRef.hide()
      },
      clearName () {
        this.name = ''
      },
      handleOk (evt) {
        // Prevent modal from closing
        evt.preventDefault()
        if (!this.name) {
          alert('Please enter your name')
        } else {
          this.handleSubmit()
        }
      },
      handleSubmit () {
        this.names.push(this.name)
        this.clearName()
        this.$refs.modal.hide()
      }
    },
    mounted() {},
    created() {}
  }
</script>
