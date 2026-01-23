import LargeTitle from "../../atoms/large-title/large-title";
import UserWithIcon from "../../atoms/user-with-icon/user-with-icon";
import style from "./style.module.css";

type Props = {
	userName: string
}

export default function Header( { userName}: Props) {
  return (
    <header className={style.header}>
		<LargeTitle text="PeluGest" />

		<div className={style.actions}>
			<UserWithIcon userName={userName} />
		</div> 

    </header>
  );
}

