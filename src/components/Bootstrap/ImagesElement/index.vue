<template>
  <div>

    <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image" />
    <h5>Small image with <code>fluid</code>:</h5>
    <b-img src="https://picsum.photos/300/150/?image=41" fluid alt="Fluid image" />
    <h5 class="my-3">Small image with <code>fluid-grow</code>:</h5>
    <b-img src="https://picsum.photos/300/150/?image=41" fluid-grow alt="Fluid-Grow image" />

    <br>
    <br>

    <b-container fluid class="p-4 bg-dark">
      <b-row>
        <b-col>
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Thumbnail" />
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Thumbnail" />
        </b-col>
      </b-row>
    </b-container>

    <br>
    <br>

    <h4>Blank (or solid color) Images</h4>

    <div>
      <b-img blank width="75" height="75" alt="transparent" class="m-1" />
      <b-img blank width="75" height="75" blank-color="#777" alt="hex shorthand color" class="m-1" />
      <b-img blank width="75" height="75" blank-color="red" alt="named color" class="m-1" />
      <b-img blank width="75" height="75" blank-color="black" alt="named color" class="m-1" />
      <b-img blank width="75" height="75" blank-color="#338833" alt="hex color" class="m-1" />
      <b-img blank width="75" height="75" blank-color="rgba(128,255,255,0.5)" alt="RGBa color" class="m-1" />
      <b-img blank width="75" height="75" blank-color="#88f" alt="hex shorthand color" class="m-1" />
    </div>

    <br>
    <br>

    <b-img-lazy src="https://picsum.photos/600/400/?image=81" center fluid-grow width="600" height="400" blank-color="#bbb" alt="img" class="my-5" />
    <b-img-lazy src="https://picsum.photos/600/400/?image=83" center fluid-grow width="600" height="400" blank-color="#bbb" alt="img" class="my-5" />
    <b-img-lazy src="https://picsum.photos/600/400/?image=84" center fluid-grow width="600" height="400" blank-color="#bbb" alt="img" class="my-5" />

  </div>
</template>

<script>
  export default {
    name: 'ImagesElement',
    props: {},
    methods: {},
    mounted() {},
    created() {}
  }
</script>
