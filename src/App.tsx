//import Message from "./Message";

import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

// function App(){
//   return <div><Message /></div>
// }

// function App() {
//   let items = ["Newyork", "Sydney", "Karachi", "Vilnius"];
//   const handleSelectedItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectionItem={handleSelectedItem}
//       />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       {
//         /* <Alert> Hello World</Alert> */

//         <Alert>
//           {" "}
//           Hello <span>World</span>
//         </Alert>
//       }
//     </div>
//   );
// }

function App() {
  return (
    <div>
      {
        <Button color="secondary" onClick={() => console.log("clicked")}>
          My Farriah
        </Button>
      }
    </div>
  );
}
export default App;
