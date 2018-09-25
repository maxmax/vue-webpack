<template>
  <div>
    <b-row class="br-m-b30">
      <b-col>
        <b-list-group>
          <b-list-group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item>Morbi leo risus</b-list-group-item>
          <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
          <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col>
        <b-list-group>
          <b-list-group-item>Cras justo odio</b-list-group-item>
          <b-list-group-item active>Dapibus ac facilisis in</b-list-group-item>
          <b-list-group-item>Morbi leo risus</b-list-group-item>
          <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
          <b-list-group-item>Vestibulum at eros</b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col>
        <b-list-group>
          <b-list-group-item href="#/bye">Bye</b-list-group-item>
          <b-list-group-item href="#some-link">Awesome link</b-list-group-item>
          <b-list-group-item href="#" active>Link with active state</b-list-group-item>
          <b-list-group-item href="#">Action links are easy</b-list-group-item>
          <b-list-group-item href="#foobar" disabled>Disabled link</b-list-group-item>
        </b-list-group>
      </b-col>
      <b-col>
        <b-list-group>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Cras justo odio
            <b-badge variant="primary" pill>14</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Dapibus ac facilisis in
            <b-badge variant="primary" pill>2</b-badge>
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            Morbi leo risus
            <b-badge variant="primary" pill>1</b-badge>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
    <b-row class="br-m-b30">
      <b-col>
        <b-card no-body header="<b>Card with flush list group</b>">
          <b-list-group flush>
            <b-list-group-item href="#">Cras justo odio</b-list-group-item>
            <b-list-group-item href="#">Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item href="#">Vestibulum at eros</b-list-group-item>
          </b-list-group>
          <b-card-body>
            Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex
            nulla tempor. Laborum consequat non elit enim exercitation cillum aliqua
            consequat id aliqua. Esse ex consectetur mollit voluptate est in duis laboris
            ad sit ipsum anim Lorem.
          </b-card-body>
        </b-card>
      </b-col>
      <b-col>
        <b-list-group>
          <b-list-group-item href="#" active class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas
              sed diam eget risus varius blandit.
            </p>
            <small>Donec id elit non mi porta.</small>
          </b-list-group-item>
          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">List group item heading</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas
              sed diam eget risus varius blandit.
            </p>
            <small class="text-muted">Donec id elit non mi porta.</small>
          </b-list-group-item>
          <b-list-group-item href="#" disabled class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">Disabled List group item</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">
              Donec id elit non mi porta gravida at eget metus. Maecenas
              sed diam eget risus varius blandit.
            </p>
            <small class="text-muted">Donec id elit non mi porta.</small>
          </b-list-group-item>
        </b-list-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'ListElement',
    props: {},
    methods: {},
    mounted() {},
    created() {}
  }
</script>
