import Starlight, { VisualContent, Image, Entry } from '@starlightcms/next-sdk'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { Book } from '../../starlight'

// Book props type
type BookProps = {
  book: Entry<Book>
}

const Book = ({ book }: BookProps) => (
  <main className="container mx-auto">
    <article className="flex flex-col items-center p-5 m-5 bg-white rounded-lg shadow-md">
      {/* Book cover picture */}
      <figure className="w-32 mb-4">
        {/* The Image component is a wrapper around "next/image" that automatically fills
              required metadata (height, width and alt) using data returned by Starlight. */}
        <Image media={book.data.cover_picture} className="rounded"/>
      </figure>

      <div className="flex flex-col items-center">
        {/* Book title */}
        <h1 className="text-3xl font-bold mb-2">{book.title}</h1>

        {/* Book ISBN */}
        <p className="text-gray-500 mb-2">{book.data.isbn}</p>

        {/* Book availability */}
        <p className="mb-5">{book.data.is_available ? 'Currently available to buy.' : 'Not available.'}</p>

        {/* The VisualContent component will render our book excerpt
              by translating the content JSON returned by the API into HTML. */}
        <VisualContent content={book.data.excerpt}/>

        <hr className="w-full border-1 border-gray-200 my-5"/>

        <Link href="/">⬅️ Back to all books</Link>
      </div>
    </article>
  </main>
)

export const getServerSideProps: GetServerSideProps<BookProps> = async ({ params }) => {
  // You can request content by using the slug of the desired model as a property.
  // Note how we access a property called "books", which is our model's slug.
  // If you chose a different slug when setting up your model, replace "books" in the line below.
  const response = await Starlight.books.entries.get(params?.slug as string)

  return {
    props: {
      // The "response" variable holds the complete response object returned by
      // Starlight's Query API, which includes some metadata. We only need to pass
      // the book content returned by the API, which is in the "data" property.
      book: response.data,
    },
  }
}

export default Book
