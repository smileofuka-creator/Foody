"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import * as z from "zod";

import { Button } from "@/components/ui/button";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import axios from "axios";

const formSchema = z.object({
  email: z.string().email("Та зөв мэйл оруулна уу"),
  password: z.string().min(6, "Урт пасс хий").max(10, "Богино пасс хий"),
});

const Page = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Durmee sn dagasan bn ");

    await axios.post("http://localhost:3001/signin", {
      email: data.email,
      password: data.password,
    });
  }
  //     toast("You submitted the following values:", {
  //       description: (
  //         <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
  //           <code>{JSON.stringify(data, null, 2)}</code>
  //         </pre>
  //       ),
  //       position: "bottom-right",
  //       classNames: {
  //         content: "flex flex-col gap-2",
  //       },
  //       style: {
  //         "--border-radius": "calc(var(--radius)  + 4px)",
  //       } as React.CSSProperties,
  //     });
  //   }

  return (
    <div className="w-1/2 flex justify-center items-center h-screen flex-col">
      <div>
        <Button variant="outline">
          <ChevronLeft />
        </Button>
        <h2 className="font-bold text-2xl">Login</h2>
        <p className="text-muted-foreground">
          Log in to enjoy your favorite dishes.
        </p>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Email ee oruulna uu
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Login button not working on mobile"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-description">
                    Password
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Password oo oruulna uu"
                    autoComplete="off"
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-rhf-demo">
            Submit
          </Button>
        </Field>
      </div>
      {/* <div className="w-1/2 flex h-screen">
        <Image
          src="/login.png"
          alt="Delivery rider"
          fill
          className="object-cover"
        />{" "}
      </div> */}
    </div>
  );
};

export default Page;

// ("use client");
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronLeft } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const SignUpPage = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full bg-white">
//       {/* ЗҮҮН ХЭСЭГ: Форм байрлах хэсэг */}
//       <div className="flex flex-col justify-between p-8 md:p-16 max-w-[440px] mx-auto w-full h-full">
//         {/* Буцах товчлуур */}
//         <div className="pt-4">
//           <Button
//             variant="outline"
//             size="icon"
//             className="rounded-full w-9 h-9 border-gray-200"
//             asChild
//           >
//             <Link href="/">
//               <ChevronLeft className="w-4 h-4 text-gray-600" />
//             </Link>
//           </Button>
//         </div>

//         {/* Үндсэн Форм */}
//         <div className="space-y-6 my-auto">
//           <div className="space-y-2">
//             <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
//               Create your account
//             </h1>
//             <p className="text-sm text-gray-500 font-medium">
//               Sign up to explore your favorite dishes.
//             </p>
//           </div>

//           <div className="space-y-4">
//             <Input
//               type="email"
//               placeholder="Enter your email address"
//               className="rounded-xl border-gray-200 h-12 text-sm px-4 focus-visible:ring-gray-400"
//             />

//             <Button className="w-full bg-[#D6D6D6] hover:bg-[#C2C2C2] text-white font-medium h-12 rounded-xl text-sm transition">
//               Let's Go
//             </Button>
//           </div>
//         </div>

//         {/* Доод хэсэг: Нэвтрэх линк */}
//         <div className="text-center text-sm text-gray-500 pb-4">
//           Already have an account?{" "}
//           <Link
//             href="/login"
//             className="text-blue-600 hover:underline font-medium"
//           >
//             Log in
//           </Link>
//         </div>
//       </div>

//       {/* БАРУУН ХЭСЭГ: Том зураг */}
//       <div className="hidden md:block relative w-full h-full p-4">
//         <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-inner">
//           <Image
//             src="/login.png"
//             alt="Delivery rider"
//             fill
//             className="object-cover"
//           />{" "}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;
