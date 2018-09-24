<template>
  <div>
    <b-row class="br-m-b30">
      <b-col>
        <b-card title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>
      <b-col>
        <b-card title="Card title"
                sub-title="Card subtitle">
            <p class="card-text">
                Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.
            </p>
            <a href="#"
               class="card-link">Card link</a>
            <b-link href="#"
                    class="card-link">Another link</b-link>
        </b-card>
      </b-col>
      <b-col>
        <b-card bg-variant="dark" text-variant="white" title="Card Title">
          <p class="card-text">
            With supporting text below as a natural lead-in to additional content.
          </p>
          <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
      </b-col>
      <b-col>
        <b-card bg-variant="success"
                text-variant="white"
                header="Success"
                class="text-center">
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="br-m-b30">
      <b-col>
        <b-card overlay
                img-src="https://picsum.photos/900/250/?image=36"
                img-alt="Card Image"
                text-variant="white"
                title="Image Overlay">
          <p class="card-text lead">
            Some quick example text to build on the card and make
            up the bulk of the card's content.
          </p>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'CardsElement',
    props: {},
    methods: {},
    mounted() {},
    created() {}
  }
</script>
