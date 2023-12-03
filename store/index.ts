import supaBase from "~/assets/scripts/supaBase";

export const state = () => ({
  hotels: []
})

export const mutations = {
  setHotels(state: any, hotels: any) {
    state.hotels = hotels
  },
  setCurrentHotel(state: any, hotel: any) {

  }
}

export const actions = {
  async getHotels(store: any) {
    try {
      let {data, error} = await supaBase
        .from('hotels')
        .select('id, title, logohotel, imgshotel, travellineid, pricefrom, hotelrating, hotelreviews, hoteldescription, hoteltags')
        .order('id')
      store.commit('setHotels', data)
    } catch (e) {
      console.log(e)
    }
  }
}
export const getters = {}
