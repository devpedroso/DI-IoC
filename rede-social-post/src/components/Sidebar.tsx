import styles from "./Sidebar.module.css";
import { PencilSimpleLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
      />

      <div className={styles.profile}>
        <Avatar
          hasBorder
          src="https://avatars.githubusercontent.com/u/47677411?v=4"
        />

        <strong>Filipe Pedroso</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar perfil
        </a>
      </footer>
    </aside>
  );
}
