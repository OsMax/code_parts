export const loader1 = {
  js: `
<div className={css.loaderont}>
    <div className={css.loader}></div>
</div>
`,
  css: `
.loaderont {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  width: 50px;
  aspect-ratio: 1;
  display: grid;
  border: 4px solid #0000;
  border-radius: 50%;
  border-right-color: #99b;
  animation: l15 1s infinite linear;
}
.loader::before,
.loader::after {
  content: "";
  grid-area: 1/1;
  margin: 2px;
  border: inherit;
  border-radius: 50%;
  animation: l15 2s infinite;
}
.loader::after {
  margin: 8px;
  animation-duration: 3s;
}
@keyframes l15 {
  100% {
    transform: rotate(1turn);
  }
}
`,
};

export const loader2 = {
  js: `
<div className={css.loaderont}>
    <div className={css.loader}></div>
</div>
`,
  css: `
.loader {
  --d: 22px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  color: #25b09b;
  box-shadow: 
    calc(1 * var(--d))      calc(0 * var(--d))     0 0,
    calc(0.707 * var(--d))  calc(0.707 * var(--d)) 0 1px,
    calc(0 * var(--d))      calc(1 * var(--d))     0 2px,
    calc(-0.707 * var(--d)) calc(0.707 * var(--d)) 0 3px,
    calc(-1 * var(--d))     calc(0 * var(--d))     0 4px,
    calc(-0.707 * var(--d)) calc(-0.707 * var(--d)) 0 5px,
    calc(0 * var(--d))      calc(-1 * var(--d))    0 6px;
  animation: l27 1s infinite linear;
}

@keyframes l27 {
  100% {
    transform: rotate(1turn);
  }
}
`,
};
