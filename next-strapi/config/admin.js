module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '90f1fc6dbed13ce33c6daa2defd6d6f0'),
  },
});
