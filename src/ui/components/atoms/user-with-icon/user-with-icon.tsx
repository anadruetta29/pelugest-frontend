import userIcon from "../../../assets/icons/user.svg";
import style from "./style.module.css";

type Props = {
    userName: string; 
}

export default function UserWithIcon( { userName }: Props ) {
  return (
    <div className={style.user}>
      <img
        src={userIcon}
        alt="Usuario"
        className={style.avatar}
      />
      <span className={style.name}>{userName}</span>
    </div>
  );
}
