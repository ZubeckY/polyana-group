require('dotenv').config()
import { createClient } from '@supabase/supabase-js'
const supaBaseUrl = process.env.SUPA_BASE_URL
const supaBaseKey = process.env.SUPA_BASE_KEY
//@ts-ignore
const supaBase = createClient(supaBaseUrl, supaBaseKey)

export default supaBase
