export const isValidCheck = data => {
  let flag = false;
  if (!data.emailshow && data.passshow) {
    alert("Invalid Email");
  } else if (!data.passshow && data.emailshow) {
    alert("Password must be greater than 6 characters!");
  } else if (!data.emailshow && !data.passshow) {
    alert("Invalid email and password");
  } else {
    flag = true;
  }
  return flag;
};
