import LoginForm from "@/components/forms/LoginForm/LoginForm";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container mx-auto my-auto">
        <div className="sub-container max-w-[496px]">
          <h1 className="mb-10 w-fit text-center text-4xl font-bold">PsyTrack®</h1>
          <LoginForm />
          <div className="mt-10 flex justify-between text-sm">
            <p className="text-muted-foreground justify-items-end xl:text-left">
              © 2025 PsyTrack.
            </p>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.webp"
        alt="onboarding-img"
        height={640}
        width={1280}
        unoptimized
        className="hidden h-[70%] max-w-[60%] self-center object-cover lg:block"
      />
    </div>
  );
};

export default Login;
