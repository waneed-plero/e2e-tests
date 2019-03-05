describe('Sign in', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
    });
    it ('should save insta', async () => {
      const testEmailAddress = 'test5@gmail.com';
      const otpCode = '123456';

      await element(by.id('onboarding-button')).tap();

      await element(by.id('loginScreenButton')).tap();

      await expect(element(by.id('txt-sign-in-email'))).toBeVisible();
      await element(by.id('txt-sign-in-email')).typeText(testEmailAddress);

      await expect(element(by.id('login-button'))).toBeVisible();
      await element(by.id('login-button')).tap();

      await expect(element(by.id('otp-code'))).toBeVisible();
      await element(by.id('otp-code')).typeText(otpCode);

      await element(by.id('otp-submit-button')).tap();

      await element(by.id('alert-button')).tap();

      await expect(element(by.id('insta-save'))).toBeVisible();
      await element(by.id('insta-save')).tap();
      
      await expect(element(by.id('save-insta-inc-amount'))).toBeVisible();
      await element(by.id('save-insta-inc-amount')).tap();

      await element(by.id('insta-item-1')).tap();

      await element(by.id('save-insta-button')).tap();

      await expect(element(by.id('save-insta-button'))).toNotExist();
    });
    it ('should logout', async () => {
      await expect(element(by.id('today'))).toBeVisible();
      await element(by.id('profile')).tap();
      await element(by.id('nav-list-item-2')).tap();
      await element(by.id('screen')).swipe('up', 'slow', 0.5);
      await element(by.id('logout-button')).tap();
      await element(by.label('Yes').and(by.type('_UIAlertControllerActionView'))).tap();
    });
    it ('should not save insta', async () => {
      try {
        await element(by.id('unlock-pin-0')).typeText('0');
        await element(by.id('unlock-pin-1')).typeText('0');
        await element(by.id('unlock-pin-2')).typeText('0');
        await element(by.id('unlock-pin-3')).typeText('0');
      } catch (e) {

      }
      const testEmailAddress = 'test075@test.com';
      const otpCode = '123456';

      await element(by.id('onboarding-button')).tap();

      await element(by.id('loginScreenButton')).tap();

      await expect(element(by.id('txt-sign-in-email'))).toBeVisible();
      await element(by.id('txt-sign-in-email')).typeText(testEmailAddress);

      await expect(element(by.id('login-button'))).toBeVisible();
      await element(by.id('login-button')).tap();

      await expect(element(by.id('otp-code'))).toBeVisible();
      await element(by.id('otp-code')).typeText(otpCode);

      await element(by.id('otp-submit-button')).tap();

      await element(by.id('alert-button')).tap();

      await expect(element(by.id('insta-save'))).toBeVisible();
      await element(by.id('insta-save')).tap();

      await expect(element(by.id('save-insta-inc-amount'))).toBeVisible();
      await element(by.id('save-insta-inc-amount')).tap();

      await element(by.id('insta-item-1')).tap();

      await element(by.id('save-insta-button')).tap();

      await expect(element(by.id('save-insta-button'))).toExist();
    });
});
