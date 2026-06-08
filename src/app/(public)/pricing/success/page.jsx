// import { redirect } from "next/navigation";

// import { stripe } from "../../lib/stripe";

export default async function Success() {
//   const { session_id } = await searchParams;

//   if (!session_id)
//     throw new Error("Please provide a valid session_id (`cs_test_...`)");

//   const {
//     status,
//     customer_details: { email: customerEmail },
//   } = await stripe.checkout.sessions.retrieve(session_id, {
//     expand: ["line_items", "payment_intent"],
//   });

//   if (status === "open") {
//     return redirect("/");
//   }

 
    return (
      <section>
        <p>
          We appreciate your business! A confirmation email will be sent to example@gmail.com. If you have any questions, please email{" "}
          <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    );
  
}
