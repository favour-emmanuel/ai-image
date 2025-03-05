import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

type Props = {
  price: string;
  user: string;
  type: string;
};

const PriceCard = ({ price, user, type }: Props) => {
  return (
    <div className="bg-[#010101] py-8 px-12 rounded-xl text-center">
      <p className="mt-12 mb-2 text-3xl text-white font-semibold">{type}</p>
      <p className="text-white">Great for private individuals</p>
      <Separator className="my-8 opacity-20" />
      <div className="text-white font-semibold text-2xl">
        <span className="text-[3.6rem]">${price}/mo</span>
      </div>
      <Separator className="my-8 opacity-20" />
      <div className="mt-6 space-y-3 text-white opacity-50">
        <p>{user} User</p>
        <p>Untitled Projects</p>
        <p>Download Prototypes</p>
      </div>
      <div className="mt-6">
        <Button variant={"secondary"} size={"lg"} className="cursor-pointer">
          Get Now
        </Button>
      </div>
    </div>
  );
};

export default PriceCard;
