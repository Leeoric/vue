import * as logs from '@/utils/logs'

export default {
  'tabBarActive': function (state, payload) {
    state.tabBar.active = payload.active
    logs.group('tabBarActive  --Vuex Mutation', payload)
  },
  'tabBarIf': function (state, payload) {
    state.tabBar.if = payload.if
    logs.group('tabBarIf  --Vuex Mutation', payload)
  }
}
