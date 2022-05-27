import React from "react";
import Button from "components/Button";

export default function Confirm() {
  return (
  <main className="appointment__card appointment__card--confirm">
    <h1 className="text--semi-bold">Are you sure you want to cancel this appointment?</h1>
    <section className="appointment__actions">
      <Button danger>Cancel</Button>
      <Button danger>Confirm</Button>
    </section>
  </main>
  );
}