import {
  integer,
    pgTable,
    serial,
    text,
    timestamp,
    uniqueIndex,
    uuid,
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
  
  export const Tasks = pgTable('tasks', {
    id: uuid('id').defaultRandom().primaryKey(),
    title: text('title').notNull(),
    description: text('description'),
    user_id: integer('user_id').references(() => UsersTable.id)
  })
  export type User = InferSelectModel<typeof UsersTable>
  export type NewUser = InferInsertModel<typeof UsersTable>