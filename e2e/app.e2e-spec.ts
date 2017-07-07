import { MyMaterialAppPage } from './app.po';

describe('my-material-app App', () => {
  let page: MyMaterialAppPage;

  beforeEach(() => {
    page = new MyMaterialAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
