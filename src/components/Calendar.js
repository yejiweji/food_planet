import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./Calendar.css";

moment.locale('ko', {
  week: {
      dow: 1,
      doy: 1,
  },
});
const localizer = momentLocalizer(moment);

export default class Calendar extends PureComponent {
  static propTypes = {
    handleMealPlanSearch: PropTypes.func,
    mealPrepIsLoading: PropTypes.bool,
    mealPreps: PropTypes.object,
  };

  getDateValues = () => {
    const curr = new Date();
    const sun = curr.getDate() - curr.getDay();
    const mon = sun + 1;
    const tues = sun + 2;
    const wed = sun + 3;
    const thurs = sun + 4;
    const fri = sun + 5;
    const sat = sun + 6;

    const sunDate = new Date(curr.setDate(sun)).toUTCString();
    const monDate = new Date(curr.setDate(mon)).toUTCString();
    const tuesDate = new Date(curr.setDate(tues)).toUTCString();
    const wedDate = new Date(curr.setDate(wed)).toUTCString();
    const thurDate = new Date(curr.setDate(thurs)).toUTCString();
    const fridDate = new Date(curr.setDate(fri)).toUTCString();
    const satDate = new Date(curr.setDate(sat)).toUTCString();

    return [sunDate, monDate, tuesDate, wedDate, thurDate, fridDate, satDate];
 }

  render() {
    const {
      handleMealPlanSearch,
      mealPrepIsLoading,
      mealPreps,
    } = this.props;

    const calendarEvents = [];
    Object.keys(mealPreps).forEach(day => {
      mealPreps[day].meals.forEach((meal, index) => {
        const { title, readyInMinutes, sourceUrl } = meal;
        const datesForTheWeek = this.getDateValues();
        let date = "";
        if (day === "sunday") {
          date = datesForTheWeek[0];
        }
        if(day === "monday") {
          date = datesForTheWeek[1];
        }
        if (day === "tuesday") {
          date = datesForTheWeek[2];
        }
        if (day === "wednesday") {
          date = datesForTheWeek[3];
        }
        if (day === "thursday") {
          date = datesForTheWeek[4];
        }
        if (day === "friday") {
          date = datesForTheWeek[5];
        }
        if (day === "saturday") {
          date = datesForTheWeek[6];
        }

        let dateToFormat = new Date(date);
        let formattedStartDate;
        let formattedEndDate;
        if (index === 0) {
          formattedStartDate = dateToFormat.setHours(8, 35, 1);
          formattedEndDate = dateToFormat.setHours(8+2, 35, 1);
        }
        if (index === 1) {
          formattedStartDate = dateToFormat.setHours(8+4, 0, 0);
          formattedEndDate = dateToFormat.setHours(8+4+2, 0, 0);
        }
        if (index === 2) {
          formattedStartDate = dateToFormat.setHours(8+4+4, 15, 0);
          formattedEndDate = dateToFormat.setHours(8+4+4+2, 0, 0);
        }

        calendarEvents.push({
          title: <span>
            {title}: ready in <b>{readyInMinutes} mins </b>
            <Button href={sourceUrl} variant="outline-info" size="sm" target="_blank">see full recipe</Button>
          </span>,
          allDay: false,
          start: new Date(formattedStartDate),
          end: new Date(formattedEndDate),
        });
      });
    });

    return (
      <div className="calendar_container">
        <div className="container_description">
          Do you wish you had better meals planned for the week?
          Are you tired of trying to plan them all on your own?
          Instead of worrying about what to cook at every meal, let's generate this week's meal plan in advance.
          Use the calendar below to see what you will be cooking this week:
        </div>
        <Button
          variant="outline-info"
          id="button-addon2"
          onClick={handleMealPlanSearch}
          size="lg"
        >
          {mealPrepIsLoading ?
            <span>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
                Loading...
            </span> : <span>✨ Generate my meal plan ✨</span>}
        </Button>
        <div className='calendar_wrapper'>
          <div className="calendar_tips">⭐️ Tip: use the Month, Week, Day and Agenda tabs below to see your week's meal plan details!</div>
          <BigCalendar
            localizer={localizer}
            events={calendarEvents}
            style={{height: '70vh', padding: '20px', border: "3px solid pink"}}
            startAccessor="start"
            endAccessor="end"
            defaultView="month"
            titleAccessor={'title'}
          />
        </div>
      </div>
    );
  }
}
