import React, { useEffect, useState } from 'react';
import  { useContext,  } from 'react';
import { UserContext } from '../../App';


const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

useEffect(() => {
    fetch('http://localhost:4000/bookings?email='+loggedInUser.email)
    .then(res => res.json())
    .then(data => setBookings(data));
}, [])

    return (
        <div>
            <h3>You have: {bookings.length} bookings </h3> 
            {
                bookings.map(book => <li>{book.name} from: {(new Date(book.checkIn).toDateString('MM/dd/yyyy'))} to: {(new Date(book.checkOut).toDateString('MM/dd/yyyy'))} </li>)
            }           
        </div>
    );

};

export default Bookings;