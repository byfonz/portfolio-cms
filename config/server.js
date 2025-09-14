module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS',[
      'ca554d1aff19100a554760f70cada8d8bf932d0e380c0c05a9ee275001bdf21e',
      '3d8a5ae9909396b32f6b47bc7daa0b4e9060578a2274d4465f9454f7c57aa2c4',
      'ff33bafb8da12d4f299958bbf34d386459836c1818b4b188f8705fa01787b05d',
      '4ada69673625c053b42b4e0ed394a13894f388879c0296c9f1f894d245e83b74'
    ]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: env('URL'),
  proxy: true
});
