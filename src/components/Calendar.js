import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('ko', {
  week: {
      dow: 1,
      doy: 1,
  },
});
const localizer = momentLocalizer(moment);

const dummyEvents = [
  {
    allDay: false,
    end: new Date('December 09, 2022 20:00:00'),
    start: new Date('December 09, 2022 06:00:00'),
  }
];

const Calendar = props => (
  <div className="calendar_container">
    <div className="container_description">
      Do you wish you had a better plan for the day, the week, the month and even for this year?
      Are you tired of trying to meal plan all in your 🧠?
      Instead of worrying about what to cook every meal, let's plan what to eat in advance.
      Use the calendar below to add what you'll be eating at each meal:
    </div>
    <div className='calendar_wrapper'>
      <BigCalendar
        localizer={localizer}
        events={dummyEvents}
        style={{height: '60vh', padding: '20px', border: "3px solid pink"}}
        startAccessor="start"
        endAccessor="end"
        titleAccessor={'title'}
      />
    </div>
  </div>
)

export default Calendar;
