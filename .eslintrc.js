module.exports = {
  root: true,
  extends: [
    "@react-native",
    "plugin:@typescript-eslint/recommended", // Menggunakan aturan rekomendasi untuk TypeScript
    "plugin:@typescript-eslint/recommended-requiring-type-checking", // Memerlukan analisis tipe saat ini
  ],
  parser: "@typescript-eslint/parser", // Parser untuk TypeScript
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    quotes: ["error", "single", "double"], // Mengizinkan penggunaan single quotes dan double quotes
    indent: ["error", 2], // Mengatur indentasi dengan 2 spasi
    semi: ["error", "always"], // Mengaktifkan penggunaan titik koma
    "react-hooks/exhaustive-deps": "warn", // Memberikan peringatan jika ada dependensi yang tidak digunakan
    "import/no-unused-modules": [
      "warn",
      {
        unusedExports: true,
        missingExports: true,
      },
    ],
  },
};
