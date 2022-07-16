import Button from "../Button";

import styles from "./search.module.css";

function SearchBar({ handleSearch, handleChangeSearch, search }) {
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input_search}
        value={search}
        type="text"
        onChange={handleChangeSearch}
        placeholder="Buscar contacto"
      />
      <Button onClick={handleSearch} children="Buscar" />
    </div>
  );
}

export default SearchBar;
