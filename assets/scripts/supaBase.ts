require('dotenv').config()
import { createClient } from '@supabase/supabase-js'
const baseUrl:any = process.env.BASE_URL
const apiPrefix: any = process.env.SUPA_BASE_API_PREFIX

const supaBaseUrl: any = baseUrl + apiPrefix
const supaBaseKey = process.env.SUPA_BASE_KEY
//@ts-ignore
const supaBase: any = createClient(supaBaseUrl, supaBaseKey)

export default supaBase
