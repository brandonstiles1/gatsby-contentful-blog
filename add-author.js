module.exports = migration => {
  const guest = migration.createContentType('guest', {
    name: 'Guest',
    description: 'Who is this?'
  });

  guest.createField('name', {
    name: 'Name',
    type: 'Symbol',
    required: true,
  })

  guest.createField('url', {
    name: 'url',
    type: 'Symbol',
    required: false,
  })

}