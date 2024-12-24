export function getFormData(prevState: unknown, formData: FormData) {
  const name = formData.get("name");
  if (name) {
    return { message: `Hello, ${name}!` };
  } else {
    return { error: "Name is requierd" };
  }
}
