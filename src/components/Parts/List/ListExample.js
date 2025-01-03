export const example = `//EXAMPLE CODE


const List = ({array}) => {
  const [list, setList] = useState([]);

  const getList = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/api/list");
      setList(data); 
    } catch (error) {
      console.error("Error fetching list:", error.message);
    }
  };
  useEffect(() => {
    getList();
  }, []);

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
            {list.length > 0 ? (
            list.map((item) => {
              return (
                <li style={{ padding: 6, boxShadow: "2px 2px 2px #bbb" }}>
                  {item.item}
                </li>
              );
            })
          ) : (
            <p style={{ color: "#bbb" }}>No items available</p>
          )}
        </ul>
      </div>
  );
};
`;
