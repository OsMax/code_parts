import { toast } from "react-toastify";

export const copyCode = (example) => {
  navigator.clipboard
    .writeText(example)
    .then(() => {
      toast.success("Code is copy");
    })
    .catch((error) => {
      toast.error(error);
    });
};
