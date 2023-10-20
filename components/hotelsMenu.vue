<template>
  <v-menu class="hotelsMenu" v-model="menu" open-on-hover offset-y>
    <template v-slot:activator="{ on, attrs }">
      <div class="hotelsMenu-activator"
           v-bind="attrs" v-on="on">
        <slot/>
      </div>
    </template>
    <div class="hotelsMenu-container">
      <div class="hotelsMenu-card">
        <a class="hotelsMenu-link" v-for="(hotel, i) in hotels"
           :key="'hotel'+i" :href="getHotelLink(hotel)">
          <div>{{ hotel.title }}</div>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path
              d="M7.92918 1.85404C7.88185 1.88354 7.82671 1.90581 7.78773 1.94421C5.21424 4.51349 2.64241 7.08444 0.0700343 9.65538C-0.0227845 9.74815 -0.0233414 9.84018 0.0683635 9.93146C0.402511 10.266 0.737215 10.6005 1.07192 10.935C1.15806 11.0211 1.24363 11.0217 1.32866 10.9367C3.90438 8.36295 6.47954 5.78867 9.05526 3.21494C9.09425 3.17597 9.1349 3.13924 9.1995 3.07746C9.20674 3.1654 9.21565 3.22551 9.21565 3.28563C9.21621 5.39125 9.21621 7.49688 9.21621 9.60251C9.21621 9.73312 9.28155 9.79843 9.41224 9.79843C9.89509 9.79843 10.3774 9.79509 10.8602 9.80066C10.9716 9.80177 11 9.76615 11 9.65817C10.9972 6.48609 10.9978 3.31345 10.9978 0.141377C10.9978 0.100745 10.9928 0.0601135 10.9894 0.0027834H10.8335C7.67802 0.0027834 4.52255 0.00333984 1.36708 2.21112e-07C1.23677 2.21112e-07 1.19166 0.0283864 1.19388 0.166424C1.20224 0.643989 1.19723 1.12155 1.19723 1.59968C1.19723 1.72176 1.25737 1.78298 1.37766 1.78335C3.48892 1.78335 5.60073 1.78335 7.71199 1.78335C7.77046 1.78335 7.82894 1.78335 7.88742 1.78335C7.90134 1.80673 7.91526 1.83067 7.92918 1.85404Z"
              fill="#32343A"/>
          </svg>
        </a>
      </div>
    </div>
  </v-menu>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({})
export default class HotelsMenu extends Vue {
  @Prop() mode?: string
  hotels: any = []
  menu: boolean = false

  async created() {
    try {
      let {hotel_id} = this.$router.currentRoute.query
      let {data, error} = await supaBase
        .from('hotels')
        .select('id, title, travellineid')
        .order('id')
      this.hotels = data
    } catch (e) {
      console.log(e)
    }
  }

  getHotelLink(hotel: any) {
    return this.mode === 'restaurant' ? this.switchRestaurantLink(hotel.travellineid) : '/hotel?hotel_id=' + hotel.travellineid
  }

  switchRestaurantLink(hotelId: any) {
    switch (hotelId) {
      case 32513:
        return '/services/3'
      case 22866:
        return '/services/10'
      case 23660:
        return '/services/14'
    }
  }

}
</script>
<style scoped lang="less">
.hotelsMenu {
  &-activator {
    cursor: pointer;
  }

  &-card {
    width: 100%;
    margin-top: 10px;
    border-radius: 8px;
    background: #D9D9D9;
  }

  &-link {
    display: flex;
    height: 36px;
    font-size: 14px;
    padding: 0 15px;
    border-radius: 0;
    align-items: center;
    color: var(--dark-color);
    text-decoration: none;
    justify-content: space-between;
    transition: background 100ms ease-in;

    & + .hotelsMenu-link {
      border-top: 1px solid #32343A42;
    }

    & svg {
      margin-left: 10px;
    }

    &:first-child {
      border-radius: 8px 8px 0 0;
    }

    &:last-child {
      border-radius: 0 0 8px 8px;
    }

    &:hover {
      cursor: pointer;
      background: #DEC799;
      transition: background 100ms ease-in;
    }
  }
}
</style>
