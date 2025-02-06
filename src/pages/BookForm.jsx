import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const BookForm = () => {
  const [books, setBooks] = useState([]); // State to store the list of books
  const [error, setError] = useState(""); // State to store error messages

  // Fetch books data when the component mounts
  useEffect(() => {
    axios
      .get("https://library-lending-system-db.onrender.com/books")
      .then((response) => {
        setBooks(response.data); // Update the books state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setError("Failed to fetch books. Please try again later.");
      });
  }, []);

  // Validation schema for the form
  const validationSchema = Yup.object({
    Title: Yup.string().required("Title is required"),
    Author: Yup.string().required("Author is required"),
    NumberOfBooks: Yup.number()
      .required("Number of copies is required")
      .min(1, "Must be at least 1 copy"),
  });

  // Handle form submission
  const handleSubmit = (values, { resetForm }) => {
    axios
      .post("https://library-lending-system-db.onrender.com/books", values)
      .then((response) => {
        alert("Book added successfully!");
        resetForm(); // Reset the form fields
        // Update the books state with the newly added book
        setBooks([...books, response.data]);
      })
      .catch((error) => {
        console.error("Error adding book:", error);
        setError("Failed to add book. Please try again.");
      });
  };

  return (
    <div>
      {/* Form to add a new book */}
      <Formik
        initialValues={{
          Title: "",
          Author: "",
          NumberOfBooks: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="Title">Title</label>
              <Field name="Title" />
              <ErrorMessage name="Title" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label htmlFor="Author">Author</label>
              <Field name="Author" />
              <ErrorMessage name="Author" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label htmlFor="NumberOfBooks">Number of Copies</label>
              <Field name="NumberOfBooks" type="number" />
              <ErrorMessage name="NumberOfBooks" component="div" style={{ color: "red" }} />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Add Book
            </button>
          </Form>
        )}
      </Formik>

      {/* Display error messages */}
      {error && <div style={{ color: "red" }}>{error}</div>}

      {/* Display the list of books in a table */}
      <div>
        <h2>Books List</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Copies</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.Title}</td>
                <td>{book.Author}</td>
                <td>{book.NumberOfBooks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookForm;