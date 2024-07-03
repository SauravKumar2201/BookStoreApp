import React from 'react';

function About() {
  return (
    <div className="container mx-auto my-16 p-6 max-w-4xl bg-white dark:bg-slate-800 rounded-md shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-center dark:text-white">About Us</h1>
      
      <section className="mb-8">
        <p className="text-lg leading-7 mb-4 dark:text-slate-300">
          Welcome to bookStore! We are dedicated to providing you with the best selection of books from various genres. Whether you're looking for the latest bestsellers or classic literature, we have something for every reader. Our mission is to create a community of book lovers and offer a seamless shopping experience.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Free Books</h2>
        <p className="text-lg leading-7 mb-4 dark:text-slate-300">
          At bookStore, we offer a selection of free books that you can enjoy without any cost. Discover new authors, explore different genres, and enjoy reading on our website.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Read on Our Home Page</h2>
        <p className="text-lg leading-7 mb-4 dark:text-slate-300">
          You can start reading some of our books directly on the home page. Just browse through the available titles and dive into your next great read.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Purchase and Enjoy</h2>
        <p className="text-lg leading-7 mb-4 dark:text-slate-300">
          Love a book? You can purchase it directly from our store. Add your favorite titles to your cart and enjoy a seamless checkout process. Plus, you can like and share books you love with other readers.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 dark:text-white">Join Our Community</h2>
        <p className="text-lg leading-7 mb-4 dark:text-slate-300">
          Our team is passionate about books and committed to helping you find your next great read. If you have any questions or need recommendations, feel free to reach out to us. Thank you for choosing bookStore!
        </p>
      </section>
    </div>
  );
}

export default About;
