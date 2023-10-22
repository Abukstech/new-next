import { z } from "zod";

const Registerschema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(5),
});

export default Registerschema;
