module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '046752834aa3310404bb8fe36c897bb5'),
  },
});
