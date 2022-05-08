module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5992d5973b4e5f304355bbcbb6e2e99e'),
  },
});
