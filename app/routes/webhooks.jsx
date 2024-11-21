export async function action({ request }) {
    const payload = await request.json();
    console.log("Webhook received:", payload);
    // Handle event here, e.g., start payment processing with SATIM
  }
  