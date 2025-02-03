import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs/server"; 
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = async () => {
    const { userId } = await auth();

    if (!userId) throw new Error("Unauthorized");
        return { userId };
} 


export const ourFileRouter = {
    courseImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(() => auth())
        .onUploadComplete(async ({ metadata, file }) => {}),
    courseAttachment: f(["text", "image", "video", "audio", "pdf"])
        .middleware(() => handleAuth())
        .onUploadComplete( ({ }) => {}),
    chapterVideo: f({ video: {  maxFileCount: 1, maxFileSize: "512GB", } })
        .middleware(() => handleAuth())
        .onUploadComplete( () => {}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
