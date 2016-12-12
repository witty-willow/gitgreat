var FeatureNavigation = (props) => (
  <div id="bottomNav">
    <button className="wtbBtn" value="whatToBringBtn" onClick={(e) => props.changeDisplay(e)}>What To Bring</button>
    <button className="actBtn" value="activitiesBtn" onClick={(e) => props.changeDisplay(e)}>Activities (under construction)</button>
    <button className="reminderBtn" value="reminderBtn" onClick={(e) => props.changeDisplay(e)}>Reminders (under construction)</button>
  </div>
);

window.FeatureNavigation = FeatureNavigation;