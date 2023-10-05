import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="card card-bordered card-compact w-[500px] bg-rango-luxury shadow-xl text-rango-home mx-auto my-20">
      <figure>
        <img
          src="https://logos.flamingtext.com/City-Logos/Todo-Amped-Logo.png"
          alt="todo pic"
        />
      </figure>
      <div className="card-body">
        <h1 className="card-title mb-4 text-4xl">Rango Task Tracker</h1>
        <p className="mb-3 text-lg">Todo App built by rango-group.Co</p>
        <div className="card-actions justify-start">
          <Link to="/tasks" className="btn bg-rango-button text-white">
            Get Started
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
