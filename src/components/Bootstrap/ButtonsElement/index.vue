<template>
  <div>

    <div class="row">
      <template v-for="variant in ['primary','secondary','success','outline-success','warning','danger','link']">
        <div class="col-md-4 pb-2" v-for="size in ['sm','','lg']" :key="`${variant}_${size}`">
          <b-button :size="size" :variant="variant">
            {{variant}} {{size}}
          </b-button>
        </div>
      </template>
    </div>

    <b-row class="br-m-b30">
      <b-col>

        <div class="br-m-b20">
          <h5>Toggleable Button</h5>
          <b-button :pressed.sync="myToggle" variant="primary">Toggle Me</b-button>
          <p>Pressed State: <strong>{{ myToggle }}</strong></p>
        </div>
        <div class="br-m-b20">
          <h5>Toggleable Button - In a button group </h5>
            <b-button-group size="sm">
              <b-button v-for="btn in myToggleButtons" :pressed.sync="btn.state" :variant="btn.variant" :key="btn.variant">
                {{ btn.caption }}
              </b-button>
            </b-button-group>
            <p>Pressed States: <strong>{{ btnStates }}</strong></p>
        </div>

        <div class="br-m-b20">
          <h5>Sizing</h5>
          <b-button-group>
            <b-button>Button 1</b-button>
            <b-button>Button 2</b-button>
            <b-button>Button 3</b-button>
          </b-button-group>
          <br><br>
          <b-button-group size="sm">
            <b-button>Left</b-button>
            <b-button>Middle</b-button>
            <b-button>Right</b-button>
          </b-button-group>
          <br><br>
          <b-button-group size="lg">
            <b-button>Left</b-button>
            <b-button>Middle</b-button>
            <b-button>Right</b-button>
          </b-button-group>
        </div>

        <h4>Button elements</h4>

        <div class="br-m-b20">
          <b-button>I am a Button</b-button>
          <b-button href="#">I am a Link</b-button>
        <div class="br-m-b20">

        </div>
          <b-button disabled variant="success">Disabled</b-button>
          <b-button variant="success">Not Disabled</b-button>
          <b-button :pressed="true" variant="success">Always Pressed</b-button>
          <b-button :pressed="false" variant="success">Not Pressed</b-button>
        </div>

      </b-col>
      <b-col>

        <div class="br-m-b20">
          <h5>Vertical variation</h5>
          <div>
            <b-button-group vertical>
              <b-button>Top</b-button>
              <b-button>Middle</b-button>
              <b-button>Bottom</b-button>
            </b-button-group>
          </div>
        </div>

        <div class="br-m-b20">
          <h5>Dropdown menu support</h5>
          <b-button-group>
            <b-button>Button 1</b-button>
            <b-button>Button 2</b-button>
            <b-dropdown right text="Menu">
              <b-dropdown-item>Item 1</b-dropdown-item>
              <b-dropdown-item>Item 2</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>Item 3</b-dropdown-item>
            </b-dropdown>
            <b-button>Button 3</b-button>
            <b-dropdown right split text="Split Menu">
              <b-dropdown-item>Item 1</b-dropdown-item>
              <b-dropdown-item>Item 2</b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>Item 3</b-dropdown-item>
            </b-dropdown>
          </b-button-group>
        </div>

        <div class="br-m-b20">
          <b-dropdown id="ddown-header" text="Dropdown" class="m-2">
            <b-dropdown-header>Dropdown header</b-dropdown-header>
            <b-dropdown-item-button>First item</b-dropdown-item-button>
            <b-dropdown-item-button>Second Item</b-dropdown-item-button>
          </b-dropdown>
          <b-dropdown id="ddown-left" text="Left align" variant="primary" class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>
          <b-dropdown id="ddown-right" right text="Right align" variant="primary" class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>
          <b-dropdown id="ddown-dropup" dropup text="Drop-Up" variant="info" class="m-2">
            <b-dropdown-item href="#">Action</b-dropdown-item>
            <b-dropdown-item href="#">Another action</b-dropdown-item>
            <b-dropdown-item href="#">Something else here</b-dropdown-item>
          </b-dropdown>
        </div>

        <div class="br-m-b20">
          <h5>Button toolbar</h5>
          <b-button-toolbar key-nav  aria-label="Toolbar with button groups">
            <b-button-group class="mx-1">
              <b-btn>&laquo;</b-btn>
              <b-btn>&lsaquo;</b-btn>
            </b-button-group>
            <b-button-group class="mx-1">
              <b-btn>Edit</b-btn>
              <b-btn>Undo</b-btn>
              <b-btn>Redo</b-btn>
            </b-button-group>
            <b-button-group class="mx-1">
              <b-btn>&rsaquo;</b-btn>
              <b-btn>&raquo;</b-btn>
            </b-button-group>
          </b-button-toolbar>
        </div>

        <b-container fluid>
          <b-row class="text-center">
            <b-col md="3" class="py-3">
              <b-btn v-b-popover.hover.top="'Popover!'" variant="primary">Top</b-btn>
            </b-col>
            <b-col md="3" class="py-3">
              <b-btn v-b-popover.hover.right="'Popover!'" variant="primary">Right</b-btn>
            </b-col>
            <b-col md="3" class="py-3">
              <b-btn v-b-popover.hover.left="'Popover!'" variant="primary">Left</b-btn>
            </b-col>
            <b-col md="3" class="py-3">
              <b-btn v-b-popover.hover.bottom="'ToolTip!'" variant="primary">Bottom</b-btn>
            </b-col>
          </b-row>
        </b-container>

      </b-col>
    </b-row>

    <b-container fluid>
      <h5>Triggers</h5>
      <b-row class="text-center">
        <b-col md="6" class="py-3">
          <b-btn v-b-popover="'Popover!'" variant="outline-success">Click (default)</b-btn>
        </b-col>
        <b-col md="6" class="py-3">
          <b-btn v-b-popover.hover="'Popover!'" variant="outline-success">Hover</b-btn>
        </b-col>
        <b-col md="6" class="py-3">
          <b-btn v-b-popover.focus="'Popover!'" variant="outline-success">Focus</b-btn>
        </b-col>
        <b-col md="6" class="py-3">
          <b-btn v-b-popover.hover.focus="'Popover!'" variant="outline-success">Hover + Focus</b-btn>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
  export default {
    name: 'ButtonsElement',
    props: {},
    data: function(){
      return {
        myToggle: false,
        myToggleButtons: [
          { variant: 'primary', caption: 'Toggle 1', state: true },
          { variant: 'danger', caption: 'Toggle 2', state: false },
          { variant: 'warning', caption: 'Toggle 3', state: true },
          { variant: 'success', caption: 'No Toggle', state: null },
          { variant: 'outline-success', caption: 'Toggle 5', state: false },
          { variant: 'outline-primary', caption: 'Toggle 6', state: false }
        ]
      }
    },
    computed: {
      btnStates () {
        return this.myToggleButtons.map(btn => btn.state)
      }
    },
    methods: {},
    mounted() {},
    created() {}
  }
</script>
