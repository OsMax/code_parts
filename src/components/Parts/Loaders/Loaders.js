import css from "./Loader.module.css";

const Loaders = () => {
  return (
    <div className={css.container}>
      <h1>
        <span>/</span>loaders
      </h1>
      <div className={css.loader}></div>
    </div>
  );
};

export default Loaders;
