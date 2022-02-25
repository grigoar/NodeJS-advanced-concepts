// just an example how to add a method to the Page component from puppeteer
const Page = require('puppeteer/lib/Page');

Page.prototype.login = async function () {
  const user = await userFactory();
  console.log(user);
  const { session, sig } = sessionFactory(user);

  await this.setCookie({ name: 'session', value: session });
  await this.setCookie({ name: 'session.sig', value: sig });
  await this.goto('localhost:3000');
  await this.waitFor('a[href="/auth/logout"]');
};
