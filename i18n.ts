import i18n from "i18next";
import { initReactI18next } from "react-i18next";
i18n.use(initReactI18next).init({
  fallbackLng: "uz",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    uz: {
      translation: {
        home: "Bosh sahifa",
        products: "Mahsulotlar",
        about: "Biz haqimizda",
        contact: "Bog'lanish",
        search: "Qidirish",
        login: "Kirish",
        register: "Ro'yxatdan o'tish",
        cart: "Savat",
        product: "Mahsulot",
        category: "Kategoriya",
        "Maxsus buyurtma": "Maxsus buyurtma",
        "Barcha mahsulotlar": "Barcha mahsulotlar",
        savatga: "Savatga",
      },
    },
    en: {
      translation: {
        home: "Home",
        products: "Products",
        about: "About us",
        contact: "Contact",
        search: "Search",
        login: "Login",
        register: "Register",
        cart: "Cart",
        product: "Product",
        category: "Category",
        "Maxsus buyurtma": "Special order",
        "Barcha mahsulotlar": "All products",
        savatga: "Add to cart",
      },
    },
    ru: {
      translation: {
        home: "Главная",
        products: "Товары",
        about: "О нас",
        contact: "Контакты",
        search: "Поиск",
        login: "Вход",
        register: "Регистрация",
        cart: "Корзина",
        product: "Товар",
        category: "Категория",
        "Maxsus buyurtma": "Особое распоряжение",
        "Barcha mahsulotlar": "Все продукты",
        savatga: "В корзину",
      },
    },
  },
});

export default i18n;
