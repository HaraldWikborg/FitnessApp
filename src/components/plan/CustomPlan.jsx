const CustomPlan = ({
  activities,
  handleActivityChange,
  activityOptions,
  edit,
}) => {
  return (
    <div>
      <h2>Weekly Calendar</h2>
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
                  <option value="">Select Activity</option>
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
      <button onClick={edit}>Edit</button>
    </div>
  );
};

export default CustomPlan;
