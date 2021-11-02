const formEndpoint = "https://formspree.io/f/xdoyegpk"
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

export const submit = async (name: string, email: string, msg: string) => {
  if (name === "" || email === "" || msg === "") {
    return { message: "Please fill all the fields", type: "error" }
  } else if (!emailRegex.test(email)) {
    return { message: "Please put a valid email", type: "error" }
  } else {
    try {
      await fetch(formEndpoint, {
        method: "POST",
        body: JSON.stringify({ name, email, msg }),
        headers: {
          Accept: "application/json",
        },
      })
      return { message: "Sent! Thank you", type: "success" }
    } catch (err) {
      return {
        message: "An error has ocurred, please try again",
        type: "error",
      }
    }
  }
}
