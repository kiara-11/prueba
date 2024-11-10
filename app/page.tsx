import Image from "next/image";
import Header from "@/components/Header";
import { Calendar } from "@/components/ui/calendar"
import * as React from "react"


export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div >
      <Header/>
      <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-md border"
  />
    </div>
  );
}
