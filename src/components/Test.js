const Test = () => {
  const data = [
    { id: 1, name: "Item A", date: "2024-03-18" },
    { id: 2, name: "Item B", date: "2024-03-18" },
    { id: 3, name: "Item C", date: "2024-03-19" },
    { id: 4, name: "Item D", date: "2024-03-19" },
    { id: 5, name: "Item E", date: "2024-03-20" },
    { id: 6, name: "Item F", date: "2024-03-20" },
    { id: 7, name: "Item G", date: "2024-03-20" },
  ];

  // const groupData = {};

  // data.forEach((item) => {
  //   const date = item.date;
  //   if (!groupData[date]) {
  //     groupData[date] = [];
  //   }
  //   groupData[date].push(item);
  // });

  // console.log("kk", groupData);
  // let groupedDate = Object.keys(groupData);

  function groupDate(items) {
    const groupData = {};
    for (let item of items) {
      const date = item.date;
      if (!groupData[date]) {
        groupData[date] = [];
      }
      groupData[date].push(item);
    }
    return groupData;
  }

  const groupedDate = groupDate(data);
  const groupDateKeys = Object.keys(groupedDate);
  console.log("🚀 ~ groupDate ~ ", groupDate(data));

  return (
    <div className=" text-center m-4 p-4">
      {groupDateKeys.map((items) => (
        <>
          <div id={items}>{items}</div>
          <div>
            {groupedDate[items].map((item) => (
              <div id={item.id}>{item.name}</div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Test;
