<template>
  <v-form class="feedbackForm py-5 px-3">
    <div class="feedbackForm-container">
      <h4 class="feedbackForm-title">В течение 5 минут перезвоним,
        сориентируем по стоимости и
        предоставим скидку
      </h4>

      <div class="feedbackForm-inputGroup mt-5">
        <label class="feedbackForm-inputGroup-label d-block mb-2" for="phone">Телефон</label>
        <div class="feedbackForm-inputGroup-input">
          <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <g clip-path="url(#clip0_1490_709)">
              <path
                d="M4.59398 0C4.84939 0.102227 4.94224 0.325752 5.03572 0.561157C5.65158 2.11458 6.27433 3.66518 6.89488 5.21704C7.05401 5.61532 6.96147 5.82978 6.56194 5.98953C5.90918 6.25088 5.25737 6.51411 4.60274 6.77046C4.5027 6.80954 4.47112 6.85424 4.48081 6.96366C4.69402 9.35209 6.60445 11.29 8.98789 11.5383C9.14545 11.5545 9.22392 11.527 9.28519 11.3654C9.53247 10.7132 9.79789 10.068 10.0577 9.42055C10.1943 9.08042 10.4272 8.97976 10.7686 9.11606C12.3936 9.76475 14.0186 10.4144 15.643 11.0643C15.9234 11.1766 16.0016 11.2963 16 11.5989C15.9881 13.7995 14.3297 15.6802 12.1441 15.9753C12.0853 15.9831 12.0063 15.95 11.969 16.0319H11.8127C11.5939 16.0019 11.3754 16.0044 11.1565 16.0319H10.969C10.9033 15.9716 10.8252 15.9972 10.7501 16.0003C10.667 15.9781 10.5826 15.9706 10.4969 15.9803C10.4578 15.96 10.4172 15.9565 10.375 15.9684C10.3131 15.9459 10.2496 15.9397 10.1846 15.9481C10.1565 15.929 10.1261 15.9253 10.0939 15.9365C10.043 15.9143 9.98984 15.9078 9.93482 15.9159C9.91731 15.8971 9.8973 15.8946 9.87542 15.9072C9.83478 15.8853 9.79164 15.879 9.74631 15.8875C9.7188 15.8671 9.68847 15.864 9.65627 15.8734C9.62626 15.8537 9.59375 15.8478 9.55873 15.8559C9.54217 15.8368 9.52278 15.8331 9.50059 15.8453C9.46026 15.8227 9.41712 15.8171 9.37179 15.8231C9.35459 15.8059 9.3349 15.8018 9.31239 15.8112C9.28331 15.7899 9.25111 15.7834 9.21579 15.7902C9.19828 15.7727 9.17859 15.769 9.15608 15.779C9.09418 15.753 9.03071 15.733 8.96225 15.7396C8.93755 15.7149 8.90786 15.7099 8.87503 15.7174C8.85283 15.7118 8.83064 15.7058 8.80844 15.7002C8.79187 15.6824 8.77249 15.6774 8.74998 15.6864C8.72778 15.6808 8.70559 15.6752 8.68339 15.6696C8.66714 15.6517 8.64775 15.6467 8.62524 15.6555L8.55866 15.6374C8.5424 15.6192 8.52302 15.6133 8.49988 15.6217C8.37765 15.5717 8.25135 15.5348 8.1213 15.5117C8.04314 15.4726 7.9628 15.4413 7.87495 15.4335C7.84494 15.4076 7.81024 15.396 7.77085 15.3998C7.74865 15.3741 7.72083 15.3644 7.68738 15.3694C7.64986 15.3526 7.61329 15.3332 7.57483 15.3188C4.93818 14.3306 2.91364 12.6156 1.50809 10.1784C0.660571 8.70934 0.189762 7.11778 0.0450176 5.42837C0.0409535 5.37991 0.0750293 5.31114 0 5.28144V4.00031C0.0756546 3.97562 0.0484564 3.9059 0.0556467 3.85776C0.353888 1.86104 1.90418 0.328878 3.90559 0.0531458C3.94842 0.0472059 4.01626 0.0787808 4.03126 0H4.59367H4.59398ZM11.1887 15.0778C11.2928 15.0778 11.397 15.0778 11.5011 15.0778C13.314 15.0787 14.8533 13.7282 15.0465 11.9722C15.0581 11.8681 15.0287 11.8271 14.9358 11.7899C13.5953 11.2569 12.2557 10.7217 10.918 10.1821C10.8083 10.1377 10.7683 10.1577 10.7261 10.2656C10.4797 10.8958 10.2268 11.5236 9.97421 12.1516C9.86979 12.4111 9.7263 12.5036 9.44557 12.4996C6.19492 12.4527 3.58671 9.85229 3.52825 6.60008C3.52263 6.29121 3.61266 6.15741 3.90152 6.04205C4.52052 5.79508 5.13857 5.54498 5.75912 5.30207C5.86354 5.26112 5.89105 5.22485 5.84541 5.112C5.30551 3.77491 4.76999 2.43595 4.23791 1.09574C4.19758 0.994138 4.15162 0.96694 4.04345 0.98007C2.43908 1.17358 1.12075 2.50598 0.973505 4.11567C0.888785 5.04166 1.00445 5.95764 1.21297 6.85924C2.30215 11.5667 6.3578 14.903 11.1881 15.0778H11.1887Z"
                fill="#4C4C4C"/>
            </g>
            <defs>
              <clipPath id="clip0_1490_709">
                <rect width="16" height="16.0316" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <input v-model="model.phone" v-mask="'+7 (###) ###-##-##'"
                 type="text" id="phone" placeholder="+7 (9XX) XXX-XX-XX">
        </div>
      </div>

      <div style="display: none; width: 0; height: 0; tab-index: 1000">
        <label class="feedbackForm-inputGroup-label d-block mb-2" for="phone">Имя</label>
        <div class="feedbackForm-inputGroup-input">
          <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <g clip-path="url(#clip0_1490_709)">
              <path
                d="M4.59398 0C4.84939 0.102227 4.94224 0.325752 5.03572 0.561157C5.65158 2.11458 6.27433 3.66518 6.89488 5.21704C7.05401 5.61532 6.96147 5.82978 6.56194 5.98953C5.90918 6.25088 5.25737 6.51411 4.60274 6.77046C4.5027 6.80954 4.47112 6.85424 4.48081 6.96366C4.69402 9.35209 6.60445 11.29 8.98789 11.5383C9.14545 11.5545 9.22392 11.527 9.28519 11.3654C9.53247 10.7132 9.79789 10.068 10.0577 9.42055C10.1943 9.08042 10.4272 8.97976 10.7686 9.11606C12.3936 9.76475 14.0186 10.4144 15.643 11.0643C15.9234 11.1766 16.0016 11.2963 16 11.5989C15.9881 13.7995 14.3297 15.6802 12.1441 15.9753C12.0853 15.9831 12.0063 15.95 11.969 16.0319H11.8127C11.5939 16.0019 11.3754 16.0044 11.1565 16.0319H10.969C10.9033 15.9716 10.8252 15.9972 10.7501 16.0003C10.667 15.9781 10.5826 15.9706 10.4969 15.9803C10.4578 15.96 10.4172 15.9565 10.375 15.9684C10.3131 15.9459 10.2496 15.9397 10.1846 15.9481C10.1565 15.929 10.1261 15.9253 10.0939 15.9365C10.043 15.9143 9.98984 15.9078 9.93482 15.9159C9.91731 15.8971 9.8973 15.8946 9.87542 15.9072C9.83478 15.8853 9.79164 15.879 9.74631 15.8875C9.7188 15.8671 9.68847 15.864 9.65627 15.8734C9.62626 15.8537 9.59375 15.8478 9.55873 15.8559C9.54217 15.8368 9.52278 15.8331 9.50059 15.8453C9.46026 15.8227 9.41712 15.8171 9.37179 15.8231C9.35459 15.8059 9.3349 15.8018 9.31239 15.8112C9.28331 15.7899 9.25111 15.7834 9.21579 15.7902C9.19828 15.7727 9.17859 15.769 9.15608 15.779C9.09418 15.753 9.03071 15.733 8.96225 15.7396C8.93755 15.7149 8.90786 15.7099 8.87503 15.7174C8.85283 15.7118 8.83064 15.7058 8.80844 15.7002C8.79187 15.6824 8.77249 15.6774 8.74998 15.6864C8.72778 15.6808 8.70559 15.6752 8.68339 15.6696C8.66714 15.6517 8.64775 15.6467 8.62524 15.6555L8.55866 15.6374C8.5424 15.6192 8.52302 15.6133 8.49988 15.6217C8.37765 15.5717 8.25135 15.5348 8.1213 15.5117C8.04314 15.4726 7.9628 15.4413 7.87495 15.4335C7.84494 15.4076 7.81024 15.396 7.77085 15.3998C7.74865 15.3741 7.72083 15.3644 7.68738 15.3694C7.64986 15.3526 7.61329 15.3332 7.57483 15.3188C4.93818 14.3306 2.91364 12.6156 1.50809 10.1784C0.660571 8.70934 0.189762 7.11778 0.0450176 5.42837C0.0409535 5.37991 0.0750293 5.31114 0 5.28144V4.00031C0.0756546 3.97562 0.0484564 3.9059 0.0556467 3.85776C0.353888 1.86104 1.90418 0.328878 3.90559 0.0531458C3.94842 0.0472059 4.01626 0.0787808 4.03126 0H4.59367H4.59398ZM11.1887 15.0778C11.2928 15.0778 11.397 15.0778 11.5011 15.0778C13.314 15.0787 14.8533 13.7282 15.0465 11.9722C15.0581 11.8681 15.0287 11.8271 14.9358 11.7899C13.5953 11.2569 12.2557 10.7217 10.918 10.1821C10.8083 10.1377 10.7683 10.1577 10.7261 10.2656C10.4797 10.8958 10.2268 11.5236 9.97421 12.1516C9.86979 12.4111 9.7263 12.5036 9.44557 12.4996C6.19492 12.4527 3.58671 9.85229 3.52825 6.60008C3.52263 6.29121 3.61266 6.15741 3.90152 6.04205C4.52052 5.79508 5.13857 5.54498 5.75912 5.30207C5.86354 5.26112 5.89105 5.22485 5.84541 5.112C5.30551 3.77491 4.76999 2.43595 4.23791 1.09574C4.19758 0.994138 4.15162 0.96694 4.04345 0.98007C2.43908 1.17358 1.12075 2.50598 0.973505 4.11567C0.888785 5.04166 1.00445 5.95764 1.21297 6.85924C2.30215 11.5667 6.3578 14.903 11.1881 15.0778H11.1887Z"
                fill="#4C4C4C"/>
            </g>
            <defs>
              <clipPath id="clip0_1490_709">
                <rect width="16" height="16.0316" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <input v-model="model.name" type="text" id="phone" placeholder="+7 (9XX) XXX-XX-XX">
        </div>
      </div>

      <div class="feedbackForm-inputGroup mt-4">
        <label class="feedbackForm-inputGroup-label d-block mb-2" for="date">Дата заезда</label>
        <div class="feedbackForm-inputGroup-input" @click="dialog = true">
          <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <g clip-path="url(#clip0_1490_724)">
              <path
                d="M11.5637 -0.000175745H11.8137C12.1966 0.13234 12.351 0.406747 12.3156 0.802106C12.3078 0.889929 12.3253 0.980564 12.3122 1.06714C12.2897 1.21403 12.3547 1.24216 12.4838 1.23091C12.6079 1.22028 12.7335 1.22716 12.8582 1.22872C14.3256 1.24903 15.5063 2.13789 15.8929 3.50742C15.9358 3.65963 15.9354 3.82121 16.0008 3.96748V13.3095C15.9398 13.363 15.9542 13.4411 15.9417 13.508C15.7023 14.7937 14.5715 15.8348 13.2726 15.9704C12.9501 16.0042 12.6279 15.9926 12.3053 15.993C9.23872 15.9945 6.17211 15.9964 3.1055 15.993C1.40405 15.9911 0.0129505 14.6325 0.00732484 12.9498C-0.00205126 10.0551 -0.000176035 7.16004 0.00732484 4.26532C0.0104502 2.97861 0.871176 1.81504 2.08851 1.39999C2.46324 1.27216 2.84735 1.22872 3.23958 1.22809C3.3846 1.22809 3.57524 1.27716 3.66182 1.20465C3.75276 1.12839 3.69713 0.929621 3.68713 0.786792C3.65932 0.394246 3.81715 0.130152 4.19094 -0.000488281H4.40972C4.84539 0.169532 4.93978 0.312673 4.93978 0.803981C4.93978 0.892429 4.94822 0.981814 4.9379 1.06901C4.9229 1.19496 4.96009 1.23247 5.09417 1.23184C6.94501 1.22653 8.79586 1.22841 10.6467 1.22809C10.7811 1.22809 10.9627 1.27497 11.0374 1.20684C11.1249 1.12683 11.0727 0.941497 11.0627 0.803981C11.0339 0.408935 11.1843 0.13484 11.5646 -0.000488281L11.5637 -0.000175745ZM8.00107 6.16273C5.80394 6.16273 3.60681 6.16398 1.40968 6.1593C1.27654 6.1593 1.24997 6.19524 1.24997 6.32244C1.25403 8.49363 1.25247 10.6645 1.2531 12.8357C1.2531 13.9452 2.04913 14.7444 3.16051 14.745C6.38839 14.7469 9.61626 14.7469 12.8445 14.745C13.9555 14.7444 14.75 13.9446 14.7503 12.8338C14.7509 10.668 14.7491 8.50207 14.7541 6.33619C14.7544 6.19336 14.7181 6.15898 14.5765 6.1593C12.3847 6.16398 10.1929 6.16273 8.00076 6.16273H8.00107ZM8.00232 4.9154C9.88192 4.9154 11.7615 4.9154 13.6411 4.9154C13.9743 4.9154 14.3074 4.91228 14.6406 4.91759C14.7297 4.91915 14.7562 4.89415 14.7528 4.80539C14.7459 4.63912 14.7519 4.47222 14.7506 4.30564C14.7437 3.54024 14.2596 2.85953 13.5423 2.59263C13.1648 2.45199 12.7741 2.48355 12.385 2.47855C12.2863 2.4773 12.316 2.55075 12.3156 2.60044C12.3138 2.94923 12.3156 3.29802 12.3144 3.64681C12.3131 4.04311 12.0584 4.31877 11.6934 4.32002C11.3277 4.32158 11.0671 4.0453 11.0655 3.65213C11.0642 3.30334 11.0611 2.95423 11.0677 2.60575C11.0696 2.50199 11.0399 2.47605 10.938 2.47636C8.98025 2.47918 7.02283 2.47949 5.06511 2.47636C4.96103 2.47636 4.93478 2.50574 4.93665 2.60701C4.9429 2.95048 4.93978 3.29427 4.93884 3.63775C4.9379 4.04374 4.68037 4.32221 4.30939 4.32002C3.94466 4.31814 3.69088 4.04249 3.68994 3.64556C3.68901 3.29677 3.68651 2.94798 3.69182 2.59919C3.69338 2.50449 3.66963 2.47136 3.57118 2.47636C3.41022 2.4848 3.24833 2.47511 3.08706 2.4798C2.27978 2.50262 1.61314 2.98455 1.35123 3.72495C1.23184 4.0628 1.26185 4.41222 1.24966 4.75976C1.24497 4.89196 1.28247 4.91915 1.41093 4.91915C3.60806 4.91478 5.80519 4.91603 8.00232 4.91603V4.9154Z"
                fill="#4C4C4C"/>
              <path
                d="M11.6898 11.6845C11.8979 11.6845 12.1061 11.6808 12.3142 11.6855C12.6574 11.6933 12.9274 11.9671 12.9309 12.3037C12.934 12.6375 12.6646 12.9244 12.323 12.9312C11.9017 12.9397 11.4801 12.9394 11.0588 12.9312C10.7162 12.9247 10.4484 12.6396 10.4512 12.3046C10.454 11.9661 10.7222 11.6933 11.0656 11.6855C11.2738 11.6808 11.4819 11.6845 11.6901 11.6845H11.6898Z"
                fill="#4C4C4C"/>
              <path
                d="M4.3137 12.9336C4.11086 12.9336 3.90771 12.9367 3.70488 12.9327C3.3514 12.9258 3.07605 12.6539 3.0723 12.3126C3.06855 11.9657 3.34765 11.6878 3.71082 11.6847C4.11149 11.6813 4.51216 11.6813 4.91283 11.6847C5.27725 11.6875 5.55447 11.9622 5.55259 12.3107C5.55041 12.6589 5.27256 12.9283 4.90721 12.9333C4.70937 12.9361 4.51185 12.9339 4.31401 12.9336H4.3137Z"
                fill="#4C4C4C"/>
              <path
                d="M7.99234 9.24778C7.7895 9.24778 7.58635 9.25122 7.38351 9.24685C7.03066 9.23903 6.75657 8.96213 6.75782 8.62084C6.75938 8.27798 7.03379 8.00295 7.38727 7.99951C7.79294 7.99545 8.19892 7.99576 8.60491 7.99951C8.96089 8.00264 9.23217 8.27173 9.23654 8.61709C9.24092 8.9665 8.96526 9.24185 8.60116 9.24778C8.39832 9.25122 8.19517 9.24841 7.99234 9.2481V9.24778Z"
                fill="#4C4C4C"/>
              <path
                d="M11.6823 9.24749C11.4795 9.24749 11.2763 9.25155 11.0735 9.24655C10.7209 9.23843 10.4475 8.95964 10.4512 8.61804C10.4546 8.27363 10.7278 8.00203 11.0822 7.99891C11.4879 7.99516 11.8939 7.99516 12.2999 7.99891C12.653 8.00234 12.9284 8.27644 12.9312 8.61867C12.934 8.95933 12.6593 9.23811 12.3071 9.24624C12.0989 9.25093 11.8908 9.24718 11.6826 9.24718L11.6823 9.24749Z"
                fill="#4C4C4C"/>
              <path
                d="M8.01046 11.6846C8.2133 11.6846 8.41645 11.6809 8.61928 11.6852C8.96526 11.6924 9.23154 11.9609 9.23654 12.3009C9.24154 12.6375 8.97651 12.9238 8.63335 12.931C8.20705 12.9397 7.77981 12.941 7.35351 12.9304C7.02034 12.9219 6.75719 12.6357 6.75781 12.3075C6.75844 11.9706 7.02785 11.6943 7.37039 11.6862C7.58354 11.6809 7.797 11.6852 8.01015 11.6849L8.01046 11.6846Z"
                fill="#4C4C4C"/>
              <path
                d="M4.31306 9.248C4.11023 9.248 3.90708 9.25112 3.70424 9.24737C3.35045 9.2405 3.07542 8.96859 3.07229 8.6273C3.06917 8.28132 3.35045 8.00223 3.71143 7.99941C4.1121 7.99629 4.51277 7.99629 4.91344 7.99941C5.2763 8.00223 5.55508 8.27882 5.55227 8.62668C5.54946 8.96984 5.27661 9.24081 4.92188 9.24737C4.71905 9.25112 4.51621 9.248 4.31306 9.248Z"
                fill="#4C4C4C"/>
            </g>
            <defs>
              <clipPath id="clip0_1490_724">
                <rect width="16" height="15.9953" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <input v-model="model.date" id="date" type="text" readonly :placeholder="minDate">
        </div>
        <v-dialog v-model="dialog" ref="dialog" max-width="360px"
                  transition="scale-transition">
          <v-card elevation="0">
            <v-card-actions class="pa-0">
              <v-spacer/>
              <v-btn @click="dialog = false" color="error" title="Закрыть" text
                     elevation="0" width="40px" height="40px"
                     min-width="0" min-height="0" style="font-size: 20px">╳
              </v-btn>
            </v-card-actions>
            <v-date-picker v-model="model.date" @change="save"
                           width="360px" locale="ru-ru"
                           prev-icon="⇦" next-icon="⇨"
                           :min="minDate" :max="maxDate"
                           :show-adjacent-months="false"
                           no-title scrollable first-day-of-week="1"
                           :active-picker.sync="activePicker">
            </v-date-picker>
          </v-card>
        </v-dialog>
      </div>

      <v-btn class="feedbackForm-button shimmer-effect" @click="send"
             width="276px" height="47px" elevation="0" dark>
        <div class="shimmer"></div>
        <div class="text">Забронировать</div>
      </v-btn>
      <span class="feedbackForm-conditions mt-3">
        Нажимая кнопку вы соглашаетесь с условиями Политики конфиденциальности
      </span>
    </div>

    <v-dialog v-model="submitDialog" max-width="400px">
      <v-card>
        <v-card-title class="pt-2 px-3 pb-2">Ваша заявка отправлена</v-card-title>
        <v-btn color="primary" @click="submitDialog=!submitDialog" block text>Ок</v-btn>
      </v-card>
    </v-dialog>

  </v-form>
