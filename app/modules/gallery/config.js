function config($stateProvider) {
  $stateProvider
  .state("authService", {
    url: "/",
    controller: "authController as authCtrl",
    template: require("./view.html")
  });
}

export default config;
