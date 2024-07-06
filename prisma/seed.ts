import fs from 'node:fs'
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

const firstNote = await prisma.note.findFirst()
const user = await prisma.user.findFirst()

if (!firstNote) {
    throw new Error("You need to have a note in the database first")
}

if (!user) {
    throw new Error("User doesnt exists")
}

await prisma.note.update({
    where: { id: firstNote.id },
    data: {
        images: {
            create: [
                {
                    altText: 'an adorable koala cartoon illustration',
                    contentType: 'image/png',
                    blob: await fs.promises.readFile(
                        './tests/fixtures/images/kody-notes/cute-koala.png',
                    ),
                },
                {
                    altText: 'a cartoon illustration of a koala in a tree eating',
                    contentType: 'image/png',
                    blob: await fs.promises.readFile(
                        './tests/fixtures/images/kody-notes/koala-eating.png',
                    ),
                },
            ]
        }
    }
})

await prisma.user.update({
    where: { id: user.id },
    data: {
        image: {
            create: {
                altText: 'an adorable koala cartoon illustration',
                contentType: 'image/png',
                blob: await fs.promises.readFile(
                    './tests/fixtures/images/kody-notes/cute-koala.png',
                ),
            }
        }
    }
})