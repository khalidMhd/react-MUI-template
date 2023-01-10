export const onPast = (e) => {
    if (/[^A-Za-z0-9\d]/.test(e.clipboardData.getData("text")))
      e.preventDefault();
  }

//use
//   onPaste={(e) => onPast(e)}
