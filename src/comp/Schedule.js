import React from 'react';
import '../compCSS/Schedule.css';

class Schedule extends React.Component {
    render() {
       return (
         <div>
            <div class="month">
               <ul>
                  <li class="prev">&#10094;</li>
                  <li class="next">&#10095;</li>
                  <li class="month-year">September 2019</li>
               </ul>
            </div>
            
            <ul class="weekdays">
                  <li>Sunday</li>
                  <li>Monday</li>
                  <li>Tuesday</li>
                  <li>Wednesday</li>
                  <li>Thursday</li>
                  <li>Friday</li>
                  <li>Saturday</li>
            </ul>
      
            <ul class="days">
                  <li>1


                  </li>
                  <li>2


                  </li>
                  <li>3


                  </li>
                  <li>4


                  </li>
                  <li>5


                  </li>
                  <li>6


                  </li>
                  <li>7


                  </li>
                  <li>8


                  </li>
                  <li>9


                  </li>
                  <li>10
                  
                  </li>
                  <li>11


                  </li>
                  <li>12


                  </li>
                  <li>13


                  </li>
                  <li>14

                     
                  </li>
                  <li>15


                  </li>
                  <li>16


                  </li>
                  <li>17


                  </li>
                  <li>18


                  </li>
                  <li><span class="active">19


                  </span></li>
                  <li>20


                  </li>
                  <li>21


                  </li>
                  <li>22


                  </li>
                  <li>23



                  </li>
                  <li>24


                  </li>
                  <li>25


                  </li>
                  <li>26


                  </li>
                  <li>27


                  </li>
                  <li>28


                  </li>
                  <li>29


                  </li>
                  <li>30


                  </li>
            </ul>
         </div>
       )
    }
  }
  export default Schedule;