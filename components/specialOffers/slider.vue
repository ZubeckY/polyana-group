<template>
  <v-lazy>
    <div class="specialOffers-slider" v-if="slides.length > 0">
      <VueSlickCarousel v-bind="settings">
        <div v-for="(item, i) in slides" :key="'reviewIndex'+i" class="px-1">
          <corner-card :item="item"/>
        </div>
        <template #prevArrow="arrowOption">
          <v-btn style="left: -40px; z-index: 200" min-height="0" min-width="0" width="34px" height="34px"
                 elevation="0" rounded color="#ffffffb8" title="Назад">
            <div class="specialOffers-slider-arrow prev">&nbsp;</div>
          </v-btn>
        </template>
        <template #nextArrow="arrowOption">
          <v-btn style="right: -40px; z-index: 200" min-height="0" min-width="0" width="34px" height="34px"
                 elevation="0" rounded color="#ffffffb8" title="Вперёд">
            <div class="specialOffers-slider-arrow next">&nbsp;</div>
          </v-btn>
        </template>
      </VueSlickCarousel>
    </div>
  </v-lazy>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import supaBase from "~/assets/scripts/supaBase";

@Component({})
export default class SpecialOffersSlider extends Vue {
  slides: any = []
  settings: any = {
    arrows: true,
    infinite: false,
    slidesToShow: 2.4,
    slidesToScroll: 1,
    lazyLoad: 'progressive',
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1150,
        settings: {
          centerMode: true,
          slidesToShow: 1.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 960,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px',
        }
      },
      {
        breakpoint: 450,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '30px',
        }
      },
      {
        breakpoint: 390,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '15px',
        }
      },
    ]
  }

  async mounted() {
    await this.getData()
  }

  async getData() {
    let {hotel_id}: any = this.$router.currentRoute.query
    let idArr = []
    let restId: any = {
      32513: 1,
      22866: 2,
      23660: 3,
    }

    try {
      if (!hotel_id) {
        let {data, error} = await supaBase
          .from('specialoffer')
          .select('id, title, imgvertical, idcategory, created_at')
          .order('id')
          .limit(10)
        this.slides = data
      } else {
        idArr.push(restId[hotel_id])
        let {data, error} = await supaBase
          .from('specialoffer')
          .select('id, title, imgvertical, idcategory, created_at')
          .contains('idhotel', [...idArr])
          .order('id')
          .limit(10)
        this.slides = data
      }
    } catch (e) {
      console.log(e)
    }
  }
}
</script>
