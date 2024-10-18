"use client"

import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import '@fullcalendar/common/main.css'
import '@fullcalendar/daygrid/main.css'
import '@fullcalendar/timegrid/main.css'

interface Event {
  title: string;
  start: string;
  end: string;
}

export default function CalendarioCitas() {
  const [events, setEvents] = useState<Event[]>([
    {
      title: "Corte de cabello",
      start: new Date().toISOString(),
      end: new Date(new Date().getTime() + 60 * 60 * 1000).toISOString(), // 1 hora después
    },
    {
      title: "Tinte y peinado",
      start: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000).toISOString(), // En 2 días
      end: new Date(new Date().getTime() + 2 * 24 * 60 * 60 * 1000 + 60 * 60 * 1000).toISOString(), // 1 hora después
    }
  ])

  const handleDateClick = (arg: { dateStr: string }) => {
    const title = window.prompt('Nuevo evento')
    if (title) {
      const newEvent = {
        title,
        start: arg.dateStr,
        end: arg.dateStr // Puedes ajustar esto según sea necesario
      }
      setEvents([...events, newEvent])
    }
  }

  return (
    <div className="h-[600px] p-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        editable={true}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
      />
    </div>
  )
}
