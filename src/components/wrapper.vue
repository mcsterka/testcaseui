<template>
    <div class="wrapper">
        <div><TableEmployee/> </div>
    </div>
</template>

<script>
import TableEmployee from './table-employee'
export default {
  name: 'wrapper',
  data () {
    return {
      something: 'PRIVET'
    }
  },
  mounted () {
    console.log('Here!')
  },
  components: {
    TableEmployee
  }
}
</script>

<style>
    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 100%;
        height: 500px;
        margin: 0 auto;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(84,255,118,1) 0%, rgba(81,210,255,1) 100%);
    }
</style>
