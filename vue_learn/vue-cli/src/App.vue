<!-- temlplate에는 1개의 html 속성이 와야한다. -->
<template>
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header 
    v-bind:propsdata="str"
    v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
// 기존 아래 형태로 변수로서 템플릿을 등록하고 사용했다면, 이제는 컴포넌트를 분리해서 import 해와 사용한다.
// var AppHeader = {
//   templates: '<header><h1>Header</h1></header>'
// }
export default {
  // 여러 컴포넌트에서 하나의 데이터를 참조하지 않게 하기 위함
  data: function(){
    return{
      str: 'Header'
    }
  },
  components:{
    'app-header': AppHeader
  },
  methods:{
    renewStr: function(){
      this.str = 'change str into hi'
    }
  }
}
</script>

<style>

</style>