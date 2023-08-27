import React from 'react';
import Card from '../components/Card';
import '../App';

export default function Layout() {
  return (
    <div>
      <div className="p-5">
        <h1 className="text-center">Let's Make A Deal</h1>
        <h2 className="text-center">Monty Hall Problem</h2>
      </div>
      <section className="bg-dark text-light px-5 p-lg-0 pt-lg-5 py-lg-5 text-center text-sm-start">
        <div className="container text-center d-lg-flex justify-content-center ">
          <div className="row text-center g-4">
            <div className="col-md"><Card /></div>
            <div className="col-md"><Card /></div>
            <div className="col-md"><Card /></div>
          </div>
        </div>
      </section>
    </div>



  );
};
