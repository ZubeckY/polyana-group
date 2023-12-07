require('dotenv').config()
import {createClient} from '@supabase/supabase-js'

const devMode = process.env.DEV_MODE
const baseUrl: any = process.env.BASE_URL
const apiPrefix: any = process.env.SUPA_BASE_API_PREFIX

const supaBaseUrDev = process.env.SUPA_BASE_URL
const supaBaseKey = process.env.SUPA_BASE_KEY
const supaBaseUrl: any = returnBoolean() ? supaBaseUrDev : baseUrl + apiPrefix

//@ts-ignore
const supaBase: any = createClient(supaBaseUrl, supaBaseKey)
export default supaBase

function returnBoolean() {
  const isDevMode = String(devMode).toLowerCase()
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
