export const example = `//EXAMPLE CODE

const array = ["example 1", "example 2", "example 3"];

const List = ({array}) => {
  return (
     <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            width: 280,
            border: "1px solid #fff",
            borderRadius: 5,
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: 8,
            listStyle: "none",
            color: "#fff",
          }}
        >
          {array.map((item) => {
            return (
              <li style={{ padding: 6, boxShadow: "2px 2px 2px #bbb" }}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
  );
};
`;
