import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const BookForm = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://library-lending-system-db.onrender.com/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  }, []);

  const validationSchema = Yup.object({
    ID: Yup.string().required("ID is required"),
    Title: Yup.string().required("Title is required"),
    Author: Yup.string().required("Author is required"),
    NumberOfBooks: Yup.number()
      .required("Number of copies is required")
      .min(1, "Must be at least 1 copy"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          ID: "",
          Title: "",
          Author: "",
          NumberOfBooks: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          axios
            .post("https://library-lending-system-db.onrender.com/books", values)
            .then((response) => {
              alert("Book added successfully!");
              resetForm();
              axios
                .get("https://library-lending-system-db.onrender.com/books")
                .then((response) => {
                  setBooks(response.data);
                })
                .catch((error) => {
                  console.error("Error fetching books:", error);
                });
            })
            .catch((error) => {
              console.error(error);
              alert("Error adding book");
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="ID">ID</label>
              <Field name="ID" />
              <ErrorMessage name="ID" component="div" style={{ color: "red" }} />
            </div>
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