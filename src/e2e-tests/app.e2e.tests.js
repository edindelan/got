/* eslint-disable */
import puppeteer from 'puppeteer';

expect.extend({ toMatchImageSnapshot });

describe('E2E test suit', () => {
  let page;
  let browser;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      //headless: false,
      //slowMo: 50,
      defaultViewport: {
        width: 1280,
        height: 800,
      },
    });
    page = await browser.newPage();
  }, 5000);

  afterAll(() => {
    browser.close();
  });

  it('login screen renders correctly', async () => {
    await page.goto(config.routes.login, { waitUntil: 'networkidle0' });
    const loginScreenImage = await page.screenshot();
    expect(loginScreenImage).toMatchImageSnapshot({
      failureThreshold: '0.01', // 1% difference as puppeteer takes screenshots with slight difference between envs
      failureThresholdType: 'percent'
    });
  }, 15000);

  it('login failure', async () => {
    await page.goto(config.routes.login, { waitUntil: 'networkidle0' });
    await page.type('[data-testid="userLoginEmail"]', config.defaultTestUser.username, { delay: 50 });
    await page.type('[data-testid="userLoginPassword"]', config.defaultTestUser.wrongPassword, { delay: 50 });
    await page.click('[data-testid="userLoginSubmitButton"]');
    const failureMessage = await page.waitForSelector('[data-testid="userLoginErrorMessage"]');
    expect(failureMessage).toBeTruthy();
  }, 15000);

  it('forgot password', async () => {
    await page.goto(config.routes.forgotPassword, { waitUntil: 'networkidle0' });
    await page.type('[data-testid="forgotPasswordEmail"]', config.defaultTestUser.username, { delay: 50 });
    await page.click('[data-testid="forgotPasswordSubmit"]');
    await page.waitFor(3000);
    const successMessage = await page.waitForSelector('[data-testid="forgotPasswordSuccess"]');
    expect(successMessage).toBeTruthy();
  }, 15000);

  it('redirect to login if not logged in', async () => {
    await page.goto(config.routes.controlCenter, { waitUntil: 'networkidle0' });
    const loginUsername = await page.waitForSelector('[data-testid="userLoginEmail"]');
    expect(loginUsername).toBeTruthy();
  }, 15000);

  it('login successful', async () => {
    await page.goto(config.routes.login, { waitUntil: 'networkidle0' });
    await page.type('[data-testid="userLoginEmail"]', config.defaultTestUser.username, { delay: 50 });
    await page.type('[data-testid="userLoginPassword"]', config.defaultTestUser.password, { delay: 50 });
    await Promise.all([
      page.click('[data-testid="userLoginSubmitButton"]'),
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);
    const dashboardTitle = await page.waitForSelector('[data-testid="dashboardTitle"]');
    expect(dashboardTitle).toBeTruthy();
  }, 15000);

  it('Show 404 Screen if page does not exist', async () => {
    await page.goto(config.routes.notExistingURL, { waitUntil: 'networkidle0' });
    const searchBox = await page.waitForSelector('[data-testid="pageNotFoundContainer"]');
    expect(searchBox).toBeTruthy();
  }, 15000);

  it('control center data saved', async () => {
    await page.goto(config.routes.controlCenter, { waitUntil: 'networkidle0' });
    await page.click('[data-testid="controlOpenOptionsButton"]');
    await page.click('[data-testid="controlSaveOptionsButton"]');
    const searchBox = await page.waitForSelector('[data-testid="controlSaveNotification"]');
    expect(searchBox).toBeTruthy();
  }, 15000);

  it('profile data updated', async () => {
    await page.goto(config.routes.userProfile, { waitUntil: 'networkidle0' });
    await page.click('[data-testid="profileFirstname"]', { clickCount: 3 });
    await page.type('[data-testid="profileFirstname"]', 'Test', { delay: 50 });
    await page.click('[data-testid="profileSubmit"]');
    const searchBox = await page.waitForSelector('[data-testid="profileFeedback"]');
    expect(searchBox).toBeTruthy();
  }, 15000);

  it('chargepoint data updated', async () => {
    await page.goto(config.routes.chargePointList, { waitUntil: 'networkidle0' });
    page.waitFor(3000);
    await Promise.all([
      page.click('[data-testid="chargepointDetailsButton"]'),
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);
    const descriptionField = await page.waitForSelector('[data-testid="chargepointDescription"]');
    await descriptionField.click({ clickCount: 3 });
    await page.type('[data-testid="chargepointDescription"]', 'Pizza', { delay: 50 });
    const stickyMessage = await page.waitForSelector('[data-testid="chargepointNotification"]');
    expect(stickyMessage).toBeTruthy();
  }, 15000);

  it('dashboard/activity chargepoint data loaded', async () => {
    await page.goto(config.routes.dashboard, { waitUntil: 'networkidle0' });
    const accordion = await page.$('[data-testid="chargepointAccordion"]');
    const accordionDetailsButton = await accordion.$('[data-testid="chargepointToggleAccordion"]');
    const statsElementFirst = await accordion.$('[data-testid="chargepointStatsContainer"]');
    // check if child element visible, when yes its opened so do not click, else click
    if (statsElementFirst === null) await accordionDetailsButton.click('[data-testid="chargepointToggleAccordion"]');
    await page.waitFor(3000);
    const statsElement = await accordion.$('[data-testid="chargepointStatsContainer"]');
    expect(statsElement).toBeTruthy();
  }, 15000);

  it('change password', async () => {
    await page.goto(config.routes.userProfile, { waitUntil: 'networkidle0' });
    await page.click('[data-testid="changePasswordButton"]');
    await page.type('[data-testid="changePasswordCurrent"]', config.defaultTestUser.password, { delay: 50 });
    await page.type('[data-testid="changePasswordNew"]', config.defaultTestUser.password, { delay: 50 });
    await page.type('[data-testid="changePasswordNew2"]', config.defaultTestUser.password, { delay: 50 });
    await page.click('[data-testid="changePasswordSave"]');
    const searchBox = await page.waitForSelector('[data-testid="passwordChangeConfirmation"]');
    expect(searchBox).toBeTruthy();
  }, 15000);

  it('logout successful', async () => {
    await page.goto(config.routes.userProfile, { waitUntil: 'networkidle0' });
    await Promise.all( [
      page.click('[data-testid="logoutLink"]'),
      page.waitForNavigation({ waitUntil: 'networkidle0' }),
    ]);
    const searchBox = await page.waitForSelector('[data-testid="userLoginEmail"]');
    expect(searchBox).toBeTruthy();
  }, 15000);

  // it('support inquiry sent', async () => {
  //   await page.goto(config.routes.support, { waitUntil: 'networkidle0' });
  //   await page.select('#subject', 'Evungo Platform');
  //   await page.type('#message', 'text area content', { delay: 50 });
  //   await page.click('button');
  //   const searchBox = await page.waitForSelector('.success-message');
  //   expect(searchBox).toBeTruthy();
  // }, 15000);
});
