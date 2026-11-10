function once(fn) {
  return()=>{
    fn()
  }
}

const init = once(() => { console.log("run"); return 42; });
init(); // logs "run", returns 42
init(); // no log, returns 42

