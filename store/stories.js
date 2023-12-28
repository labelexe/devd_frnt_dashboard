export const state = () => {
  // Stories
  return {
    global: {
      stories: {
        users_stories: [
          {
            shop_name: "Sun On Dress",
            img_src: "https://picsum.photos/200/300/?blur=1&random=1",
            username: "test1",
            stories_cards: []
          },
        ]
      },
    },

    merchants: {
      stories: {
        all: {
          cards: []
        },
        current: {
          cards: [] //Карточки
        }
      }
    }
  }
}

export const mutations = {
  SET_STORIES_LIST_BY_GLOBAL(state, payload = {userStories: []}) {
    state.global.stories.users_stories = payload.userStories;
  },
}

export const actions = {
  async fetchUserStoriesByGlobal({commit}) {
    try {
      const {users_stories_gl} = await this.$axios.$get("/stories_global.json", {
        baseURL: ""
      });
      console.log(users_stories_gl);
      commit("SET_STORIES_LIST_BY_GLOBAL", {
        userStories: users_stories_gl
      })
      return users_stories_gl
    } catch (e) {
      console.error("[app][stories][fetch] not fetch data.")
    }

  }
}

export const getters = {
  getUsersStoriesByGlobal(state) {
    return state.global.stories.users_stories ?? []
  }
}
