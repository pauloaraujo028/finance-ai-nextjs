import { Button } from "@/components/ui/button";
import { LogInIcon } from "lucide-react";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-1 lg:grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center space-y-4 p-8">
        <Image src="/logo.svg" alt="Finance AI" width={173} height={39} />
        <h1 className="text-4xl font-bold">Bem-vindo</h1>
        <p className="text-muted-foreground">
          A Finance AI é uma plataforma de gestão financeira que utiliza IA para
          monitorar suas movimentações, oferecer insights personalizados,
          facilitando o controle do seu orçamento.
        </p>
        <Button variant="outline">
          <LogInIcon className="mr-2" />
          Fazer login ou criar conta
        </Button>
      </div>
      <div className="relative hidden size-full lg:block">
        <Image src="/login.png" alt="Login" fill className="object-cover" />
      </div>
    </div>
  );
};

export default LoginPage;
