import { Toggle } from "../..";
function Application() {
  const settings = [
    { id: 1, title: "setting1", status: false },
    { id: 2, title: "setting2", status: false },
    { id: 3, title: "setting3", status: true },
    { id: 4, title: "setting4", status: false },
  ];
  return (
    <div className="w-full h-full flex justify-center items-center">
      <ul className="w-full flex flex-col items-center justify-center">
        {settings.map((setting) => {
          return (
            <li
              key={setting.id}
              className="cursor-default w-4/5 md:w-2/3 lg:w-1/3 flex items-center justify-between p-2 border-b-2"
            >
              <span>{setting.title}</span>
              <Toggle Active={setting.status} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Application;
