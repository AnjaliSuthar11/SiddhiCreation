import { createFileRoute } from "@tanstack/react-router";
import { v2 as cloudinary } from "cloudinary";
import nodemailer from "nodemailer";
import { Buffer } from "node:buffer";

const cloudName = process.env["CLOUDINARY_CLOUD_NAME"];
const cloudApiKey = process.env["CLOUDINARY_API_KEY"];
const cloudApiSecret = process.env["CLOUDINARY_API_SECRET"];

if (!cloudName || !cloudApiKey || !cloudApiSecret) {
  throw new Error("Missing Cloudinary environment variables in .env.local");
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: cloudApiKey,
  api_secret: cloudApiSecret,
});

const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
const MAX_FILE_SIZE = 5 * 1024 * 1024;
const MAX_FILES = 5;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character]!;
  });
}

function uploadImage(buffer: Buffer, filename: string): Promise<string> {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        folder: "siddhi-on-creation/enquiries",
        resource_type: "image",
        public_id: `${Date.now()}-${filename.replace(/\.[^.]+$/, "")}`,
      },
      (error, result) => {
        if (error || !result) {
          reject(error || new Error("Image upload failed."));
          return;
        }

        resolve(result.secure_url);
      },
    ).end(buffer);
  });
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
         const gmailUser = process.env["GMAIL_USER"];
const gmailPassword = process.env["GMAIL_APP_PASSWORD"];
const recipient = process.env["CONTACT_TO_EMAIL"];

const cloudinaryName = process.env["CLOUDINARY_CLOUD_NAME"];
const cloudinaryKey = process.env["CLOUDINARY_API_KEY"];
const cloudinarySecret = process.env["CLOUDINARY_API_SECRET"];

          if (
            !gmailUser ||
            !gmailPassword ||
            !recipient ||
            !cloudinaryName ||
            !cloudinaryKey ||
            !cloudinarySecret
          ) {
            console.error("Contact form environment variables are missing.");

            return Response.json(
              { success: false, message: "The enquiry service is not configured yet." },
              { status: 500 },
            );
          }

          const data = await request.formData();

          const name = String(data.get("name") || "").trim();
          const phone = String(data.get("phone") || "").trim();
          const email = String(data.get("email") || "").trim();
          const service = String(data.get("service") || "").trim();
          const message = String(data.get("message") || "").trim();

          if (!name || !phone || !email || !service || !message) {
            return Response.json(
              { success: false, message: "Please complete all required fields." },
              { status: 400 },
            );
          }

          if (
            name.length > 150 ||
            phone.length > 40 ||
            email.length > 254 ||
            service.length > 200 ||
            message.length > 10000
          ) {
            return Response.json(
              { success: false, message: "Some enquiry fields are too long." },
              { status: 400 },
            );
          }

          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          if (!emailPattern.test(email)) {
            return Response.json(
              { success: false, message: "Please enter a valid email address." },
              { status: 400 },
            );
          }

          const uploadedFiles = data
            .getAll("referenceImages")
            .filter((item): item is File => item instanceof File && item.size > 0);

          if (uploadedFiles.length > MAX_FILES) {
            return Response.json(
              { success: false, message: "You can upload a maximum of 5 images." },
              { status: 400 },
            );
          }

          for (const file of uploadedFiles) {
            if (!allowedTypes.includes(file.type) || file.size > MAX_FILE_SIZE) {
              return Response.json(
                {
                  success: false,
                  message: "Each image must be JPG, PNG, or WebP and no larger than 5 MB.",
                },
                { status: 400 },
              );
            }
          }

          const imageLinks: string[] = [];

          for (const file of uploadedFiles) {
            const buffer = Buffer.from(await file.arrayBuffer());
            const safeFilename = file.name.replace(/[^a-zA-Z0-9_-]/g, "_");

            const imageUrl = await uploadImage(buffer, safeFilename);
            imageLinks.push(imageUrl);
          }

          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: gmailUser,
              pass: gmailPassword,
            },
          });

          const safeName = escapeHtml(name);
          const safePhone = escapeHtml(phone);
          const safeEmail = escapeHtml(email);
          const safeService = escapeHtml(service);
          const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");

          const imageHtml = imageLinks.length
            ? imageLinks
                .map(
                  (url, index) =>
                    `<p><a href="${url}" target="_blank" rel="noopener noreferrer">View reference image ${index + 1}</a></p>`,
                )
                .join("")
            : "<p>No reference images uploaded.</p>";

          await transporter.sendMail({
            from: `"Siddhi On Creation Website" <${gmailUser}>`,
            to: recipient,
            replyTo: email,
            subject: `New Website Enquiry - ${name}`,
            text: [
              "New enquiry from the Siddhi On Creation website",
              "",
              `Name: ${name}`,
              `Phone: ${phone}`,
              `Email: ${email}`,
              `Service: ${service}`,
              "",
              "Project Details:",
              message,
              "",
              "Reference Images:",
              ...(imageLinks.length
                ? imageLinks
                : ["No reference images uploaded."]),
            ].join("\n"),
            html: `
              <div style="font-family:Arial,sans-serif;max-width:700px;margin:auto;color:#292929">
                <h2 style="color:#9a793e">New Project Enquiry</h2>
                <p>You have received a new enquiry from the Siddhi On Creation website.</p>
                <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">
                  <tr><td><strong>Name</strong></td><td>${safeName}</td></tr>
                  <tr><td><strong>Phone</strong></td><td>${safePhone}</td></tr>
                  <tr><td><strong>Email</strong></td><td>${safeEmail}</td></tr>
                  <tr><td><strong>Service Required</strong></td><td>${safeService}</td></tr>
                </table>
                <h3>Project Details</h3>
                <p>${safeMessage}</p>
                <h3>Reference Images</h3>
                ${imageHtml}
              </div>
            `,
          });

          return Response.json({
            success: true,
            message: "Your enquiry has been sent successfully.",
          });
        } catch (error) {
          console.error("Contact form submission failed:", error);

          return Response.json(
            {
              success: false,
              message: "We could not send your enquiry. Please try again.",
            },
            { status: 500 },
          );
        }
      },
    },
  },
});