<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="exampleInputGroup1"
                    label="Email address:"
                    label-for="exampleInput1"
                    description="We'll never share your email with anyone else.">
        <b-form-input id="exampleInput1"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup2"
                    label="Your Name:"
                    label-for="exampleInput2">
        <b-form-input id="exampleInput2"
                      type="text"
                      v-model="form.name"
                      required
                      placeholder="Enter name">
        </b-form-input>
      </b-form-group>
      <b-form-group id="exampleInputGroup3"
                    label="Food:"
                    label-for="exampleInput3">
        <b-form-select id="exampleInput3"
                      :options="foods"
                      required
                      v-model="form.food">
        </b-form-select>
      </b-form-group>
      <b-form-group id="exampleGroup4">
        <b-form-checkbox-group v-model="form.checked" id="exampleChecks">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <br />
    <div>

    <h4>Form Checkbox Inputs</h4>

    <b-form-checkbox id="checkbox1"
                       v-model="status"
                       value="accepted"
                       unchecked-value="not_accepted">
        I accept the terms and use
      </b-form-checkbox>
      <div>State: <strong>{{status}}</strong></div>
    </div>

    <h4>Multiple choice checkboxes</h4>

    <b-row class="br-m-b30">
      <b-col>

        <div>
          <b-form-group label="Using <code>options</code> array:">
            <b-form-checkbox-group id="checkboxes1" name="flavour1" v-model="selected" :options="options">
            </b-form-checkbox-group>
          </b-form-group>

          <b-form-group label="Using sub-components:">
            <b-form-checkbox-group id="checkboxes2" name="flavour2" v-model="selected">
              <b-form-checkbox value="orange">Orange</b-form-checkbox>
              <b-form-checkbox value="apple">Apple</b-form-checkbox>
              <b-form-checkbox value="pineapple">Pineapple</b-form-checkbox>
              <b-form-checkbox value="grape">Grape</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>
          <hr>
          <div>Selected: <strong>{{ selected }}</strong></div>
        </div>

        <div>
          <b-form-group label="Inline checkboxes (default)">
            <b-form-checkbox-group v-model="selected" name="flavour1" :options="options">
            </b-form-checkbox-group>
          </b-form-group>

          <b-form-group label="Stacked  checkboxes">
            <b-form-checkbox-group stacked v-model="selected" name="flavour2" :options="options">
            </b-form-checkbox-group>
          </b-form-group>
        </div>
      </b-col>
      <b-col>
        <div>
          <b-form-group label="Button style checkboxes">
            <b-form-checkbox-group buttons v-model="selected" name="butons1" :options="options">
            </b-form-checkbox-group>
          </b-form-group>

          <b-form-group label="Button style checkboxes with variant <code>primary</code> and large buttons">
            <b-form-checkbox-group v-model="selected"
                                   buttons
                                   button-variant="primary"
                                   size="lg"
                                   name="buttons2"
                                   :options="options">
            </b-form-checkbox-group>
          </b-form-group>

          <b-form-group label="Stacked (vertical) button style checkboxes">
            <b-form-checkbox-group buttons v-model="selected" stacked :options="options">
            </b-form-checkbox-group>
          </b-form-group>
        </div>

      </b-col>
    </b-row>

    <h4>Indeterminate (tri-state) support</h4>

    <div>
      <b-form-checkbox v-model="checked" :indeterminate.sync="indeterminate">
        Click me to see what happens
      </b-form-checkbox>

      <div class="mt-3">
        Checked: <strong>{{ checked }}</strong><br>
        Indeterminate: <strong>{{ indeterminate }}</strong>
      </div>
      <b-btn @click="toggleIndeterminate">Toggle Indeterminate State</b-btn>
    </div>

    <h4>Indeterminate checkbox use-case</h4>

    <div>
      <b-form-group>
        <template slot="label">
          <b>Choose your flavours:</b><br>
          <b-form-checkbox v-model="allSelected"
                           :newIndeterminate="newIndeterminate"
                           aria-describedby="flavours"
                           aria-controls="flavours"
                           @change="toggleAll"
           >
            {{ allSelected ? 'Un-select All' : 'Select All' }}
           </b-form-checkbox>
        </template>
        <b-form-checkbox-group id="flavors"
                               stacked
                               v-model="selected"
                               name="flavs"
                               :options="flavours"
                               class="ml-4"
                               aria-label="Individual flavours"
        ></b-form-checkbox-group>
      </b-form-group>
      <p>
        Selected: <strong>{{ selected }}</strong><br>
        All Selected: <strong>{{ allSelected }}</strong><br>
        Indeterminate: <strong>{{ newIndeterminate }}</strong><br>
      </p>
    </div>

    <h4>Form group</h4>

    <b-form-group
    id="fieldset1"
    description="Let us know your name."
    label="Enter your name"
    label-for="input1"
    :invalid-feedback="invalidFeedback"
    :valid-feedback="validFeedback"
    :state="state">
      <b-form-input id="input1" :state="state" v-model.trim="name"></b-form-input>
    </b-form-group>

    <h4>Input</h4>

    <div>
      <b-form-input v-model="text1"
                    type="text"
                    placeholder="Enter your name"></b-form-input>
      <p><strong>Value: </strong> {{ text1 }}</p>
    </div>

    <h4>Input type</h4>

    <b-container fluid>
      <b-row class="my-1" v-for="type in types" :key="type">
        <b-col sm="3"><label :for="`type-${type}`">Type {{ type }}:</label></b-col>
        <b-col sm="9"><b-form-input :id="`type-${type}`" :type="type"></b-form-input></b-col>
      </b-row>
    </b-container>

    <h4>Formatter support</h4>

    <div>
      <label for="inputFormatter">Text input with formatter (on input)</label>
      <b-form-input id="inputFormatter"
                    v-model="text1"
                    type="text"
                    placeholder="Enter your name"
                    aria-describedby="inputFormatterHelp"
                    :formatter="format"></b-form-input>
      <b-form-text id="inputFormatterHelp">
       We will convert your name to lowercase instantly
      </b-form-text>
      <p>Value: {{ text1 }}</p>

      <label for="inputLazy">Text input with lazy formatter (on change)</label>
      <b-form-input id="inputLazy"
                    v-model="text2"
                    type="text"
                    placeholder="Enter your name"
                    aria-describedby="inputLazyHelp"
                    :formatter="format"
                    lazy-formatter></b-form-input>
      <b-form-text id="inputLazyHelp">
        This one is a little lazy!
      </b-form-text>
      <p>Value: {{ text2 }}</p>
    </div>

    <h4>Formatter support</h4>

    <div>
      <b-form-group label="Inline radios (default)">
        <b-form-radio-group v-model="mainSelected"
                            :mainOptions="mainOptions"
                            name="radioInline">
        </b-form-radio-group>
      </b-form-group>

      <b-form-group label="Stacked radios">
        <b-form-radio-group v-model="mainSelected"
                            :options="mainOptions"
                            stacked
                            name="radiosStacked">
        </b-form-radio-group>
      </b-form-group>

      <div class="mt-3">
        Selected: <strong>{{ mainSelected }}</strong>
      </div>
    </div>

    <h4>Form Select</h4>

    <div>
      <b-form-select v-model="shcSelected" :options="shcOptions" class="mb-3" />
      <b-form-select v-model="shcSelected" :options="shcOptions" class="mb-3" size="sm" />
      <div>Selected: <strong>{{ shcSelected }}</strong></div>
    </div>

    <br />

    <h4>Form textarea</h4>

    <div>
      <b-form-textarea id="textarea1"
                       v-model="contentText"
                       state="valid"
                       placeholder="Enter something"
                       :rows="3"
                       :max-rows="6">
      </b-form-textarea>
      <pre class="mt-3">{{ contentText }}</pre>
    </div>

    <h4>Select</h4>

    <v-select v-model="selected" :options="['one','two','three']"></v-select>

    <br />

  </div>
