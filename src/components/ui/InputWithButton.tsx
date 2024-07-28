import { Button } from "./ButtonVariants "
import { Input } from "../ui/Input "


export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center space-x-5">
      <Input type="email" placeholder="Search..." />
      <Button type="submit" className="bg-black text-white">Search</Button>
    </div>
  );
}
