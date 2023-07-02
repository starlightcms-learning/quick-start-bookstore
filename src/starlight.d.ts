import '@starlightcms/next-sdk'
import {
  MediaField,
  VisualField,
  StringField,
  BooleanField,
} from '@starlightcms/next-sdk'

export type Book = {
  cover_picture: MediaField
  excerpt: VisualField
  is_available: BooleanField
  isbn: StringField
  slug: StringField
  title: StringField
}

declare module '@starlightcms/next-sdk' {
  export interface DefaultModelDefinition {
    books: Book
  }
}
