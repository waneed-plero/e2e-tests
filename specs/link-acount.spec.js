describe('Sign in', () => {
    beforeEach(async () => {
      await device.reloadReactNative();
    });
    it ('should link acount details', async () => {
        const testEmailAddress = 'test4@gmail.com';
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

        await expect(element(by.id('alert-button'))).toBeVisible();
        await element(by.id('alert-button')).tap();

        await expect(element(by.id('profile'))).toBeVisible();
        await element(by.id('profile')).tap();

        await expect(element(by.id('nav-list-item-1'))).toBeVisible();
        await element(by.id('nav-list-item-1')).tap();

        await element(by.label('Money Out')).tap();

        await element(by.id('link-acount-button')).tap();

        await element(by.label('DBS Bank')).tap();

        await element(by.id('transfer-acount-name')).typeText('Any name');

        await element(by.id('transfer-acount-number')).typeText('123456789');

        await element(by.id('screen')).swipe('up', 'slow', 0.5);
        await element(by.id('screen')).tap();

        await element(by.id('add-my-acount')).tap();
    });
});
