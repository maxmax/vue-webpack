<template>
  <b-container class="bootstrap-ui">

    <h2>Bootstrap vue</h2>

    <h3>Grid</h3>
    <div class="br-m-b30">
      <grids-element></grids-element>
    </div>

    <h3>Buttons</h3>
    <div class="br-m-b30">
      <buttons-element></buttons-element>
    </div>

    <h3>Cards</h3>
    <div class="br-m-b30">
      <cards-element></cards-element>
    </div>

    <h3>Collapse</h3>
    <div class="br-m-b30">
      <collapse-element></collapse-element>
    </div>

    <h3>Forms</h3>
    <div class="br-m-b30">
      <form-ui></form-ui>
    </div>

    <h3>Type Element</h3>
    <div class="br-m-b30">
      <type-element></type-element>
    </div>
    
  </b-container>
</template>

<script>
  import GridsElement from './GridsElement/index.vue'
  import ButtonsElement from './ButtonsElement/index.vue'
  import CardsElement from './CardsElement/index.vue'
  import CollapseElement from './CollapseElement/index.vue'
  import TypeElement from './TypeElement/index.vue'
  import FormUi from './Forms/index.vue'
  export default {
    name: 'BootstrapUi',
    components: {
      GridsElement,
      FormUi,
      TypeElement,
      CollapseElement,
      CardsElement,
      ButtonsElement
    },
    props: {},
    methods: {}
  }
</script>
