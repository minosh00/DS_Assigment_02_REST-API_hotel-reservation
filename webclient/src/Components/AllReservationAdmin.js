
import React , {useState, useEffect} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Error from "../Components/Error";
import Loader from "../Components/Loader";
import Success from "../Components/Success";
import { Link } from "react-router-dom";



 function AllReservationAdmin() {
    const [bookings, setbookings] = useState([]);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(false);
    const [success, setsuccess] = useState(false);
    useEffect(async () => {
      try {
        setloading(true);
        const data = await (
          await axios.get("http://localhost:5000/api/bookings/getallbookings")
        ).data;
        setbookings(data);
        setloading(false);
      } catch (error) {
        setloading(false);
        seterror(true);
      }
    }, []);
      return (
          <div className='col-md-11'>
              <h1>All Reservation</h1>
              {loading ? (<Loader/>) : error ? (<Error/>) : (<div>
  
                <Link to="/Admin">
      <button type="button" class="btn btn-primary">
        back to admin
      </button>
    </Link>
    <br></br>

                     <table className='table table-bordered table-dark'>
                         <thead className='bs'>
                             <tr>
                                 <th>Booking Id</th>
                                 <th>Userid</th>
                                 <th>Room</th>
                                 <th>From</th>
                                 <th>To</th>
                                 <th>Status</th>
                             </tr>
                         </thead>
                         <tbody>
                             {bookings.map(booking=>{
                                 return <tr>
                                     <td>{booking._id}</td>
                                     <td>{booking.userid}</td>
                                     <td>{booking.room}</td>
                                     <td>{booking.fromdate}</td>
                                     <td>{booking.todate}</td>
                                     <td>{booking.status}</td>
                                 </tr>
                             })}
                         </tbody>
                     </table>
  
              </div>)}
          </div>
      )
  }
  
  export default AllReservationAdmin;