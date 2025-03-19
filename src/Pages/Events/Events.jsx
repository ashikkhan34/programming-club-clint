
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import EventPage from "./EventPage";

export default function Events() {
  const axiosPublic = useAxiosPublic()
  const {data : events = []} = useQuery({
    queryKey:['events'],
    queryFn: async () =>{
      const res = await axiosPublic.get('/events')
      return res.data
    }
  })
  console.log(events)
  

  return (
    <div>
        {
          events.map(event => <EventPage key={event._id} event={event}></EventPage>)
        }
    </div>
  );
}

