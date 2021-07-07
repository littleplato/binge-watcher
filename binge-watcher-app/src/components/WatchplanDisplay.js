import React, { useState } from "react";
import MovieRow from "./MovieRow";
import TVRow from "./TVRow";

export default function WatchplanDisplay(props) {
  const [showData, setShowData] = useState(props.fullData);
  const showCard =
    showData[props.selectedPlan]?.medium === "tv"
      ? showData[props.selectedPlan]?.suggestions.map((show) => (
          <TVRow data={show} />
        ))
      : showData[props.selectedPlan]?.suggestions.map((show) => (
          <MovieRow data={show} />
        ));

  return <div>{showCard}</div>;
}
