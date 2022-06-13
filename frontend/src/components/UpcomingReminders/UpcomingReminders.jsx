// import { useEffect, useState } from "react";





// const UpcomingReminders = ( props) => {

//     const [upcomingReminders, setUpcomingReminders] = useState([])

//     const tempToday = new Date();
//     const today = tempToday.getFullYear() + "-"+(tempToday.getMonth()+1)+"-"+tempToday.getDate()
  
//     CompareDates(props);
//     function CompareDates(){
//         debugger
  
//         let results = []

//         props.reminders.forEach(reminder => {
                
//                 var expiredDate = new Date("{{ value|date:reminder.expired_date}}" * 1000)
//                 var expired = expiredDate.getFullYear() + "-"+(expiredDate.getMonth()+1)+"-"+expiredDate.getDate()

//                 var differenceInDates = Math.floor(parseInt(expired- today) )
//                 var dateDifference = (differenceInDates / (1000 * 3600 * 24) )
//                 console.log(differenceInDates)
//                 console.log(dateDifference)


//                 if(dateDifference <= 5 && dateDifference !== 0){
                    
//                     return setUpcomingReminders(results)
//                 } else {
//                     return false
//                 }


            
//         });
  
//     }




    

    





//     return ( 
        
//        <div>
//            <h1>Upcoming Reminders</h1>
//            {upcomingReminders && upcomingReminders.map((el) => {
//                 <p>
//                 {el.reminder} {el.plant_plant} {el.expired_date}
//                 </p>
//             })}


    


//         </div> 
//      );
// }
 
// export default UpcomingReminders;