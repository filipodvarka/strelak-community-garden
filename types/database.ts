type GeneratedFields ={
    id: string,
    created_at: string,
}

export type Member = {
    full_name: string
    email_address: string
    phone_number: string | null
    city_part: string | null
    soul_plant: string | null
    flower_beds: number | null
    payment_tarif: string | null
    newsletter: boolean | null
    volunteer: boolean | null
    notes_and_questions: string | null
}

export type DBMember = Member & GeneratedFields

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      members: {
        Row: DBMember
        Insert: DBMember,
        Update: DBMember,
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
