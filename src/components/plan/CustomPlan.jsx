const CustomPlan = ({
  activities,
  handleActivityChange,
  activityOptions,
  edit,
}) => {
  return (
    <div>
      <h2 className="calendarTitle">Weekly Calendar</h2>
      <div className="calendar">
        <table>
          <thead>
            <tr>
              <th>Day</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(activities).map((day) => (
              <tr className="row" key={day}>
                <td>{day}</td>
                <td className="activity">{activities[day]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="edit" onClick={edit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default CustomPlan;
