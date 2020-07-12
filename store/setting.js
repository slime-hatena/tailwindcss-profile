import json from '~/assets/json/setting.json';

export const state = () => ({
  data: json,
})

export const getters = {
  get (state) {
    return state.data;
  },
}
