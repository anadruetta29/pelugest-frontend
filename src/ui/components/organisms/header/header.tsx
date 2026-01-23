import LargeTitle from "../../atoms/large-title/large-title";
import style from "./style.module.css";

export default function Header() {
  return (
    <header className={style.header}>
		<LargeTitle text="PeluGest" />

		{/* <div className={style.actions}>
			<span className={style.user}>Admin</span>
		</div> */}
		
    </header>
  );
}

