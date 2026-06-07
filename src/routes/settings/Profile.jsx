import { Input, useModal, useState } from "../..";
import { getUserById } from "../../js/users";

function Profile() {
  const localUser = getUserById(2);
  const { openModal, isSucceed } = useModal();

  const [userValid, setUserValid] = useState(true);

  const onKeyHandler = (value, type) => {
    let length = value.length;

    if (value === "") {
      length = 0;
    } else if (value.includes(" ")) {
      length = value.replace(/\s+/g, "").length;
    }

    if (type === "username") {
      if (length < 4) {
        setUserValid(false);
        openModal("Minimum length is 4.");
        return;
      } else if (length > 9) {
        setUserValid(false);
        openModal("Maximum length is 10.");
        return;
      } else {
        setUserValid(true);
      }
    } else if (type === "about") {
      if (length > 19) {
        openModal("Maximum length is 20.");
      }
    }
  };

  const saveHandler = () => {
    if (userValid) openModal("Changes are saved.", true);
    else openModal("Username isn't valid.");
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
      <div>
        <div className="size-24 profilePicture hover:bg-blue-800">
          <input
            className="cursor-pointer size-full opacity-0 z-10"
            type="file"
            title="Change the picture"
            accept="image/png,image/jpeg,image/webp"
          />
        </div>
      </div>
      <div className="user  flex flex-col gap-2 items-center justify-center">
        <Input placeholder={"Username"}>
          <input
            className="w-full bg-gray-100"
            type="text"
            placeholder={"Username"}
            defaultValue={localUser.username}
            maxLength={10}
            minLength={4}
            onKeyUp={(e) => onKeyHandler(e.target.value, "username")}
          />
        </Input>
        <Input placeholder={"About"}>
          <input
            className="w-full bg-gray-100"
            type="text"
            placeholder={"About"}
            defaultValue={localUser.about}
            maxLength={20}
            onKeyUp={(e) => onKeyHandler(e.target.value, "about")}
          />
        </Input>
        <button onClick={saveHandler}>Save</button>
      </div>
    </div>
  );
}

export default Profile;
