import React from "react";
import { NavLink } from "react-router-dom";
// import { url } from "inspector";

function Welcome() {
  return (
    <div>
      <div
        className="jumbotron text-center"
        style={{ backgroundImage: "url('client/src/components/IMG_3307.JPG')" }}
      >
        <h1 className="logo">Gifts in the Gazebo</h1>
        Get the things you want the most!
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-9 pb-5">
            <div className="card text-center">
              <div className="card-body">
                <h1>Hello</h1>
                <p>
                  With this app, you can make your own personalized gift lists
                  for any occasion - weddings, baby showers, birthdays,
                  Christmas, and anything else you can think of.
                </p>
                <p>
                  First, create an account <a href="/signup">here</a>. Then, add
                  the items you want to your list. That's it! You can even
                  include links to allow your friends/guests to purchase the
                  items you want from wherever they're from - Amazon, Ebay,
                  Etsy, you name it!
                </p>
                <p>
                  Right now, you can create one list to hold all of your items,
                  but we're working on a way to create multiple lists. We know
                  your needs are going to evolve over time, and we'd like to be
                  there for you when you need it.
                </p>
                <h2>So, how can we help you today?</h2>
                <NavLink to="/Login" className="btn btn-primary mx-2">
                  Create/Edit List
                </NavLink>
                <NavLink to="/search" className="btn btn-success mx-2">
                  Search for lists
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
