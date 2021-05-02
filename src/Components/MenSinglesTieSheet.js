import { React} from "react";
import NavBar from "./NavBar";


import MenSingleGame from "./MenSingleGame";


export default function MenSinglesTieSheet() {
//   const [MenSinglesPlayer, setMenSinglesPlayer] = useState([]);


//   useEffect(() => {
//     axios.get("http://localhost:80/getMenSinglesPlayer").then((response) => {
//       setMenSinglesPlayer(response.data);
//       console.log("MensSingleeeesssss", MenSinglesPlayer);
//       console.log("lol")
//     });
//   }, []);


  return (
    <div>
      <NavBar />

      <div className="container addEvents border border-success"></div>
      <div className="containers float-left" width="100px">
        {/* {
                    (MenSinglesPlayer || []).map((data, index) => (
                        <div>

                          <MensingleTie data = {data} index = {index} />  
                            
                        </div>

                    ))
                   
                } */}
      </div>

      <div className="container border border-success">
        <div className="containers float-left flex" width="100px">
          <MenSingleGame />

        </div>
      </div>
    </div>
  );
}
