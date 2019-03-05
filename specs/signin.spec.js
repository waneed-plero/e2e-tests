describe('Sign in', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  // afterAll(async () => {
  //   await device.launchApp({ delete: true });
  // });

  it ('should not signin if an invalid pin is entered', async () => {
    const testEmailAddress = 'waneed111112@gmail.com';

    await element(by.id('onboarding-button')).tap();

    await expect(element(by.id('signupScreenContainer'))).toBeVisible();

    await expect(element(by.id('loginButtonContainer'))).toBeVisible();

    await expect(element(by.id('loginScreenButton'))).toBeVisible();
    await element(by.id('loginScreenButton')).tap();

    await expect(element(by.id('txt-sign-in-email'))).toBeVisible();
    await element(by.id('txt-sign-in-email')).typeText(testEmailAddress);

    await expect(element(by.id('login-button'))).toBeVisible();
    await element(by.id('login-button')).tap();

    await expect(element(by.text('Email not found'))).toBeVisible();
  });

  it('should login and receive otp code', async () => {
    const testEmailAddress = 'waneed1@gmail.com';
    const otpCode = '123456';

    await element(by.id('onboarding-button')).tap();

    await expect(element(by.id('signupScreenContainer'))).toBeVisible();

    await expect(element(by.id('loginButtonContainer'))).toBeVisible();

    await expect(element(by.id('loginScreenButton'))).toBeVisible();
    await element(by.id('loginScreenButton')).tap();

    await expect(element(by.id('txt-sign-in-email'))).toBeVisible();
    await element(by.id('txt-sign-in-email')).typeText(testEmailAddress);

    await expect(element(by.id('login-button'))).toBeVisible();
    await element(by.id('login-button')).tap();

    await expect(element(by.id('otp-code'))).toBeVisible();
    await element(by.id('otp-code')).typeText(otpCode);

    await element(by.id('otp-submit-button')).tap();
  });
});