</template>

<script>
  export default {
    name: 'FormUi',
    props: {},
    computed: {
      state () {
        return this.name.length >= 4 ? true : false
      },
      invalidFeedback () {
        if (this.name.length > 4) {
          return ''
        } else if (this.name.length > 0) {
          return 'Enter at least 4 characters'
        } else {
          return 'Please enter something'
        }
      },
      validFeedback () {
        return this.state === true ? 'Thank you' : ''
      }
    },
    data: function(){
      return {
        name: '',
        text1: '',
        text2: '',
        contentText: '',
        types: [
          'text', 'password', 'email', 'number', 'url',
          'tel', 'date', `time`, 'range', 'color'
        ],
        status: 'not_accepted',
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [
          { text: 'Select One', value: null },
          'Carrots', 'Beans', 'Tomatoes', 'Corn'
        ],
        show: true,
        selected: [], // Must be an array reference!
        options: [
          {text: 'Orange', value: 'orange'},
          {text: 'Apple', value: 'apple'},
          {text: 'Pineapple', value: 'pineapple'},
          {text: 'Grape', value: 'grape'}
        ],
        checked: true,
        indeterminate: true,
        flavours: ['Orange', 'Grape', 'Apple', 'Lime', 'Very Berry'],
        allSelected: false,
        newIndeterminate: false,
        mainSelected: 'first',
        mainOptions: [
          { text: 'First radio', value: 'first' },
          { text: 'Second radio', value: 'second' },
          { text: 'Third radio', value: 'third' }
        ],
        shcSelected: null,
        shcOptions: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: {'C': '3PO'}, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
      }
    },
    methods: {
      onSubmit (evt) {
        evt.preventDefault();
        alert(JSON.stringify(this.form));
      },
      onReset (evt) {
        evt.preventDefault();
        /* Reset our form values */
        this.form.email = '';
        this.form.name = '';
        this.form.food = null;
        this.form.checked = [];
        /* Trick to reset/clear native browser form validation state */
        this.show = false;
        this.$nextTick(() => { this.show = true });
      },
      toggleIndeterminate () {
        this.indeterminate = !this.indeterminate
      },
      toggleAll (checked) {
        this.selected = checked ? this.flavours.slice() : []
      },
      format (value, event) {
        return value.toLowerCase()
      }
    },
    watch: {
      selected (newVal, oldVal) {
        // Handle changes in individual flavour checkboxes
        if (newVal.length === 0) {
          this.newIndeterminate = false
          this.allSelected = false
        } else if (newVal.length === this.flavours.length) {
          this.newIndeterminate = false
          this.allSelected = true
        } else {
          this.newIndeterminate = true
          this.allSelected = false
        }
      }
    },
    mounted() {},
    created() {}
  }
</script>

<style scoped lang="scss">
  //.alert {
  //}
</style>
