import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import DiscordIcon from "@/components/ui/discord-icon";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <Card>
          <CardHeader className="flex flex-col items-center justify-center">
            <Image
              src="images/logo.svg"
              alt="Логотип портала Рейвуслуги"
              width="320"
              height="320"
            ></Image>
            <CardDescription className="text-center">
              Для продолжения необходимо войти в систему
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              <Button type="button" className="w-full">
                Войти через Discord <DiscordIcon className="text-white" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
