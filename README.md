# Library Lending System Frontend Built with React
#### By **Abdul Aljawaab**  

## Description  
The **Library Lending System** is a web application that allows librarians to manage books, students, and borrowing records. The system includes features for adding new books, registering students, lending books, and managing borrowing records. It uses a Flask backend for data management and a React frontend for a user-friendly interface.

---

## How to Use  
### Requirements    
* Python 3.6 or higher installed on your system.    
* React for the frontend.  

### Setup Instructions 
1. **To Access the Application**:  
    Open your browser and navigate to https://github.com/Aljawaab/Frontend

2. **Clone the Repository**:  
    ```bash  
    git clone git@github.com:Aljawaab/Frontend.git
    cd Library-lending-system-client  
    ```

3. **Set Up the client (Frontend)**:  
    Install Node.js dependencies:  
    ```bash  
    npm install  
    ```  
    Start the React development server:  
    ```bash  
    npm run dev  
    ```  
## Features  
* **Add New Books**: Add books with details like title, author, and number of copies.  
* **Manage Borrowing Records**: View, update, and delete borrowing records.  
* **Lend Books**: Lend books to students by filling out a lending form.  
* **Add Students**: Add new students to the system.  

## Technologies Used  
* **React**: Frontend framework for building the user interface.    
* **Axios**: For making HTTP requests to the backend.  
* **CSS**: For styling the application.

## Navigation Instructions  
When you open the application, you will see a navigation bar with the following options:  
* **NB** To use the application conveniently, when adding data in Borrowing Form you need to add ID's that are already existing in AddStudent Form and Book Form. You can look up on id's in Borrowing Records.
* **Home**: The homepage of the application.
* **Add Student**: Navigate to the form for adding new students.
* **Borrowing Records**: View and manage borrowing records.  
* **Add New Book**: Navigate to the form for adding new books.
* **Lend Book**: Navigate to the form for lending books to students.  
* **Borrowing Records**: View and manage borrowing records.  


### Frontend (client) 
* **src/AddNewBook.js**: Component for adding new books.  
* **src/BorrowingRecords.js**: Component for managing borrowing records.  
* **src/LendingForm.js**: Component for lending books.  
* **src/StudentForm.js**: Component for adding new students.  
* **src/Home.js**: The homepage component.  
* **src/Navbar.js**: The navigation bar component.  
* **src/App.js**: The main React application file.  
* **src/index.css**: Global styles for the application.

## Future Enhancements  
* Implement user authentication for librarians.  
* Add pagination for the borrowing records table.  
* Improve error handling and user feedback.

## License  
MIT License  

```
© 2025 Abdul Aljawaab

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
