import {
    pgTable,
    serial,
    text,
    timestamp,
    uniqueIndex,
  } from 'drizzle-orm/pg-core'
import { InferSelectModel, InferInsertModel } from 'drizzle-orm'

export const UsersTable = pgTable(
    'users',
    {
      id: serial('id').primaryKey(),
      firstname: text('firstname').notNull(),
      lastname: text('lastname').notNull(),
      email: text('email').notNull(),
      password: text('password').notNull(),
      bio: text('bio').notNull(),
      createdAt: timestamp('created_at').defaultNow().notNull(),
    },
    (users) => {
      return {
        uniqueIdx: uniqueIndex('unique_idx').on(users.email),
      }
    }
  )
  
  export type User = InferSelectModel<typeof UsersTable>
  export type NewUser = InferInsertModel<typeof UsersTable>