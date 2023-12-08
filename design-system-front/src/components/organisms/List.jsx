import Item from "../atoms/Item";

const listItems = [
  {
    name: "item-1",
    title: "Item 1",
  },
  {
    name: "item-2",
    title: "Item 2",
  },
  {
    name: "item-3",
    title: "Item 3",
  },
  {
    name: "item-4",
    title: "Item 4",
  },
];

const List = () => {
  return (
    <div className="list">
      {listItems.map((item, index) => (
        <Item key={index.toString()}>{item.title}</Item>
      ))}
    </div>
  );
};

export default List;
