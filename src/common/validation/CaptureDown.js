export const OnKeyCapture = (e) => {
  if (/[^A-Za-z0-9-@\d]/.test(e.key)) e.preventDefault();
};

// use
// onKeyDownCapture
