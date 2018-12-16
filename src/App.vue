<template>
  <div id="app">
    <div>
      <br>
      {{ get_curved_message }}
      <br>
      <img
        v-bind:src="get_image_src(get_curved_image_src, 'jpg')"
        width="100%"
        v-on:click="setCurveStatus"
      >
    </div>
  <gacha :gachaMethod="get_image_src"/>
  </div>
</template>

<script>
// export default = 내가 주는 모듈의 기본이 이거다.
import Gacha from './Gacha'
export default {
  name: 'App',
  // component에서 넣어줘야 template
  components: { Gacha },
  data () {
    return {
      title_message: 'みつかったかにゃ...' + new Date(),
      not_curved_message: 'みくは自分を曲げないよ！',
      curved_message:
        'み...みくは真面目だから仕事に関しては自分を曲げる時もあるにゃ！',
      curved_image: 'miku_curve',
      not_curved_image:
        'miku',
      curved: false
    }
  },
  methods: {
    setCurveStatus: function () {
      this.curved = this.curved === false
    },
    get_image_src: function (path, extension) {
      return require(`./assets/${path}.${extension}`)
    }
  },
  computed: {
    get_curved_message: function () {
      return this.curved ? this.curved_message : this.not_curved_message
    },
    get_curved_image_src: function () {
      return this.curved ? this.curved_image : this.not_curved_image
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
