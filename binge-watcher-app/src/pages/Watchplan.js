import React, { useState } from "react";
import MovieRow from "../components/MovieRow";
import TVRow from "../components/TVRow";
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import WatchplanRow from "../components/WatchplanRow";
import Box from "@material-ui/core/Box";
import { Helmet } from "react-helmet";
import WatchplanDisplay from "../components/WatchplanDisplay";
import EmptyPlan from "../components/EmptyPlan"

let createRows = "";

export default function Watchplan(props) {
  const [planList, setPlanList] = useState(props.watchplan);
  const [selectedPlan, setSelectedPlan] = useState()

  const handleTrash = (index) => {
    console.log("trash card", index);
    const trashedList = planList.filter((_, i) => i !== index);
    setPlanList(trashedList);
    props.trash(trashedList)
  };

  const handleToggle = (input) => {
    console.log(`toggle selected ${input}`)
    setSelectedPlan(input) 
  }

  createRows = planList.map((each, i) => (
    <WatchplanRow handleTrash={handleTrash} handleToggle={handleToggle} index={i} medium={each.medium} runtime={each.runtime}/>
  ));

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Binge Watcher - Watchplan</title>
      </Helmet>
      <Box pt={3}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={5}>
            {props.watchplan[0].medium !== "none" ? createRows : <EmptyPlan/>}
            {/* {createRows} */}
          </Grid>
          <Grid item xs={12} sm={12} md={7}>
            <WatchplanDisplay fullData={props.watchplan} selectedPlan={selectedPlan}/>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

// let list = [];
// let totalList= []

// export default function Watchplan(props) {
//   const [showPlan, setShowPlan] = useState(false);

//   const selectPlan = () => {
//     console.log("selectPlan clicked");
//     setShowPlan(!showPlan);
//   };

//   if (props.medium === "movie") {
//     list = props.watchplan.map((suggestion) => (
//       <>
//         <MovieRow data={suggestion} />
//       </>
//     ));

//   } else if (props.medium === "tv") {
//     list = props.watchplan.map((suggestion) => (
//       <>
//         <TVRow data={suggestion} medium={props.medium}/>
//       </>
//     ));
//   }

//   return (
//     <>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Binge Watcher - Watchplan</title>
//       </Helmet>
//       <Container>
//         <Box pt={3}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={12} md={5}>
//               <WatchplanRow selectPlan={selectPlan} />
//             </Grid>
//             <Grid item xs={12} sm={12} md={7}>
//               {showPlan ? list : ""}
//             </Grid>
//           </Grid>
//         </Box>
//       </Container>
//     </>
//   );
// }
