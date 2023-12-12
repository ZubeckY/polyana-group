require('dotenv').config()
import {createClient} from '@supabase/supabase-js'

const DEV_MODE = process.env.SUPA_BASE_DEV_MODE
const baseUrl: any = process.env.BASE_URL
const apiPrefix: any = process.env.SUPA_BASE_API_PREFIX

const supaBaseUrDev = process.env.SUPA_BASE_URL
const supaBaseKey = process.env.SUPA_BASE_KEY
const supaBaseUrl: any = returnBoolean() ? supaBaseUrDev : baseUrl + apiPrefix

function returnBoolean () {
  const isDevMode = String(DEV_MODE).toLowerCase()
  switch (isDevMode) {
    case '0':
    case 'false':
      return false
    case '1':
    case 'true':
      return true
    default:
      return true
  }
}

// @ts-ignore
const supaBase: any = createClient(supaBaseUrl, supaBaseKey)
export default supaBase


// require('dotenv').config()
// import {createClient} from '@supabase/supabase-js'
//
// const DEV_MODE = process.env.SUPA_BASE_DEV_MODE
// const BASE_URL = process.env.BASE_URL
//
// const SUPA_BASE_KEY_DEV = process.env.SUPA_BASE_KEY_DEV
// const SUPA_BASE_KEY_NORMAL = process.env.SUPA_BASE_KEY
//
// const SUPA_BASE_URL_DEV = process.env.SUPA_BASE_URL_DEV
// const SUPA_BASE_URL_NORMAL = process.env.SUPA_BASE_URL
//
// const SUPA_BASE_URL = devModeNormalize() ? BASE_URL + 'api/v1/data-base/' : SUPA_BASE_URL_NORMAL
// const SUPA_BASE_KEY = devModeNormalize() ? SUPA_BASE_KEY_DEV : SUPA_BASE_KEY_NORMAL
//
// function devModeNormalize () {
//   const isDevMode = String(DEV_MODE).toLowerCase()
//   switch (isDevMode) {
//     case '0':
//     case 'false':
//       return false
//     case '1':
//     case 'true':
//       return true
//     default:
//       return true
//   }
// }
//
// //@ts-ignore
// const supaBase: any = createClient(SUPA_BASE_URL, SUPA_BASE_KEY)
// export default supaBase
