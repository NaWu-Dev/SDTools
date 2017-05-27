import { ServiceDocToolPage } from './app.po';

describe('service-doc-tool App', () => {
  let page: ServiceDocToolPage;

  beforeEach(() => {
    page = new ServiceDocToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
