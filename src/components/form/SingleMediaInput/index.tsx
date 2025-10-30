import React from "react";
import handleSingleFileChange from "@/utils/helperFn/handleSingleFileChange";
import type { UseFormRegister, FieldValues, Path } from "react-hook-form";
import { FaImage } from "react-icons/fa6";
import { useTranslations } from "next-intl";

interface SingleMediaInputProps<T extends FieldValues> {
  title: string;
  id: Path<T>;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
  setValue: (field: Path<T>, value: any, options?: any) => void;
  placeholder?: string;
  register: UseFormRegister<T>;
  image?: string | null;
}

export default function SingleMediaInput<T extends FieldValues>({
  title,
  id,
  setImage,
  setValue,
  placeholder,
  register,
  image,
  
}: SingleMediaInputProps<T>) {
  const t = useTranslations()
  const placed = placeholder ?? t("common.add-photo");
  return (
    <div>
      <label className="block text-gray-700 font-semibold mb-2 capitalize">{title}</label>
      <div className="border border-gray-400 bg-gradient-primary text-white rounded-lg px-8 py-3">
        <label className="cursor-pointer ">
          <input
            type="file"
            accept="image/*"
            multiple
            {...register(id)}
            className="hidden"
            onChange={(e) => handleSingleFileChange(e, setImage, setValue, id)}
          />
            <div className="flex items-center justify-center gap-2">
                <FaImage size={22}/>
                {placed}
            </div>
        </label>
        {image && (
          <div className="mt-4  ">
            <div className="relative">
              <img
                src={image}
                alt="Preview"
                className="w-full h-32 object-cover rounded border"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
