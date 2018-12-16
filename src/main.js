// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// var app = new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })

new Vue({
  el: '#app',
  router,
  components: { App },
  render (h) {
    return h('App')
  }
})

// v-bind dom 요소에 데이터를 바인딩 v-bind:dom요소="데이터이름"
// v-if="값" 이거면 할거임 v-show도 있음. 아마 실제 코드가 실행되나 아니냐 차이 같은디 모르겠다. 트렌지션 효과는 나중에 하자.
// v-for= 리스트에 있는거만큼 이걸 반복함. 좀 멋진 기능인듯.
// v-on 사용자 입력을 핸들링하기 위해 하는것이다. 나를 클릭하면 이 메소드를 실행시킬거임!
// 메소드는 el로 지정한 그 vue 에 들어가있어야한다.
// v-model='변수' 이거의 값을 변수에 바로 넣어줌.
