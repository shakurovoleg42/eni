import { useState } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Alert from "@mui/material/Alert";

import useModalFormStore from "@/src/store/storeForms/useModalForm";

const Modal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { formData, postModalForm } = useModalFormStore();
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    useModalFormStore.setState((state) => ({
      formData: { ...state.formData, [name]: value },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postModalForm();
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        onClose();
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        {showAlert && (
          <Alert severity="success">
            Мы получили Вашу заявку и скоро свяжемся с Вами.
          </Alert>
        )}
        <form onSubmit={handleSubmit} method="post">
          <div className="flex flex-row justify-between py-6 px-4 gap-[35px] select-none">
            <div className="flex flex-col gap-3 w-full max-w-[346px] h-[355px] justify-between">
              <label htmlFor="companyName">
                Название компании
                <Input
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="border-[2px] w-full h-[48px]"
                  required
                />
              </label>
              <label htmlFor="postalAddress">
                Юридический адрес
                <Input
                  name="postalAddress"
                  value={formData.postalAddress}
                  onChange={handleInputChange}
                  className="border-[2px] w-full h-[48px]"
                  required
                />
              </label>
              <label htmlFor="phoneNumber">
                Номер телефона
                <Input
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="border-[2px] w-full h-[48px]"
                  required
                />
              </label>
              <label htmlFor="email">
                Контактный Email
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-[2px] w-full h-[48px]"
                  required
                />
              </label>
              <div className="flex justify-center sm:hidden ">
                <Button
                  variant="submit"
                  size="submit"
                  type="submit"
                  className="font-[700] text-[25px] mt-7"
                >
                  Отправить
                </Button>
              </div>
            </div>
            <div className="hidden sm:flex bg-modal w-[484px] h-[355px] bg-no-repeat bg-center rounded-lg items-end justify-center">
              <Button
                variant="submit"
                size="submit"
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
