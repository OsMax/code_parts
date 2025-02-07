export const loaderExample = {
  js: `
<div className={css.loaderont}>
    <div className={css.loader}></div>
</div>
`,
  css: `
.loadercont {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  --d: 22px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  color: #99b;
  box-shadow: 
    calc(1 * var(--d))      calc(0 * var(--d))      0 0,
    calc(0.707 * var(--d))  calc(0.707 * var(--d))  0 1px,
    calc(0 * var(--d))      calc(1 * var(--d))      0 2px,
    calc(-0.707 * var(--d)) calc(0.707 * var(--d))  0 3px,
    calc(-1 * var(--d))     calc(0 * var(--d))      0 4px,
    calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 5px,
    calc(0 * var(--d))      calc(-1 * var(--d))     0 6px;
  animation: l27 1s infinite linear;
}

@keyframes l27 {
  100% {
    transform: rotate(1turn);
  }
}
`,
};
