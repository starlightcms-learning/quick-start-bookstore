import Starlight, { Entry, Image } from '@starlightcms/next-sdk'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { Book } from '../starlight'

type HomeProps = {
  books: Entry<Book>[]
}

const Home = ({ books }: HomeProps) => (
  <main className="container mx-auto p-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
    {books.map((book) => (
      <Link
        key={book.id}
        href={`/book/${book.slug}`}
        className="w-full max-w-lg p-5 mx-auto bg-white rounded-lg shadow-md"
      >
        <article className="h-full flex flex-col items-center justify-center">
          {/* Book cover picture */}
          <figure className="w-32 mb-4">
            {/* The Image component is a wrapper around "next/image" that automatically fills
                  required metadata (height, width and alt) using data returned by Starlight. */}
            <Image media={book.data.cover_picture} className="rounded"/>
          </figure>
          {/* Book title */}
          <h2 className="text-xl font-bold mb-1">{book.title}</h2>
          {/* Book availability */}
          <p className="text-gray-600 text-center">
            {book.data.is_available ? 'Currently available to buy.' : 'Not available.'}
          </p>
        </article>
      </Link>
    ))}
  </main>
)

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  // You can request content by using the slug of the desired model as a property.
  // Note how we access a property called "books", which is our model's slug.
  // If you chose a different slug when setting up your model, replace "books" in the line below.
  const response = await Starlight.books.entries.list()

  return {
    props: {
      // The "response" variable holds the complete response object returned by
      // Starlight's Query API, which includes some metadata. We only need to pass
      // the book list returned by the API, which is in the "data" property.
      books: response.data,
    },
  }
}

export default Home
