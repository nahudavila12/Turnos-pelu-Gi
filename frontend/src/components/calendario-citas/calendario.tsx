"use client"

import { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'moment/locale/es'

moment.locale('es')
const localizer = momentLocalizer(moment)

export default function CalendarioCitas() {
  const [events, setEvents] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, "hours").toDate(),
      title: "Corte de cabello"
    },
    {
      start: moment().add(2, "days").toDate(),
      end: moment().add(2, "days").add(2, "hours").toDate(),
      title: "Tinte y peinado"
    }
  ])

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('Nuevo evento')
    if (title) {
      setEvents([
        ...events,
        {
          start,
          end,
          title
        }
      ])
    }
  }

  return (
    <div className="h-[600px] p-4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        onSelectSlot={handleSelect}
        selectable
        messages={{
          next: "Siguiente",
          previous: "Anterior",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día"
        }}
      />
    </div>
  )
}