
<template>
  <div class="table-employee">
     <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
  </tr>
  <tr
    v-for="(item) in this.$store.state.employees"
    :key="item"
    >
    <td>{{item.employee_name}}</td>
    <td>{{item.employee_age}}</td>
  </tr>
  </table>
</div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // employees: [
      //   {
      //     age: 18,
      //     name: 'Name1'
      //   }, {
      //     age: 19,
      //     name: 'Name2'
      //   }, {
      //     age: 20,
      //     name: 'Name3'
      //   }, {
      //     age: 21,
      //     name: 'Name4'
      //   }
      // ]
    }
  },
  computed:
    mapState({
      employees: state => state.employees
    }),
  mounted () {
    axios.get('http://localhost:3000/users/privet', { }, { })
      .then(res => console.log(res))
      .catch(res => console.log(res))
  }
}
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
