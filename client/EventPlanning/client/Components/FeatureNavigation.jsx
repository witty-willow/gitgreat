var FeatureNavigation = (props) => (
  <div id="bottomNav">Bottom Navigation
    <button value="whatToBringBtn" onClick={(e) => props.changeDisplay(e)}>What To Bring</button>
    <button value="activitiesBtn" onClick={(e) => props.changeDisplay(e)}>Activities (under construction)</button>
    <button>Another dummy feature</button>
  </div>
);

window.FeatureNavigation = FeatureNavigation;