<template>
  <div>
    <b-table striped hover :items="items"></b-table>
    <br>
    <b-table hover :items="variants"></b-table>
    <br>
    <b-table striped hover :items="sortsitems" :fields="fields"></b-table>
    <br>
    <b-table striped hover :items="itemsAs" :fields="fieldstest"></b-table>
  </div>
</template>

<script>

  const items = [
    { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
    { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
    { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
    { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
  ]

  const variants = [
    { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
    { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
    {
      isActive: false,
      age: 89,
      first_name: 'Geneva',
      last_name: 'Wilson',
      _rowVariant: 'danger'
    },
    {
      isActive: true,
      age: 40,
      first_name: 'Thor',
      last_name: 'Macdonald',
      _cellVariants: { isActive: 'success', age: 'info', first_name: 'warning' }
    },
    { isActive: false, age: 29, first_name: 'Dick', last_name: 'Dunlap' }
  ]

  const sortsitems = [
    { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
    { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
    { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
    { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
  ]

  export default {
    name: 'TablesElement',
    data () {
      return {
        items: items,
        variants: variants,
        sortsitems: sortsitems,
        // Note 'isActive' is left out and will not appear in the rendered table
        fields: [
          {
            key: 'last_name',
            sortable: true
          },
          {
            key: 'first_name',
            sortable: false
          },
          {
            key: 'age',
            label: 'Person age',
            sortable: true,
            // Variant applies to the whole column, including the header and footer
            variant: 'danger'
          }
        ],
        itemsAs: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald', address: { country: 'USA', city: 'New York' } },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw', address: { country: 'Canada', city: 'Toronto' }},
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson', address: { country: 'Australia', city: 'Sydney' } },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney', address: { country: 'England', city: 'London' } }
        ],
        // Note 'isActive' is left out and will not appear in the rendered table
        fieldstest: {
          last_name: {
            label: 'Person last name',
            sortable: true
          },
          first_name: {
            label: 'Person first name',
            sortable: false
          },
          foo: {
            // This key overrides `foo`!
            key: 'age',
            label: 'Person age',
            sortable: true
          },
          city: {
            key: 'address.city'
          },
          'address.country': {
            label: 'Country'
          }
        }
      }
    },
    methods: {},
    mounted() {},
    created() {}
  }
</script>
