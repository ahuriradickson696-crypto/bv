import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RECIPIENT_EMAIL = "ahuriratech@gmail.com";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { full_name, email, phone, faculty, programme, intake, message } = body;

    if (!full_name || !email || !phone || !faculty || !intake) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data, error: dbError } = await supabase
      .from("applications")
      .insert({
        full_name,
        email,
        phone,
        faculty,
        programme: programme || null,
        intake,
        message: message || null,
      })
      .select()
      .single();

    if (dbError) {
      return new Response(
        JSON.stringify({ error: "Failed to save application" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailBody = [
      "New Application Received",
      "========================",
      "",
      `Name: ${full_name}`,
      `Email: ${email}`,
      `Phone/WhatsApp: ${phone}`,
      `Faculty: ${faculty}`,
      `Programme: ${programme || "Not specified"}`,
      `Intake: ${intake}`,
      "",
      "Message:",
      message || "No message provided",
      "",
      `Submitted: ${new Date().toISOString()}`,
    ].join("\n");

    const whatsappBody = [
      `*New Application - Avance International University*`,
      "",
      `*Name:* ${full_name}`,
      `*Email:* ${email}`,
      `*Phone/WhatsApp:* ${phone}`,
      `*Faculty:* ${faculty}`,
      `*Programme:* ${programme || "Not specified"}`,
      `*Intake:* ${intake}`,
      `*Message:* ${message || "No message provided"}`,
      `*Submitted:* ${new Date().toISOString()}`,
    ].join("\n");

    const emailResponse = await fetch(
      `https://api.resend.com/emails`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Deno.env.get("RESEND_API_KEY") || ""}`,
        },
        body: JSON.stringify({
          from: "Avance Admissions <onboarding@resend.dev>",
          to: RECIPIENT_EMAIL,
          subject: `New Application: ${full_name} - ${intake} Intake`,
          text: emailBody,
        }),
      }
    );

    const emailOk = emailResponse.ok;

    return new Response(
      JSON.stringify({
        success: true,
        application_id: data.id,
        email_sent: emailOk,
        whatsapp_message: whatsappBody,
        recipient: RECIPIENT_EMAIL,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
