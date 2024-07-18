import mongoose from "mongoose";

export const validatorGlobal = mongoose.Schema.Types.String.set("validate", {
  validator: (value) =>
    value.trim() !== "",
  message: ({ path }) => `O Campo ${path} foi fornecido em branco. Não será aceito!`
});
