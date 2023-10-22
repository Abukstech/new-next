import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

import Registerschema from "./schema";
import bycrpt from "bcrypt";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const validation = Registerschema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const user = await prisma.user.findUnique({ where: { email: body.email } });
  if (user)
    return NextResponse.json({ error: "User Already Exists" }, { status: 401 });

  const hashedPassword = await bycrpt.hash(body.password, 10);

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      hashedPassword,
    },
  });

  return NextResponse.json({ email: newUser.email });
}
