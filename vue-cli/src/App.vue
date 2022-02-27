<!-- temlplate에는 1개의 html 속성이 와야한다. -->
<template>
  <div>
    {{str}}
  </div>
</template>

<script>
export default {
  // 여러 컴포넌트에서 하나의 데이터를 참조하지 않게 하기 위함
  data: function(){
    return{
      str: 'hi'
    }
  }
}
</script>

<style>

</style>