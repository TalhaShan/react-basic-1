import { Fragment, MouseEvent, useState } from "react";
interface ListGroupProp {
  items: string[];
  heading: string;
  onSelectionItem: (item: string) => void; //function call as parameter to render each item
}

// function ListGroup(props: ListGroupProp) {

function ListGroup({ items, heading, onSelectionItem }: ListGroupProp) {
  // const items = ["Newyork", "Sydney", "Karachi", "Vilnius"];
  // let items = ["Newyork", "Sydney", "Karachi", "Vilnius"];
  // let selectedIndex = 0;
  // items = [];
  const handleClick = (event: MouseEvent) => console.log(event);

  //state hook
  // const arr = useState(-1);
  // arr[0];
  // arr[1];
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <Fragment>
      {/* <h1>List</h1> */ <h1>{heading}</h1>}
      {items.length === 0 ? <p>No item found</p> : null}
      {/* simplfy true && anything = anything , false && anything = false; */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {
          items.map((item, index) => (
            <li
              // className="list-group-item active"

              className={
                index === selectedIndex
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              // onClick={() => console.log(item, index)}
              // onClick={handleClick}
              onClick={() => {
                setSelectedIndex(index);
                onSelectionItem(item);
              }}
            >
              {item}
            </li>
          ))

          /* <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li> */
        }
      </ul>
    </Fragment>
  );
}

export default ListGroup;
