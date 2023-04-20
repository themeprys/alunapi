import Logo from "./extensions/logo.jpg";

export default {
  config: {
    auth: { logo: Logo },
    menu: { logo: Logo },
    head: { favicon: Logo },
    locales: ["en"],
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Alun App",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard API",
        "Auth.form.welcome.subtitle": "Log in to your Alun account",
        "Auth.form.welcome.title": "Welcome to Alun App",
        "app.components.HomePage.welcome.again": "Alun App Dashboard API",
        "app.components.HomePage.welcomeBlock.content.again": "Develop by ThemePrys @ 2023",
        "app.components.HomePage.button.blog": "Documentation",
      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { releases: false },
  },
  bootstrap() {}, 
};