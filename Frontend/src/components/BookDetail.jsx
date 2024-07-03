import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BookDetail() {
  const { id } = useParams(); // Get book id from URL params

  // Example: Fetch book details based on id (mock data)
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Example: Fetch book details from an API or local data source
    // Replace with your actual data fetching logic
    const fetchBookDetails = async () => {
      try {
        // Mock API call
        const response = await fetch(`http://localhost:4001/books/${id}`); // Replace with your actual API endpoint
        const data = await response.json();
        setBook(data); // Set fetched book data to state
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (!book) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <div className="container mx-auto mt-6">
      <div className="card bg-base-100 dark:bg-slate-900 dark:text-white p-6">
        <h1 className="text-2xl font-bold">{book.name}</h1>
        <div className="mt-4">
          <img src={book.image} alt={book.name} className="w-64" />
        </div>
        <p className="mt-4">{book.description}</p>
        <div className="mt-4 flex justify-between">
          <div className="badge badge-outline">${book.price}</div>
          <div className=" cursor-pointer px-4 py-2 rounded-full border-[2px] bg-pink-500 text-white hover:bg-pink-700 duration-200">
            Buy Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
