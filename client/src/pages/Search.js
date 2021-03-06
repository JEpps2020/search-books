import React, { useState } from "react";
import axios from "axios";
import BookSearchForm from "../components/BookSearchForm";
import Loader from "../components/Loader";
import BooksList from "../components/BooksList";

const Search = () => {
    let API_URL = `https://www.googleapis.com/books/v1/volumes`;
    // let authors = ['Param', 'Vennila', 'Afrin'];
    // bookAuthors(authors);
    // // Param, Vennila and Afrin
    // let authors = ['Param', 'Afrin'];
    // bookAuthors(authors);
    // // Param and Afrin

    const [books, setBooks] = useState({ items: [] });
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
    const onInputChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const fetchBooks = async () => {
        // set loading Before API operation starts
        setLoading(true);
        setError(false);
        try {
            const result = await axios.get(`${API_URL}?q=${searchTerm}`);
            setBooks(result.data);
        }
        catch (error) {
            setError(true);
        }
        // After API operation end
        setLoading(false);
    }

   
    const onSubmitHandler = (e) => {
        // Prevent browser refreshing after form submission
        e.preventDefault();
        // Call fetch books async function
        fetchBooks();
    }

    return (
        <>
            <BookSearchForm
                onSubmitHandler={onSubmitHandler}
                onInputChange={onInputChange}
                searchTerm={searchTerm}
                error={error}
            />    
            <Loader searchTerm={searchTerm} loading={loading} />
            {books.totalItems !==0 ? (
            <BooksList books={books} />
            ) : (
                <h3>No Results to Display</h3>)}
        </>
    );
};
export default Search;