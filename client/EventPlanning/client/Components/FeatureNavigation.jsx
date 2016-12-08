var FeatureNavigation = (props) => (
  <div id="bottomNav">Bottom Navigation
    <button value="whatToBringBtn" onClick={() => props.changeDisplay()}>What To Bring</button>
    <button>Idea Generator (under construction)</button>
    <button>Another dummy feature</button>
  </div>
);

window.FeatureNavigation = FeatureNavigation;