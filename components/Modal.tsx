import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Modal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <form action="">
          <div className="flex flex-row justify-between py-6 px-4 gap-[35px] select-none">
            <div className="flex flex-col gap-3 w-full max-w-[346px] h-[355px] justify-between">
              <label htmlFor="name">
                Название компании
                <Input className="border-[2px] w-full h-[48px]" />
              </label>
              <label htmlFor="address">
                Юридический адрес
                <Input className="border-[2px] w-full h-[48px]" />
              </label>
              <label htmlFor="phone_number">
                Номер телефона
                <Input className="border-[2px] w-full h-[48px]" />
              </label>
              <label htmlFor="email">
                Контактный Email
                <Input className="border-[2px] w-full h-[48px]" />
              </label>
              <div className="flex justify-center sm:hidden ">
                <Button
                  variant={"submit"}
                  size={"submit"}
                  type="submit"
                  className="font-[700] text-[25px] mt-7"
                >
                  Отправить
                </Button>
              </div>
            </div>
            <div className="hidden sm:flex bg-modal w-[484px] h-[355px] bg-no-repeat bg-center rounded-lg items-end justify-center">
              <Button
                variant={"submit"}
                size={"submit"}
                type="submit"
                className="font-[700] text-[25px] mb-3"
              >
                Отправить
              </Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default Modal;
