import Vuex, { MutationTree, ActionTree, GetterTree } from 'vuex';
import { RootState } from '~/types';

const state: RootState = {
  language: 'typescript',
  developerHandle: '@daveberning',
  framework: 'Nuxt 2.x',
};

const mutations: MutationTree<RootState> = {
  UPDATE_LANGUAGE(state, payload: string): void {
    state.language = payload;
  },
};

const actions: ActionTree<RootState, RootState> = {
  updateLanguage({ commit }, payload: string): void {
    commit('UPDATE_LANGUAGE', payload);
  },
};

const getters: GetterTree<RootState, RootState> = {
  developer: state => state.developerHandle,
};

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
  });
};

export default createStore;
