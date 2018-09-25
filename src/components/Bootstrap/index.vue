<template>
  <b-container class="bootstrap-ui">

    <b-jumbotron header="Bootstrap Vue" lead="Bootstrap 4 Components for Vue.js 2" >
      <p>For more information visit website</p>
      <b-btn variant="primary" href="#">More Info</b-btn>
    </b-jumbotron>

    <h3>Grid</h3>
    <div class="br-m-b30">
      <grids-element></grids-element>
    </div>

    <h3>Buttons</h3>
    <div class="br-m-b30">
      <buttons-element></buttons-element>
    </div>

    <h3>Modals Element</h3>
    <div class="br-m-b30">
      <modals-element></modals-element>
    </div>

    <h3>Collapse</h3>
    <div class="br-m-b30">
      <collapse-element></collapse-element>
    </div>

    <h3>Cards</h3>
    <div class="br-m-b30">
      <cards-element></cards-element>
    </div>

    <h3>List group</h3>
    <div class="br-m-b30">
      <list-element></list-element>
    </div>

    <h3>Pagination</h3>
    <div class="br-m-b30">
      <pagination-element></pagination-element>
    </div>

    <h3>Forms</h3>
    <div class="br-m-b30">
      <form-ui></form-ui>
    </div>

    <h3>Tables</h3>
    <div class="br-m-b30">
      <tables-element></tables-element>
    </div>

    <h3>Tabs</h3>
    <div class="br-m-b30">
      <tabs-element></tabs-element>
    </div>

    <h3>Images</h3>
    <div class="br-m-b30">
      <images-element></images-element>
    </div>

    <br>
    <br>

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
  import ListElement from './ListElement/index.vue'
  import CollapseElement from './CollapseElement/index.vue'
  import TypeElement from './TypeElement/index.vue'
  import FormUi from './Forms/index.vue'
  import ModalsElement from './ModalsElement/index.vue'
  import PaginationElement from './PaginationElement/index.vue'
  import TablesElement from './TablesElement/index.vue'
  import TabsElement from './TabsElement/index.vue'
  import ImagesElement from './ImagesElement/index.vue'

  export default {
    name: 'BootstrapUi',
    components: {
      GridsElement,
      FormUi,
      TypeElement,
      CollapseElement,
      CardsElement,
      ButtonsElement,
      ModalsElement,
      PaginationElement,
      TablesElement,
      TabsElement,
      ImagesElement,
      ListElement
    },
    props: {},
    methods: {}
  }
</script>
