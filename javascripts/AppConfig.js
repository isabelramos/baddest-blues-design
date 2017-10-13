app.config(function($routeProvider) {
  $routeProvider
    // .when("/", {
    //   templateUrl: "partials/navbar.html",
    //   controller: "NavCtrl"
    // })
    .when("/logodesign", {
      templateUrl: "partials/logo-design.html",
      controller: "LogoDesignCtrl"
    })
    // .when("/typography", {
    //   templateUrl: "partials/typography.html",
    //   controller: "TypographyCtrl"
    // })
    // .when("/webdesign", {
    //   templateUrl: "partials/web-design.html",
    //   controller: "WebDesignCtrl"
    // })
    // .when("/aboutcontact", {
    //   templateUrl: "partials/about-contact.html",
    //   controller: "AboutContactCtrl",
    //   resolve: {isAuth}
    // })
    .otherwise("/");
});