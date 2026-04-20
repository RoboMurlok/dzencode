import { NavLink } from "react-router-dom";
export default function Navbar({ navLinks, user, ...props }) {
  const { avatar, subavatar } = user;

  return (
    <aside {...props}>
      <div className="avatar">
        <div className="circle">
          <img src={avatar} alt="user" width={120} height={120} />
        </div>
        <div className="circle subimages">
          <img src={subavatar} alt="user" width={15} height={15} />
        </div>
      </div>

      <nav {...props}>
        {navLinks.map((link, index) => (
          <NavLink key={index} to={link.path}>
            {link.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
