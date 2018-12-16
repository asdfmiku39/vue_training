<template>
  <div id="gacha">
    <div>
      <button @click="rollGacha">ガチャを回す</button>
      <div>
        <template v-for="(gacha, index) in miku_gachas">
          <div :key="index" style="display: inline-block; width: 20%;">
            <img
              v-bind:src="gachaMethod('gacha' + gacha.index, 'png')"
              style="width: 100%; height: 100%;"
            >
            <div>{{ gacha.index }}</div>
          </div>
        </template>
      </div>
    </div>
    <!--- https://kr.vuejs.org/v2/guide/conditional.html-->
  </div>
</template>

<script>
// export default = 내가 주는 모듈의 기본이 이거다.
export default {
  name: 'Gacha',
  data () {
    return {
      gacha_count: 10,
      miku_gachas: []
    }
  },
  props: ['gachaMethod'],
  methods: {
    rollGacha: function () {
      var temp = []
      for (let i = 0; i < this.gacha_count; i++) {
        temp.push({
          index: Math.floor(Math.random() * 80)
        })
      }
      this.miku_gachas = temp
    }
  }
}
</script>
