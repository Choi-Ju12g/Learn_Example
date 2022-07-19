<!-- 컴포넌트 이름은 파스칼케이스(첫글자 대문자)로 2단어를 조핪해서 만들것 
    그 이유는 다른 곳에서 태그처럼 등록해서 사용할 때 표준 html인지 아닌지 브라우져가 구분할 방법이 없음
-->

<template>
  <header>
      <h1>{{propsdata}}</h1>
      <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
    props:['propsdata'],
    methods:{
        sendEvent: function(){
            this.$emit('renew');
        },
    }
}
</script>

<style>

</style>