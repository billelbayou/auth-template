"use client";
import { getFormData } from "@/lib/actions";
import { useActionState } from "react";

export default function Home() {
  const [state, formAction, pending] = useActionState(getFormData, undefined);
  return (
    <div>
      <form action={formAction}>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <button type="submit">Submit</button>
      </form>
      {pending ? (
        <p>Loading...</p>
      ) : state?.error ? (
        <p>{state.error}</p>
      ) : (
        <p>{state?.message}</p>
      )}
    </div>
  );
}
