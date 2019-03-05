describe('dashboard tests', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('choose balo after sign up', async () => {
      const testEmailAddress = 'test21@gmail.com';
      const phoneNumber = '12121212';
      const otpCode = '123456';
      const goalAmount = '200';
      const goalDays = '2';
  
      await element(by.id('onboarding-button')).tap();
  
      await expect(element(by.id('txt-sign-up-email'))).toBeVisible();
      await element(by.id('txt-sign-up-email')).typeText(testEmailAddress);
  
      await expect(element(by.id('signup-button'))).toBeVisible();
      await element(by.id('signup-button')).tap();
  
      await expect(element(by.id('phone-number-text'))).toBeVisible();
      await element(by.id('phone-number-text')).typeText(phoneNumber);
  
      await expect(element(by.id('submit-number'))).toBeVisible();
      await element(by.id('submit-number')).tap();
  
      await expect(element(by.id('verify-signup'))).toBeVisible();

      await element(by.id('verify-signup')).typeText(otpCode);
  
      await element(by.id('submit-verification-code-button')).tap();
  
      await expect(element(by.id('alert-button'))).toBeVisible();
      await element(by.id('alert-button')).tap();
      
      await expect(element(by.id('goal-amount'))).toBeVisible();
      await element(by.id('goal-amount')).typeText(goalAmount);

      await expect(element(by.id('goal-months'))).toBeVisible();
      await element(by.id('goal-months')).typeText(goalDays);
  
      await element(by.id('goal-months-text')).tap();

      await expect(element(by.id('today-section-list'))).toBeVisible();
      await element(by.id('today-section-list')).scrollTo('bottom');

      await expect(element(by.id('submit-amount-and-months'))).toExist();
      await element(by.id('submit-amount-and-months')).tap();

      await expect(element(by.id('choose-balo-scrollview'))).toBeVisible();

      await expect(element(by.id('balo-item-0'))).toBeVisible();
      await element(by.id('balo-item-0')).tap();

      await element(by.id('choose-balo-button')).tap();

      await expect(element(by.id('select-plan-button'))).toBeVisible();
      await element(by.id('select-plan-button')).tap();

      await expect(element(by.id('confirm-plan-main-container'))).toBeVisible();
      await element(by.id('confirm-plan-main-container')).swipe('up', 'slow', 0.5);

      
      await expect(element(by.id('confirm-plan-button'))).toBeVisible();
      await element(by.id('confirm-plan-button')).tap();
  });
});
