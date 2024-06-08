type GeneratedFields ={
    id: string,
    created_at: string,
}

export type Member = {
    full_name: string
    email_address: string
    phone_number: string | undefined
    city_part: string | undefined
    newsletter: boolean | undefined
    volunteer: boolean | undefined
    notes_and_questions: string | undefined
    flower_beds: number | undefined
    payment_tarif: string | undefined
    soul_plant: string | undefined
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
