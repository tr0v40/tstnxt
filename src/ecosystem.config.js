module.exports = {
    apps : [{
      name   : "src",
      script : "npm",
      args   : "start",
      env: {
        PORT: 3000, // Você pode definir a porta que preferir
        NODE_ENV: "production",
      }
    }]
  };
