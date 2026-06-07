import { AccountIcon, PasswordIcon, MailIcon, AboutIcon } from "..";
function Input({ children, placeholder, value }) {
  const icons = [
    { name: "Username", svg: <AccountIcon /> },
    { name: "Password", svg: <PasswordIcon /> },
    { name: "Email", svg: <MailIcon /> },
    { name: "About", svg: <AboutIcon /> },
  ];
  const iconComp = icons.find((i) => i.name === placeholder)?.svg;

  if (children)
    return (
      <div className="w-60">
        <div className="input">
          <div className="w-1/6 flex items-center justify-center">
            {iconComp}
          </div>
          {children}
        </div>
      </div>
    );
}

export default Input;
