# search-books

### Overview

In this activity, I have created React-based Google Books Search app. This assignment contains React components, helper/util functions, and utilizes React lifecycle methods to query and display books based on user searches. Node, Express and MongoDB are used and implemented so that users can save books to review or purchase later.


* This application contains 2 pages:

  * [Search]- User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

  * [Saved] - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

Code has been added to connect to a MongoDB database named `googlebooks` using the mongoose npm package.

The books that are listed have each of the following fields:

* `title` - Title of the book from the Google Books API

* `authors` - The books's author(s) as returned from the Google Books API

* `description` - The book's description as returned from the Google Books API

* `image` - The Book's thumbnail image as returned from the Google Books API

* `link` - The Book's information link as returned from the Google Books API

The created `documents` in the `books` collection are similar to the following:

    ```js
    {
      authors: ["Suzanne Collins"]
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
      title: "The Hunger Games"
    }
    ```

The following Express routes are in the app:

* `/api/books` (get) - Returns all saved books as JSON.

* `/api/books` (post) - Used to save a new book to the database.

* `/api/books/:id` (delete) - Used to delete a book from the database by Mongo `_id`.

* `*` (get) - Loads a single HTML page in `client/build/index.html`. This is _after_ all other routes are defined.