</template>
<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator'

@Component({})
export default class FeedbackForm extends Vue {
  dialog: boolean = false
  submitDialog: boolean = false
  activePicker: any = null
  model: any = {
    name: '',
    date: '',
    phone: ''
  }

  configs: any = {
    0: 'polyana',
    32513: 'ultima',
    22866: 'country',
    23660: 'ikos',
  }

  hotels: any = {
    0: 'Polyana Group',
    32513: 'Ultima club',
    22866: 'Country hills ',
    23660: 'Ikos polyana',
  }

  dateOptionsCurrent: any = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }

  dateOptionsBooking: any = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }

  @Watch('dialog')
  changedialog(val: any) {
    val && setTimeout(() => (this.activePicker = 'MONTH'))
  }

  send() {
    if (this.model.name) return
    if (!this.model.date.length || !this.model.phone.length) return

    // @ts-ignore
    this.$mail.send({
      config: this.currentConfig,
      from: 'test@polyanagroup.ru',
      subject: `Заявка в отель ${this.currentHotels}`,
      html: `
        <div>
          <div style="display: flex; flex-direction: row">
            <div style="width: 180px;">Отель: </div>
            <div>${this.currentHotels}</div>
          </div>
          <div style="display: flex; flex-direction: row; margin-top: 5px;">
            <div style="width: 180px;">Заявка от: </div>
            <div>${this.currentDate}</div>
          </div>
          <div style="display: flex; flex-direction: row; margin-top: 5px;">
            <div style="width: 180px;">Номер телефона: </div>
            <div><a style="text-decoration: none;" href="tel: ${this.model.phone}">${this.model.phone}</a></div>
          </div>
          <div style="display: flex; flex-direction: row; margin-top: 5px;">
            <div style="width: 180px;">Дата бронирования:</div>
            <div>${this.bookingDate}</div>
          </div>
          <div style="display: flex; flex-direction: row; margin-top: 5px;">
            <div style="width: 180px;">Страница отправки: </div>
            <div><a href="${this.currentLink}">${this.currentLink}</a></div>
          </div>
        </div>
      `
    })

    this.submitDialog = true
    return this.model = {
      phone: '',
      name: '',
      date: ''
    }
  }

  get currentDate() {
    let date = new Date()
    return `${date.toLocaleString('ru', this.dateOptionsCurrent)}`
  }

  get currentConfig() {
    return this.configs[String(this.$router.currentRoute.query.hotel_id ?? 0)]
  }

  get currentHotels() {
    return this.hotels[String(this.$router.currentRoute.query.hotel_id ?? 0)]
  }

  get bookingDate() {
    return new Date(this.model.date).toLocaleString('ru', this.dateOptionsBooking)
  }

  get currentLink() {
    if (process.client) {
      return window.location.href
    }
  }

  get minDate() {
    return new Date(Date.now()).toISOString().substring(0, 10)
  }

  get maxDate() {
    let currentDate = new Date(Date.now());
    currentDate.setDate(31);
    currentDate.setMonth(11);
    currentDate.setFullYear(new Date(Date.now()).getFullYear() + 2)
    return new Date(currentDate).toISOString().substring(0, 10)
  }

  save(date: any) {
    // @ts-ignore
    this.$refs.dialog.save(date)
  }
}
</script>
<style>
/* feedbackForm */
.feedbackForm {
  width: 100%;
  max-width: 316px;
  border-radius: 19.55px;
  background: rgba(50, 52, 58, 0.80);
}

.feedbackForm-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.feedbackForm-title {
  color: white;
  font-size: 14px;
  font-weight: 400;
  white-space: pre-line;
  text-transform: uppercase;
}

.feedbackForm-inputGroup-label {
  color: white;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
}

.feedbackForm-inputGroup-input {
  display: flex;
  width: 276px;
  height: 42px;
  color: #000000A3;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  align-items: center;
  letter-spacing: .765px;
  border-radius: 10px !important;
  background: #D9D9D9 !important;
}

.feedbackForm-inputGroup-input svg {
  margin: 0 12px;
}

.feedbackForm-inputGroup-input * {
  border: none;
  outline: none;
  font-size: 16px !important;
  background: none !important;
  box-shadow: none !important;
}

.feedbackForm-button {
  color: white;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: normal;
  margin-top: 13.6px;
  border-radius: 13.6px !important;
  background: linear-gradient(90deg, #CCAB6A -1.19%,
  #C1B397 177.44%) !important;
}

.feedbackForm-conditions {
  color: white;
  width: 276px;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
