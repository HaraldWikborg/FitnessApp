const EditPlan = ({
  activities,
  handleActivityChange,
  activityOptions,
  saveActivities,
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
              <tr key={day}>
                <td>{day}</td>
                <td>
                  <select
                    value={activities[day]}
                    onChange={(e) => handleActivityChange(day, e)}
                  >
                    <option value="">---Select Activity---</option>
                    {activityOptions.map((activity) => (
                      <option key={activity} value={activity}>
                        {activity}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="edit" onClick={saveActivities}>
          Save Activities
        </button>
      </div>
    </div>
  );
};

export default EditPlan;
